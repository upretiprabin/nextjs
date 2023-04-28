import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectLogin = state => state.get("forgotpassword", initialState);

const makeSelectLoading = () =>
  createSelector(selectLogin, substate => substate.get("loading"));

const makeSelectError = () =>
  createSelector(selectLogin, substate => substate.get("error"));

const makeSelectEmail = () =>
  createSelector(selectLogin, substate => substate.get("email"));


export {
  makeSelectEmail,
  makeSelectLoading,
  makeSelectError
};
