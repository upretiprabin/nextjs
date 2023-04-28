import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectCreateNewClient = state => state.get("createnewclient", initialState);

const makeSelectClientFirstName = () =>
  createSelector(selectCreateNewClient, homeState => homeState.get("clientFirstName"));
const makeSelectClientLastName = () =>
  createSelector(selectCreateNewClient, homeState => homeState.get("clientLastName"));
const makeSelectClientEmail = () =>
  createSelector(selectCreateNewClient, homeState => homeState.get("clientEmail"));
const makeSelectClientUsername = () =>
  createSelector(selectCreateNewClient, homeState => homeState.get("clientUsername"));
const makeSelectClientPassword = () =>
  createSelector(selectCreateNewClient, homeState => homeState.get("clientPassword"));
const makeSelectClientPOCName = () =>
  createSelector(selectCreateNewClient, homeState => homeState.get("clientPOCName"));
const makeSelectClientPOCPhone = () =>
  createSelector(selectCreateNewClient, homeState => homeState.get("clientPOCPhone"));
const makeSelectClientPOCEmail = () =>
  createSelector(selectCreateNewClient, homeState => homeState.get("clientPOCEmail"));
const makeSelectClientError = () =>
  createSelector(selectCreateNewClient, homeState => homeState.get("clientError"));

export {
  selectCreateNewClient,
  makeSelectClientFirstName,
  makeSelectClientLastName,
  makeSelectClientEmail,
  makeSelectClientUsername,
  makeSelectClientPassword,
  makeSelectClientPOCName,
  makeSelectClientPOCPhone,
  makeSelectClientPOCEmail,
  makeSelectClientError
};
