import {
  CREATE_NEW_SECTION_ERROR,
  CREATE_NEW_SECTION_SUCCESS,
  CREATE_NEW_SECTION_REQUEST
} from "./constants";

export function createSectionRequest(caseId) {
  return {
    type: CREATE_NEW_SECTION_REQUEST,
    caseId
  };
}

export function createSectionSuccess() {
  return {
    type: CREATE_NEW_SECTION_SUCCESS
  };
}

export function createSectionError(error) {
  return {
    type: CREATE_NEW_SECTION_ERROR,
    error
  };
}