import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectActivity = state => state.get("createactivitylog", initialState);
const makeSelectDate = () =>
  createSelector(selectActivity, selectActivity => selectActivity.get("date"));
const makeSelectTime = () =>
  createSelector(selectActivity, selectActivity => selectActivity.get("time"));
const makeSelectActivity = () =>
  createSelector(selectActivity, selectActivity => selectActivity.get("activity"));
const makeSelectAllMyActivityLogs = () =>
  createSelector(selectActivity, selectActivity => selectActivity.get("activityLogs"));

export { selectActivity, makeSelectDate, makeSelectTime, makeSelectActivity, makeSelectAllMyActivityLogs };
