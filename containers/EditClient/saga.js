import { all, take, call, put, select, takeLatest, takeEvery } from "redux-saga/effects";

import { request } from "../../utils/request";
import {
  editClientError,
  editClientSuccess, loadClientDetailsSuccess, loadClientDetailsError
} from "./actions";

import {
  EDIT_CLIENT_REQUEST,
  EDIT_CLIENT_SUCCESS,
  EDIT_CLIENT_ERROR,
  LOAD_CLIENT_DETAILS_REQUEST
} from "./constants";

import { makeSelectToken, makeSelectUUID } from "../App/selectors";
import { makeSelectClient } from "./selectors";
import swal from "sweetalert";

const editClientUrl = "/api/clients/";

function* editClient(action) {
  const clientFirstName = action.payload.firstName;
  const clientLastName = action.payload.lastName;
  const clientEmail = action.payload.email;
  const clientPOCName = action.payload.nameOfPOC;
  const clientPOCEmail = action.payload.emailOfPOC;
  const clientPOCPhone = action.payload.phoneOfPOC;
  const username = action.payload.username;
  const password = action.payload.password;

  const errors = [];

  if (clientFirstName === undefined || clientFirstName.length <= 2) {
    errors.push({ field: "clientFirstName", code: "Client First is not Valid", rejectedValue: "" });
  }
  if (clientLastName === undefined || clientLastName.length <= 2) {
    errors.push({ field: "clientLastName", code: "Client Last is not Valid", rejectedValue: "" });
  }
  if (clientEmail === undefined || clientEmail.length <= 2) {
    errors.push({ field: "clientEmail", code: "Client Email is not Valid", rejectedValue: "" });
  }
  if (clientPOCName === undefined || clientPOCName.length <= 2) {
    errors.push({ field: "clientPOCName", code: "Client Point of Contact Name is not Valid", rejectedValue: "" });
  }
  if (clientPOCEmail === undefined || clientPOCEmail.length <= 2) {
    errors.push({ field: "clientPOCEmail", code: "Client Point of Contact Email is not Valid", rejectedValue: "" });
  }
  if (clientPOCPhone === undefined || clientPOCPhone.length <= 2) {
    errors.push({ field: "clientPOCPhone", code: "Client Point of Contact Phone is not Valid", rejectedValue: "" });
  }

  if (errors.length > 0) {
    yield put(editClientError(errors));
  } else {
    const payload = {
      firstName: clientFirstName,
      lastName: clientLastName,
      email: clientEmail,
      nameOfPOC: clientPOCName,
      emailOfPOC: clientPOCEmail,
      username: username,
      password: password,
      phoneOfPOC: clientPOCPhone
    };
    const investigatorId = yield select(makeSelectUUID());
    const token = yield select(makeSelectToken());
    try {
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "authorization": token.toString()
        },
        body: JSON.stringify(payload)
      };

      const clientDetails = yield select(makeSelectClient());

      const activeUrl = editClientUrl + clientDetails.uuid + "/";

      const editClient = yield call(request, activeUrl, options);
      if (editClient.fieldErrors || editClient.globalErrors) {
        yield put(editClientError(editClient));
        return;
      }
      swal("Hurrah", "Client has been successfully Updated", "success");
      yield put(editClientSuccess(editClient));
    } catch (error) {
      yield put(editClientError(error));
    }
  }
}

function* loadClientDetails(action) {
  const clientId = action.clientId;
  const investigatorId = action.investigatorId;
  const token = yield select(makeSelectToken());
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": token.toString()
      }
    };

    const activeUrl = editClientUrl + clientId;
    const clientDetails = yield call(request, activeUrl, options);
    yield put(loadClientDetailsSuccess(clientDetails));
  } catch (error) {
    yield put(loadClientDetailsError(error));
  }
}

function* editClientRequest() {
  yield takeLatest(EDIT_CLIENT_REQUEST, editClient);
}

function* loadClientRequest() {
  yield takeLatest(LOAD_CLIENT_DETAILS_REQUEST, loadClientDetails);
}

export default function* editClientData() {
  yield all([editClientRequest(), loadClientRequest()]);
}
