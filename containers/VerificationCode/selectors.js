import { createSelector } from "reselect";
import {initialState} from "./reducer";

const selectVerificationCode = state => state?.get("verificationCode", initialState);

const makeSelectLoading = () =>
    createSelector(selectVerificationCode, dashboardState => dashboardState?.get("loading"));
const makeSelectError = () =>
    createSelector(selectVerificationCode, dashboardState => dashboardState?.get("error"));

export {
    makeSelectLoading,
    makeSelectError
};