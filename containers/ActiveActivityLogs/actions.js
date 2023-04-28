import {
  CHANGE_TIME,
  CHANGE_DATE,
  CHANGE_ACTIVITY,
  NEW_ACTIVITY_REQUEST,
  LOAD_ALL_MY_ACTIVITY_LOGS,
  LOAD_ALL_MY_ACTIVITY_LOGS_REQUEST, NEW_ACTIVITY_ERROR, NEW_ACTIVITY_SUCCESS
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

export function newActivityEntriesRequest(caseId) {
  return {
    type: NEW_ACTIVITY_REQUEST,
    caseId
  };
}

export function newActivityEntriesSuccess() {
  return {
    type: NEW_ACTIVITY_SUCCESS
  };
}

export function newActivityEntriesError() {
  return {
    type: NEW_ACTIVITY_ERROR
  };
}

export function fetchAllMyActivityLogs(activityLogs) {
  return {
    type: LOAD_ALL_MY_ACTIVITY_LOGS,
    activityLogs
  };
}

export function fetchAllMyActivityLogsRequest(caseId) {
  return {
    type: LOAD_ALL_MY_ACTIVITY_LOGS_REQUEST,
    caseId
  };
}
