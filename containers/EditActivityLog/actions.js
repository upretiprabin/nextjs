import {
  CHANGE_TIME,
  CHANGE_DATE,
  CHANGE_ACTIVITY,
  UPDATE_ACTIVITY_REQUEST,
  LOAD_ALL_MY_ACTIVITY_LOGS,
  LOAD_ALL_MY_ACTIVITY_LOGS_REQUEST
} from "./constants";

export function changeTime(time) {
  return {
    type: CHANGE_TIME,
    time
  };
}

export function changeDate(date) {
  return {
    type: CHANGE_DATE,
    date
  };
}

export function changeActivity(activity) {
  return {
    type: CHANGE_ACTIVITY,
    activity
  };
}

export function updateEntriesRequest(payload) {
  return {
    type: UPDATE_ACTIVITY_REQUEST,
    payload
  };
}

export function fetchAllMyActivityLogs(activityLogs) {
  return {
    type: LOAD_ALL_MY_ACTIVITY_LOGS,
    activityLogs
  };
}

export function fetchAllMyActivityLogsRequest(activityId) {
  return {
    type: LOAD_ALL_MY_ACTIVITY_LOGS_REQUEST,
    activityId
  };
}
