import {all, call, fork, put, select, takeEvery} from "redux-saga/effects";
import {
  deleteActivityLogLoading,
  fetchCasesFilterLoading,
  fetchCasesFilterSuccess,
  filterByDateLoading,
  filterByParamsLoading,
  loadingActivityLogs,
  successActivityLogs
} from "./reducer";
import swal from "sweetalert";
import {getCookie} from "cookies-next";
import {deleteData, getData, postData} from "../../helpers/serverHelper";
import {ACTIVITYLOGS, CASE} from "../../helpers/urls";
import Router from "next/router";

function* loadMyActivityLogs() {
  const investigatorId = getCookie('uuid');
  let activityLogs = [];
  activityLogs = yield call(getData, ACTIVITYLOGS + "/" + investigatorId + "/list");
  yield put(successActivityLogs({activityLogs}));
}

function* loadFilterData() {
  const investigatorId = getCookie('uuid');
  let filters = [];
  filters = yield call(getData, CASE + "/" + investigatorId + "/list");
  let filterCases = []
  filters[0].map(aCase => (
    filterCases.push({label: aCase.title, value: (aCase.id + "::" + aCase.uuid)})
  ));
  yield put(fetchCasesFilterSuccess({filterCases}));
}

function* deleteActivityLogs(action) {
  const caseId = action.payload.caseId;
  const activityUuid = action.payload.activityUuid;
  yield call(deleteData, ACTIVITYLOGS + "/" + caseId + "/" + activityUuid + "/delete");
}

function* filterActivityLogs() {
  const investigatorId = getCookie('uuid');
  const startdate = yield select((state) => state.activityLogs.startdate);
  const enddate = yield select((state) => state.activityLogs.enddate);
  var fromDate = new Date(startdate);
  var toDate = new Date(enddate);
  if (toDate < fromDate) {
    swal("Ohh!", "Filter Date is not correct. Start date is less than End date", "error");
  } else {
    let filteredLogs = [];
    filteredLogs = yield call(postData, {
      url: ACTIVITYLOGS + "/" + investigatorId + "/filter",
      req: {startdate, enddate}
    });
    yield put(successActivityLogs({activityLogs: filteredLogs}));
  }
}

function* filterReportsByParam(action) {
  const investigatorId = getCookie('uuid');
  const caseParam = action.payload.caseFilter;
  let filteredLogs = [];
  filteredLogs = yield call(postData, {url: ACTIVITYLOGS + "/" + investigatorId + "/filterByParam", req: {caseParam}});
  yield put(successActivityLogs({activityLogs: filteredLogs}));
}

function* myActivityLogsData() {
  yield takeEvery(loadingActivityLogs.type, loadMyActivityLogs);
}

function* filterCasesData() {
  yield takeEvery(fetchCasesFilterLoading.type, loadFilterData);
}

function* deleteActivityData() {
  yield takeEvery(deleteActivityLogLoading.type, deleteActivityLogs);
}

function* filterLogData() {
  yield takeEvery(filterByDateLoading.type, filterActivityLogs);
}

function* applyFilterByParam() {
  yield takeEvery(filterByParamsLoading.type, filterReportsByParam);
}

export default function* activityLogsSaga() {
  yield fork(deleteActivityData);
  yield fork(filterLogData);
  yield fork(applyFilterByParam);
  yield all([myActivityLogsData(), filterCasesData()]);
}
