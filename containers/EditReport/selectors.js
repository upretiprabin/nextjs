import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectCase = state => state.get("editreport", initialState);
const selectGlobal = state => state.get("global");

const makeSelectClients = () =>
  createSelector(selectCase, homeState => homeState.get("clients"));
const makeSelectEditCase = () =>
  createSelector(selectCase, homeState => homeState.get("editCase"));
const makeSelectCaseError = () =>
  createSelector(selectCase, homeState => homeState.get("caseError"));
const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.get("loading"));
const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get("error"));

export {
  makeSelectLoading,
  makeSelectError,
  makeSelectClients,
  makeSelectCaseError,
  makeSelectEditCase
};
