import { initialState } from "./reducer";
import { createSelector } from "reselect";

const selectDashBoard = state => state.get("dashboard", initialState);

const makeSelectAllCases = () =>
  createSelector(selectDashBoard, dashboardState => dashboardState.get("cases"));
const makeSelectLoading = () =>
  createSelector(selectDashBoard, dashboardState => dashboardState.get("loading"));
const makeSelectError = () =>
  createSelector(selectDashBoard, dashboardState => dashboardState.get("error"));
const makeSelectActiveCaseDetail = () => 
  createSelector(selectDashBoard, dashboardState => dashboardState.get("activeCaseDetail"));
export { selectDashBoard, makeSelectAllCases, makeSelectLoading, 
  makeSelectError, makeSelectActiveCaseDetail};
