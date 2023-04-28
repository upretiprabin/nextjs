import { initialState } from "./reducer";
import { createSelector } from "reselect";

const selectCaseSection = state => state.get("previewreport", initialState);
const makeSelectActiveCase = () =>
  createSelector(selectCaseSection, dashboardState => dashboardState.get("activeCase"));
const makeSelectActiveInvestigator = () =>
  createSelector(selectCaseSection, dashboardState => dashboardState.get("investigator"));
const makeSelectAllSections = () =>
  createSelector(selectCaseSection, dashboardState => dashboardState.get("sections"));
const makeSelectLoading = () =>
  createSelector(selectCaseSection, dashboardState => dashboardState.get("loading"));
const makeSelectError = () =>
  createSelector(selectCaseSection, dashboardState => dashboardState.get("error"));
export {
  selectCaseSection,
  makeSelectActiveCase,
  makeSelectActiveInvestigator,
  makeSelectAllSections,
  makeSelectLoading,
  makeSelectError
};
