import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectHome = state => state.get("client", initialState);

const makeSelectAllReports = () =>
  createSelector(selectHome, homeState => homeState.get("reports"));

const makeSelectLoading = () =>
    createSelector(selectHome, homeState => homeState.get("loading"));

const makeSelectError = () =>
    createSelector(selectHome, homeState => homeState.get("error"));

export { selectHome, makeSelectAllReports, makeSelectLoading, makeSelectError };
