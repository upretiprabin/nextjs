import { all, take, call, put, select, takeLatest, takeEvery } from "redux-saga/effects";
import { fetchAllReports, downloadReportSuccess, downloadReportError, fetchAllFilters, giveClientAccessSuccess, giveClientAccessError } from "./actions";
import { request, downloadFile } from "../../utils/request";
import {
  DELETE_REPORT_REQUEST,
  LOAD_ALL_REPORT,
  LOAD_ALL_REPORT_REQUEST,
  CLIENT_DOWNLOAD_REPORT_REQUEST, GIVE_CLIENT_ACCESS, APPLY_FILTER, LOAD_FILTER_REQUEST, FILTER_BY_PARAM_REQUEST
} from "./constants";
import { makeSelectToken, makeSelectUUID } from "../App/selectors";
import swal from "sweetalert";
import { makeSelectEndDate, makeSelectFilterParam, makeSelectStartDate } from "./selectors";

const allReportsUrl = "/api/cases/";

function* loadReports() {
  const investigatorId = yield select(makeSelectUUID());
  const token = yield select(makeSelectToken());

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "authorization": token.toString()
    }
  };
  let reports = [];
  reports = yield call(request, allReportsUrl + investigatorId + "/list", options);
  yield put(fetchAllReports(reports));
}

function* loadFilterData() {
  const token = yield select(makeSelectToken());

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "authorization": token.toString()
    }
  };
  let filters = [];
  filters = yield call(request, allReportsUrl + "LoadFilter", options);
  yield put(fetchAllFilters(filters));
}

function* clientAccess(action) {
  const caseId = action.caseId;
  const token = yield select(makeSelectToken());
  const investigatorId = yield select(makeSelectUUID());
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": token.toString()
      }
    };
    const url = allReportsUrl + "clientAccess/" + investigatorId + "/" + caseId;
    yield call(request, url, options);
    swal("Great!", "An Email has been sent to client of this case", "success");
    yield put(giveClientAccessSuccess());
    yield call(loadReports);
  } catch (e) {
    console.log(e);
    yield put(giveClientAccessError(e));
  }
}

function* downloadReport(action) {
  const caseId = action.caseId;
  const token = yield select(makeSelectToken());
  const investigatorId = yield select(makeSelectUUID());
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": token.toString()
      }
    };
    const url = allReportsUrl + "report/" + investigatorId + "/" + caseId;
    yield call(downloadFile, url, options);
    yield put(downloadReportSuccess());
  } catch (e) {
    yield put(downloadReportError(e));
  }
}

function* deleteReport(action) {
  const caseId = action.caseId;
  const investigatorId = yield select(makeSelectUUID());
  const token = yield select(makeSelectToken());
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "authorization": token.toString()
    }
  };
  yield call(request, allReportsUrl + investigatorId + "/" + caseId + "/delete", options);
}


function* filterReportsByDate() {
  const investigatorId = yield select(makeSelectUUID());
  const startdate = yield select(makeSelectStartDate());
  const enddate = yield select(makeSelectEndDate());
  var fromDate = new Date(startdate);
  var toDate = new Date(enddate);
  const token = yield select(makeSelectToken());
  if (toDate < fromDate) {
    swal("Ohh!", "Filter Date is not correct. Start date is less than End date", "error");
  } else {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": token.toString()
      },
      body: JSON.stringify({ startdate, enddate })
    };
    let reports = [];
    reports = yield call(request, allReportsUrl + investigatorId + "/filter", options);
    yield put(fetchAllReports(reports));
  }
}

function* filterReportsByParam(action) {
  const investigatorId = yield select(makeSelectUUID());
  const token = yield select(makeSelectToken());
  const classificationParam = action.classificationFilter;
  const statusParam = action.statusFilter;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "authorization": token.toString()
    },
    body: JSON.stringify({ classificationParam, statusParam })
  };
  let reports = [];
  reports = yield call(request, allReportsUrl + investigatorId + "/filterByParam", options);
  yield put(fetchAllReports(reports));
}

function* myReportsData() {
  yield takeEvery(LOAD_ALL_REPORT_REQUEST, loadReports);
}

function* loadFilterOptions() {
  yield takeEvery(LOAD_FILTER_REQUEST, loadFilterData);
}

function* deleteReportInfo() {
  yield takeEvery(DELETE_REPORT_REQUEST, deleteReport);
}

function* loadCaseReport() {
  yield takeEvery(CLIENT_DOWNLOAD_REPORT_REQUEST, downloadReport);
}

function* loadGiveClientAccess() {
  yield takeEvery(GIVE_CLIENT_ACCESS, clientAccess);
}


function* filterReportsDataByDate() {
  yield takeEvery(APPLY_FILTER, filterReportsByDate);
}

function* applyfFlterByParam() {
  yield takeEvery(FILTER_BY_PARAM_REQUEST, filterReportsByParam);
}

export default function* defaultSaga() {
  yield all([myReportsData(), deleteReportInfo(), loadCaseReport(), loadGiveClientAccess(), filterReportsDataByDate(), loadFilterOptions(), applyfFlterByParam()]);
}