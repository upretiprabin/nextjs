import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectHeader = state => state.get("header", initialState);

const makeSelectPhotoLink = () =>
  createSelector(selectHeader, substate => substate.get("photoLink"));
const makeSelectInvestigator = () =>
  createSelector(selectHeader, substate => substate.get("investigator"));

export {
  makeSelectPhotoLink, makeSelectInvestigator
};