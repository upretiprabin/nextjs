import { buffers, END, eventChannel } from "redux-saga";
import history from "./history";
import {deleteCookie} from "cookies-next";
import * as download from "./download";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  // return response;
  return response.json();
}

function checkStatus(response) {
  if (response.status === 403) {
    deleteCookie("uuid");
    deleteCookie("role");
    deleteCookie("token");
    history.push("/login");
  }
  if ((response.status >= 200 && response.status < 300) || response.status === 422) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseBlob(response) {
  return response.blob();
}

export function request(url, options) {
  return fetch(apiUrl + url, options)
    .then(checkStatus)
    .then(parseJSON);
}

export function downloadFile(url, options) {
  return fetch(apiUrl + url, options)
    .then(checkStatus)
    .then(parseBlob)
    .then(function(blob) {
      download(blob, "Report");
    });
}

export function createUploadFileChannel(endpoint, file) {
  return eventChannel(emitter => {
    const xhr = new XMLHttpRequest();

    const onProgress = (e) => {
      if (e.lengthComputable) {
        const progress = e.loaded / e.total;
        emitter({ progress });
      }
    };
    const onFailure = (e) => {
      emitter({ err: new Error("Upload failed") });
      emitter(END);
    };

    xhr.upload.addEventListener("progress", onProgress);
    xhr.upload.addEventListener("error", onFailure);
    xhr.upload.addEventListener("abort", onFailure);
    xhr.onreadystatechange = () => {
      const { readyState, status, responseText } = xhr;
      if (readyState === 4) {
        if (status === 200) {
          emitter({ success: true, fileId: responseText });
          emitter(END);
        }
        else {
          onFailure(null);
        }
      }
    };

    let formData = new FormData();
    formData.append("file", file);
    formData.append("fileType", file.type);
    xhr.open("POST", apiUrl + endpoint, true);
    xhr.send(formData);

    return () => {
      xhr.upload.removeEventListener("progress", onProgress);
      xhr.upload.removeEventListener("error", onFailure);
      xhr.upload.removeEventListener("abort", onFailure);
      xhr.onreadystatechange = null;
      xhr.abort();
    };
  }, buffers.sliding(2));
}
