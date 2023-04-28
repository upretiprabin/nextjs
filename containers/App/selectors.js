import { createSelector } from "reselect";

const selectGlobal = state => state.get("global");

const selectRouter = state => state.get("router");

const makeSelectUUID = () =>
  createSelector(selectGlobal, globalState => globalState.get("uuid"));

const makeSelectRole = () =>
  createSelector(selectGlobal, globalState => globalState.get("role"));

const makeSelectToken = () =>
  createSelector(selectGlobal, globalState => globalState.get("token"));

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.get("loading"));

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get("error"));

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState =>
    routerState.get("location").toJS()
  );

export {
  selectGlobal,
  makeSelectToken,
  makeSelectLoading,
  makeSelectError,
  makeSelectLocation,
  makeSelectUUID,
  makeSelectRole
};
