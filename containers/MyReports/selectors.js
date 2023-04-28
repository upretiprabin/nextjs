import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectHome = state => state.get("myReports", initialState);

const makeSelectAllReports = () =>
  createSelector(selectHome, homeState => homeState.get("reports"));
const makeSelectAllFilters = () =>
  createSelector(selectHome, homeState => homeState.get("filters"));
const makeSelectStartDate = () =>
  createSelector(selectHome, homeState => homeState.get("startdate"));
const makeSelectEndDate = () =>
  createSelector(selectHome, homeState => homeState.get("enddate"));
const makeSelectLoading = () =>
  createSelector(selectHome, homeState => homeState.get("loading"));

export {
  selectHome,
  makeSelectAllReports,
  makeSelectStartDate,
  makeSelectEndDate,
  makeSelectAllFilters,
  makeSelectLoading
};
