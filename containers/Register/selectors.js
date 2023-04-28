import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectRegister = state => state.get("register", initialState);

const makeSelectLoading = () =>
  createSelector(selectRegister, globalState => globalState.get("loading"));
const makeSelectError = () =>
  createSelector(selectRegister, substate => substate.get("error"));
const makeSelectorStepOneError = () =>
  createSelector(selectRegister, substate => substate.get("stepOneError"));
const makeSelectorStepTwoError = () =>
  createSelector(selectRegister, substate => substate.get("stepTwoError"));
const makeSelectorStepThreeError = () =>
  createSelector(selectRegister, substate => substate.get("stepThreeError"));
const makeSelectorRegisterError = () =>
  createSelector(selectRegister, substate => substate.get("registerError"));
const makeSelectCurrentStep = () =>
  createSelector(selectRegister, substate => substate.get("currentStep"));
const makeSelectFirstName = () =>
  createSelector(selectRegister, substate => substate.get("firstName"));
const makeSelectLastName = () =>
  createSelector(selectRegister, substate => substate.get("lastName"));
const makeSelectEmail = () =>
  createSelector(selectRegister, substate => substate.get("email"));
const makeSelectUsername = () =>
  createSelector(selectRegister, substate => substate.get("username"));
const makeSelectPassword = () =>
  createSelector(selectRegister, substate => substate.get("password"));
const makeSelectConfirmPassword = () =>
  createSelector(selectRegister, substate => substate.get("confirmPassword"));
const makeSelectLicenseId = () =>
  createSelector(selectRegister, substate => substate.get("licenseId"));
const makeSelectUBI = () =>
  createSelector(selectRegister, substate => substate.get("ubi"));
const makeSelectPhoto = () =>
  createSelector(selectRegister, substate => substate.get("photo"));
const makeSelectPhone = () =>
  createSelector(selectRegister, substate => substate.get("phone"));
const makeSelectAgencyName = () =>
  createSelector(selectRegister, substate => substate.get("agencyName"));
const makeSelectAgencyAddress = () =>
  createSelector(selectRegister, substate => substate.get("agencyAddress"));
const makeSelectAgencyCity = () =>
  createSelector(selectRegister, substate => substate.get("agencyCity"));
const makeSelectAgencyState = () =>
  createSelector(selectRegister, substate => substate.get("agencyState"));
const makeSelectAgencyZipCode = () =>
  createSelector(selectRegister, substate => substate.get("agencyZipCode"));
const makeSelectAgencyFax = () =>
  createSelector(selectRegister, substate => substate.get("agencyFax"));
const makeSelectAgencyLogo = () =>
  createSelector(selectRegister, substate => substate.get("agencyLogo"));
const makeSelectIsMemeberOfAssociation = () =>
  createSelector(selectRegister, substate => substate.get("isMemberOfAssociation"));
const makeSelectDescription = () =>
  createSelector(selectRegister, substate => substate.get("description"));
const makeSelectFile = () =>
  createSelector(selectRegister, substate => substate.get("file"));

export {
  makeSelectLicenseId,
  makeSelectUBI,
  makeSelectPhoto,
  makeSelectPhone,
  makeSelectAgencyName,
  makeSelectAgencyAddress,
  makeSelectAgencyCity,
  makeSelectAgencyState,
  makeSelectAgencyZipCode,
  makeSelectAgencyFax,
  makeSelectAgencyLogo,
  makeSelectIsMemeberOfAssociation,
  makeSelectDescription,
  makeSelectLoading,
  makeSelectError,
  makeSelectCurrentStep,
  makeSelectFirstName,
  makeSelectLastName,
  makeSelectEmail,
  makeSelectUsername,
  makeSelectPassword,
  makeSelectConfirmPassword,
  makeSelectFile,
  makeSelectorStepOneError,
  makeSelectorStepTwoError,
  makeSelectorStepThreeError,
  makeSelectorRegisterError
};