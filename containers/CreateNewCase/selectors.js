import { createSelector } from "reselect";
import { initialState } from "./reducer";
import { selectCreateNewClient } from "../CreateNewClient/selectors";


const selectCase = state => state.get("createnewcase", initialState);
const selectGlobal = state => state.get("global");
const makeSelectCaseName = () =>
  createSelector(selectCase, selectCase => selectCase.get("casename"));
const makeSelectCause = () =>
  createSelector(selectCase, selectCase => selectCase.get("cause"));
const makeSelectClassification = () =>
  createSelector(selectCase, selectCase => selectCase.get("classification"));
const makeSelectLoading = () =>
  createSelector(selectCase, selectCase => selectCase.get("loading"));
const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get("error"));
const makeSelectClient = () =>
  createSelector(selectCase, homeState => homeState.get("clients"));
const makeSelectClientId = () =>
  createSelector(selectCase, homeState => homeState.get("clientId"));
const makeSelectCaseError = () =>
  createSelector(selectCase, homeState => homeState.get("caseError"));
export {
  makeSelectCaseName,
  makeSelectCause,
  makeSelectClassification,
  makeSelectLoading,
  makeSelectError,
  makeSelectClient,
  makeSelectClientId,
  makeSelectCaseError
};