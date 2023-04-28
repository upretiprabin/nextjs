import {
  LOAD_CASE_INFO_ERROR,
  LOAD_CASE_INFO_REQUEST,
  LOAD_CASE_INFO_SUCCESS, LOAD_SECTIONS_ERROR,
  LOAD_SECTIONS_REQUEST, LOAD_SECTIONS_SUCCESS,
  LOAD_INVESTIGATOR_INFO_REQUEST,
  LOAD_INVESTIGATOR_INFO_SUCCESS,
  LOAD_INVESTIGATOR_INFO_ERROR
} from "./constants";

export function loadCaseInfoRequest(caseId) {
  return {
    type: LOAD_CASE_INFO_REQUEST,
    caseId
  };
}

export function loadCaseInfoSuccess(activeCase) {
  return {
    type: LOAD_CASE_INFO_SUCCESS,
    activeCase
  };
}

export function loadCaseInfoError(error) {
  return {
    type: LOAD_CASE_INFO_ERROR,
    error
  };
}

export function loadSectionsRequest(caseId) {
  return {
    type: LOAD_SECTIONS_REQUEST,
    caseId
  };
}

export function loadSectionsSuccess(sections) {
  return {
    type: LOAD_SECTIONS_SUCCESS,
    sections
  };
}

export function loadSectionsError(error) {
  return {
    type: LOAD_SECTIONS_ERROR,
    error
  };
}

export function loadInvestigatorInfoRequest() {
  return {
    type: LOAD_INVESTIGATOR_INFO_REQUEST
  };
}

export function loadInvestigatorInfoSuccess(investigator) {
  return {
    type: LOAD_INVESTIGATOR_INFO_SUCCESS,
    investigator
  };
}

export function loadInvestigatorInfoError() {
  return {
    type: LOAD_INVESTIGATOR_INFO_ERROR
  };
}