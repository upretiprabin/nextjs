import {call, fork, put, select, takeEvery, takeLatest} from "redux-saga/effects";
import {
  fetchAllActivityLogsByCaseError,
  fetchAllActivityLogsByCaseLoading,
  fetchAllActivityLogsByCaseSuccess,
  newActivityError,
  newActivityLoading,
  newActivitySuccess,
  setActivityContent,
  setActivityDate,
  setActivityTime,
  updateActivityError,
  updateActivityLoading,
  updateActivitySuccess
} from "./reducer";
import {ACTIVITYLOGS} from "../../helpers/urls";
import {getData, postData, putData} from "../../helpers/serverHelper";
import swal from "sweetalert";

function* createActivityRequest(action) {
  const caseId = action.payload.caseId;
  const date = yield select((state) => state.activeActivityLogs.date);
  const time = yield select((state) => state.activeActivityLogs.time);
  const activity = yield select((state) => state.activeActivityLogs.activity);
  const myActivityLogs = [...(yield select((state) => state.activeActivityLogs.activityLogs))];

  if (!activity || activity.length <= 2) {
    swal("Ohh!", "Something is not correct. Please enter activity", "error");
    yield(newActivityError());
  } else if (!date || date.length <= 2) {
    swal("Ohh!", "Something is not correct. Please choose date", "error");
    yield(newActivityError());
  } else if (!time || time.length <= 2) {
    swal("Ohh!", "Something is not correct. Please choose time", "error");
    yield(newActivityError());
  } else {
    try {
      const createActivityUrl = ACTIVITYLOGS + "/" + caseId + "/create";
      const newActivity = yield call(postData, {url: createActivityUrl, req: {date, time, activity, caseId}});
      myActivityLogs.push(newActivity);
      yield put(newActivitySuccess());
      yield put(fetchAllActivityLogsByCaseSuccess({activityLogs: myActivityLogs}));
      yield put(setActivityDate(""));
      yield put(setActivityTime(""));
      yield put(setActivityContent(""));
    } catch (error) {
      yield put(newActivityError(error));
    }
  }
}

function* updateActivityRequest(action) {
  const date = yield select((state) => state.activeActivityLogs.date);
  const time = yield select((state) => state.activeActivityLogs.time);
  const activity = yield select((state) => state.activeActivityLogs.activity);
  const activityId = action.payload.activityId;
  if (time === undefined || time.length <= 2) {
    swal("Ohh!", "Something is not correct. Please enter time", "error");
    yield put(updateActivityError());
  } else {
    try {
      const createActivityUrl = ACTIVITYLOGS + "/" + activityId + "/update";
      yield call(putData, {url: createActivityUrl, req: {date, time, activity, activityId}});
      yield put(updateActivitySuccess());
    } catch (error) {
      yield put(error);
      console.log(error);
      yield put(updateActivityError(error));
    }
  }
}

function* loadMyActivityLogs(action) {
  let caseId = action.payload.caseId;
  try {
    const activityLogs = yield call(getData, ACTIVITYLOGS + "/" + caseId);
    yield put(fetchAllActivityLogsByCaseSuccess({activityLogs}));
  } catch (e) {
    yield put(fetchAllActivityLogsByCaseError(e));
  }
}

function* myActivityLogsData() {
  yield takeEvery(fetchAllActivityLogsByCaseLoading.type, loadMyActivityLogs);
}

function* newActivityCreateRequest() {
  yield takeLatest(newActivityLoading.type, createActivityRequest);
}

function* updateActivityRequestWorker() {
  yield takeLatest(updateActivityLoading.type, updateActivityRequest);
}


export default function* activeActivityLogsSaga() {
  yield fork(newActivityCreateRequest);
  yield fork(updateActivityRequestWorker);
  yield fork(myActivityLogsData);
}
