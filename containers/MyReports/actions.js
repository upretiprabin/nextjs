import swal from 'sweetalert';
import {deleteData, getData, getDataWithParams, postData, putData} from '../../helpers/serverHelper';
import {CASE} from '../../helpers/urls';
import * as download from '../../utils/download';
import {
  clientDownloadReportError,
  clientDownloadReportRequest,
  clientDownloadReportSuccess,
  clientReportAccessError,
  clientReportAccessRequest,
  clientReportAccessSuccess,
  loadAllFilters,
  loadAllReports,
  loadAllReportsRequest
} from './reducer';
import {deleteCookie, getCookie} from "cookies-next";
import Router from "next/router";

export const loadReports = async (dispatch) => {
  try {
    const id = getCookie('uuid');
    let reports = [];
    dispatch(loadAllReportsRequest());
    reports = await getData(CASE + '/' + id + '/list');
    dispatch(loadAllReports(reports));
  } catch (error) {
    console.log(error);
    dispatch(loadAllReports([]));
  }
}

export const loadFilterData = async (dispatch) => {
  try {
    let filters = [];
    filters = await getData(CASE + '/loadFilter');
    dispatch(loadAllFilters(filters));
  } catch (error) {
    console.log('filterData', error);
  }
}

export const clientAccess = async (dispatch, caseId, clientEmail) => {
  const investigatorId = getCookie('uuid');
  try {
    const url = CASE + "/clientAccess/" + investigatorId + "/" + caseId;
    await getDataWithParams({url, params: {clientEmail}});
    dispatch(clientReportAccessRequest());
    swal("Great!", "An Email has been sent to client of this case", "success");
    dispatch(clientReportAccessSuccess());
  } catch (e) {
    console.log(e);
    dispatch(clientReportAccessError(e));
  }
}


function checkStatus(response) {
  if (response.status === 403) {
    deleteCookie("uuid");
    deleteCookie("role");
    deleteCookie("token");
    Router.push("/login");
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

export const downloadReportData = async (dispatch, caseId) => {
  const investigatorId = getCookie('uuid');
  const token = getCookie('token');
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token.toString()}`
      }
    };
    dispatch(clientDownloadReportRequest());
    const url = CASE + "/report/" + investigatorId + "/" + caseId;
    // await getData(url);
    fetch(process.env.NEXT_PUBLIC_API_URL + url, options)
      .then(checkStatus)
      .then(parseBlob)
      .then(async function (blob) {
        await download(blob, "Report");
        dispatch(clientDownloadReportSuccess());
      }).catch(e => {
      dispatch(clientDownloadReportError());
    });
  } catch (e) {
    dispatch(clientDownloadReportError());
  }
}

export const deleteReport = async (dispatch, caseId) => {
  try {
    const investigatorId = getCookie('uuid');
    const data = await deleteData(CASE + '/' + investigatorId + "/" + caseId + "/delete");
    Router.reload();
  } catch (error) {
    console.log(error);
  }
}

export const completeReport = async (dispatch, caseId, status) => {
  try {
    const investigatorId = getCookie('uuid');
    const data = await putData({url: CASE + '/' + investigatorId + "/" + caseId + "/complete", req:{status}});
    Router.reload();
  } catch (error) {
    console.log(error);
  }
}


export const filterReportsByDate = async (dispatch, startdate, enddate) => {
  try {

    const investigatorId = getCookie('uuid');
    var fromDate = new Date(startdate);
    var toDate = new Date(enddate);
    if (toDate < fromDate) {
      swal("Ohh!", "Filter Date is not correct. Start date is less than End date", "error");
    } else {
      let reports = [];
      dispatch(loadAllReportsRequest());
      reports = await postData({url: CASE + '/' + investigatorId + "/filter", req: {startdate, enddate}});
      dispatch(loadAllReports(reports));
    }
  } catch (error) {
    dispatch(loadAllReports([]));
    console.log(error);
  }
}

export const filterReportsByParam = async (dispatch, classificationParam, statusParam) => {
  try {
    const investigatorId = getCookie('uuid');
    let reports = [];
    dispatch(loadAllReportsRequest());
    reports = await postData({
      url: CASE + '/' + investigatorId + "/filterByParam",
      req: {classificationParam, statusParam}
    });
    dispatch(loadAllReports(reports));
  } catch (error) {
    console.log(error);
    dispatch(loadAllReports([]));

  }
}

