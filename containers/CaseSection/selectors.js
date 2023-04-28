import { initialState } from "./reducer";
import { createSelector } from "reselect";

const selectCaseSection = state => state.get("casesection", initialState);
const makeSelectActiveCase = () =>
  createSelector(selectCaseSection, dashboardState => dashboardState.get("activeCase"));
const makeSelectAllSections = () =>
  createSelector(selectCaseSection, dashboardState => dashboardState.get("sections"));
const makeSelectLoading = () =>
  createSelector(selectCaseSection, dashboardState => dashboardState.get("loading"));
const makeSelectError = () =>
  createSelector(selectCaseSection, dashboardState => dashboardState.get("error"));
export {
  selectCaseSection,
  makeSelectActiveCase,
  makeSelectAllSections,
  makeSelectLoading,
  makeSelectError
};
