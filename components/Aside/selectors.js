import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectCase = state => state.get("aside", initialState);
const makeSelectLoading = () =>
  createSelector(selectCase, globalState => globalState.get("loading"));
const makeSelectError = () =>
  createSelector(selectCase, globalState => globalState.get("error"));
export {
  makeSelectLoading,
  makeSelectError
};