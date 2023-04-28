import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectProfile = state => state.get("editprofile", initialState);
const selectGlobal = state => state.get("global");

const makeSelectLoading = () =>
  createSelector(selectProfile, state => state.get("loading"));

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get("error"));

const makeSelectInvestigator = () =>
  createSelector(selectProfile, substate => substate.get("investigator"));

export {
  makeSelectLoading,
  makeSelectError,
  makeSelectInvestigator
};