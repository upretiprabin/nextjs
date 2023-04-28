import { initialState } from "./reducer";
import { createSelector } from "reselect";

const selectCaseSection = state => state?.get("editsection", initialState);
const selectDashboard = state => state?.get("dashboard");

const makeSelectActiveCase = () =>
  createSelector(selectCaseSection, dashboardState => dashboardState?.get("activeCase"));
const makeSelectAllSections = () => 
  createSelector(selectCaseSection, dashboardState => dashboardState?.get("sections"));
const makeSelectedSection = () =>
  createSelector(selectCaseSection, dashboardState => dashboardState?.get("activeSection"));
const makeSelectLoading = () =>
  createSelector(selectCaseSection, dashboardState => dashboardState?.get("loading"));
const makeSelectError = () =>
  createSelector(selectCaseSection, dashboardState => dashboardState?.get("error"));
const makeSelectDashboardCase = () => 
  createSelector(selectDashboard, dashboardState => dashboardState?.get("activeCaseDetail"));
export {
  selectCaseSection,
  makeSelectActiveCase,
  makeSelectAllSections,
  makeSelectedSection,
  makeSelectLoading,
  makeSelectError,
  makeSelectDashboardCase
};
