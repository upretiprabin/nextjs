/**
 * Gets the repositories of the user from Github
 */

import { repoLoadingError, reposLoaded } from "containers/App/actions";

import { request } from "utils/request";
import { LOAD_ALL_MY_ACTIVITY_LOGS_REQUEST, UPDATE_ACTIVITY_REQUEST } from "./constants";
import { all, take, call, put, select, takeLatest, takeEvery } from "redux-saga/effects";
import { makeSelectDate, makeSelectTime, makeSelectActivity, makeSelectAllMyActivityLogs } from "./selectors";
import { makeSelectToken, makeSelectUUID } from "../App/selectors";
import swal from "sweetalert";
import { fetchAllMyActivityLogs } from "./actions";

function* updateActivityRequest(action) {
  const date = action.payload.date;
  const time = action.payload.time;
  const activity = action.payload.activity;
  const activityId = action.payload.activityId; //"a94a66b5-362f-491d-aa40-c0eba6f11e74";
  const token = yield select(makeSelectToken());
  if (time === undefined || time.length <= 2) {
    swal("Ohh!", "Something is not correct. Please enter time", "error");
  }
  else {
    try {
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "authorization": token.toString()
        },
        body: JSON.stringify({ date, time, activity, activityId })
      };
      const createActivityUrl = "/api/activityEntries/" + activityId + "/update";
      yield call(request, createActivityUrl, options);
    } catch (error) {
      yield put(error);
      console.log(error);
    }
  }
}

const allMyActivityLogsUrl = "/api/activityEntries/";

function* loadMyActivityLogs(action) {
  const investigatorId = yield select(makeSelectUUID());
  const token = yield select(makeSelectToken());
  const activityId = action.activityId;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "authorization": token.toString()
    }
  };
  let myActivityLogs = [];
  myActivityLogs = yield call(request, allMyActivityLogsUrl + activityId + "/retrieve", options);
  yield put(fetchAllMyActivityLogs(myActivityLogs));
}

function* myActivityLogsData() {
  yield takeEvery(LOAD_ALL_MY_ACTIVITY_LOGS_REQUEST, loadMyActivityLogs);
}

function* newActivityCreateRequest() {
  yield takeLatest(UPDATE_ACTIVITY_REQUEST, updateActivityRequest);
}

export default function* createActivityData() {
  yield all([newActivityCreateRequest(), myActivityLogsData()]);
}
