import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectHome = state => state.get("myActivityLogs", initialState);
const makeSelectAllMyActivityLogs = () =>
  createSelector(selectHome, homeState => homeState.get("activityLogs"));
const makeSelectActivityUuid = () =>
  createSelector(selectHome, homeState => homeState.get("activityUuid"));
const makeSelectStartDate = () =>
  createSelector(selectHome, homeState => homeState.get("startdate"));
const makeSelectEndDate = () =>
  createSelector(selectHome, homeState => homeState.get("enddate"));
const makeSelectLoading = () =>
  createSelector(selectHome, homeState => homeState.get("loading"));
export { selectHome, makeSelectAllMyActivityLogs, makeSelectActivityUuid,
  makeSelectStartDate, makeSelectEndDate, makeSelectLoading };
