import {call, fork, put, takeEvery, takeLatest} from "redux-saga/effects";
import {downloadFile} from "../../utils/request";
import {
  clientCasesLoading,
  clientCasesSuccess,
  clientCasesError,
  downloadClientReportSuccess,
  downloadClientReportLoading,
  downloadClientReportError
} from "./reducer";
import {getCookie} from "cookies-next";
import {getData} from "../../helpers/serverHelper";
import {CASE} from "../../helpers/urls";

function* loadReports() {
  const clientId = getCookie('uuid');
  try {
    let reports = yield call(getData, CASE + "/" + clientId + "/list");
    yield put(clientCasesSuccess({reports}));
  } catch (e) {
    yield put(clientCasesError(e));
  }
}

function* downloadReport(action) {
  const caseId = action.payload.caseId;
  const clientId = getCookie('uuid');
  const token = getCookie('token');
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": token.toString()
      }
    };
    const url = "/cases/report/" + clientId + "/" + caseId;
    yield call(downloadFile, url, options);
    yield put(downloadClientReportSuccess());
  } catch (e) {
    yield put(downloadClientReportError(e));
  }
}

function* myReportsData() {
  yield takeLatest(clientCasesLoading.type, loadReports);
}

function* loadCaseReport() {
  yield takeEvery(downloadClientReportLoading.type, downloadReport);
}

export default function* clientCaseSaga() {
  yield fork(myReportsData);
  yield fork(loadCaseReport);
}