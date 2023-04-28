/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from "immutable";

import {
  CHANGE_TIME,
  CHANGE_DATE,
  CHANGE_ACTIVITY,
  UPDATE_ACTIVITY_REQUEST,
  LOAD_ALL_MY_ACTIVITY_LOGS,
  LOAD_ALL_MY_ACTIVITY_LOGS_REQUEST
} from "./constants";


// The initial state of the App
export const initialState = fromJS({
  time: "",
  date: "",
  activity: "",
  activityLogs: []
});

function createActivityReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TIME:
      return state.set("time", action.time);
    case CHANGE_DATE:
      return state.set("date", action.date);
    case CHANGE_ACTIVITY:
      return state.set("activity", action.activity);
    case UPDATE_ACTIVITY_REQUEST:
      return state.set("loading", true).set("error", false).set("payload", action.payload);
    case LOAD_ALL_MY_ACTIVITY_LOGS:
      return state.set("activityLogs", action.activityLogs);
    case LOAD_ALL_MY_ACTIVITY_LOGS_REQUEST:
      return state.set("activityId", action.activityId);
    default:
      return state;
  }
}

export default createActivityReducer;
