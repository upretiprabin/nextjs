import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectEditClient = state => state.get("editclient", initialState);

const makeSelectClient = () =>
  createSelector(selectEditClient, homeState => homeState.get("client"));
const makeSelectClientError = () =>
  createSelector(selectEditClient, homeState => homeState.get("clientError"));

export {
  selectEditClient,
  makeSelectClient,
  makeSelectClientError
};
