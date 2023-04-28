import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectHome = state => state.get("myClients", initialState);

const makeSelectAllClients = () =>
  createSelector(selectHome, homeState => homeState.get("clients"));
const makeSelectClientUuid = () =>
  createSelector(selectHome, homeState => homeState.get("clientUuid"));

export { selectHome, makeSelectAllClients, makeSelectClientUuid };
