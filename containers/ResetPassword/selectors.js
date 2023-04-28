import {createSelector} from "reselect";
import {initialState} from "./reducer";

const selectLogin = state => state.get("resetpassword", initialState);

const makeSelectLoading = () =>
  createSelector(selectLogin, substate => substate.get("loading"));
const makeSelectError = () =>
  createSelector(selectLogin, substate => substate.get("error"));
const makeSelectUuid = () =>
  createSelector(selectLogin, substate => substate.get("uuid"));


export {
  makeSelectUuid,
  makeSelectLoading,
  makeSelectError
};
