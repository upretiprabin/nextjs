import {
  LOAD_CASE_INFO_ERROR,
  LOAD_CASE_INFO_REQUEST,
  LOAD_CASE_INFO_SUCCESS,
  LOAD_SECTIONS_ERROR,
  LOAD_SECTIONS_REQUEST,
  LOAD_SECTIONS_SUCCESS,
  LOAD_SELECTED_SECTION,
  EDIT_SECTION_REQUEST,
  EDIT_SECTION_SUCCESS,
  EDIT_SECTION_ERROR,
  DOWNLOAD_REPORT_ERROR,
  DOWNLOAD_REPORT_REQUEST,
  DOWNLOAD_REPORT_SUCCESS,
  DELETE_SECTION_REQUEST,
  DELETE_SECTION_SUCCESS, DELETE_SECTION_ERROR, RESET_EDIT_STATE
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

export function loadSectionsRequest(caseId, sectionId) {
  return {
    type: LOAD_SECTIONS_REQUEST,
    caseId,
    sectionId
  };
}

export function loadSectionsSuccess(sections) {
  return {
    type: LOAD_SECTIONS_SUCCESS,
    sections
  };
}

export function loadSelectedSection(activeSection) {
  return {
    type: LOAD_SELECTED_SECTION,
    activeSection
  };
}

export function loadSectionsError(error) {
  return {
    type: LOAD_SECTIONS_ERROR,
    error
  };
}

export function loadSectionEditRequest(payload) {
  return {
    type: EDIT_SECTION_REQUEST,
    payload
  };
}

export function loadSectionEditSuccess() {
  return {
    type: EDIT_SECTION_SUCCESS
  };
}

export function loadSectionEditError(error) {
  return {
    type: EDIT_SECTION_ERROR,
    error
  };
}

export function downloadReportRequest(caseId) {
  return {
    type: DOWNLOAD_REPORT_REQUEST,
    caseId
  };
}

export function downloadReportError() {
  return {
    type: DOWNLOAD_REPORT_ERROR
  };
}

export function downloadReportSuccess() {
  return {
    type: DOWNLOAD_REPORT_SUCCESS
  };
}

export function deleteSectionRequest(caseId) {
  return {
    type: DELETE_SECTION_REQUEST,
    caseId
  };
}

export function deleteSectionSuccess() {
  return {
    type: DELETE_SECTION_SUCCESS
  };
}

export function deleteSectionError(error) {
  return {
    type: DELETE_SECTION_ERROR,
    error
  };
}
export function resetState() {
  return {
    type: RESET_EDIT_STATE
  };
}