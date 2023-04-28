// import { fromJS } from "immutable";

import { createSlice } from "@reduxjs/toolkit"

// import {
//   LOAD_CASE_INFO_ERROR,
//   LOAD_CASE_INFO_REQUEST,
//   LOAD_CASE_INFO_SUCCESS, LOAD_SECTIONS_ERROR,
//   LOAD_SECTIONS_REQUEST, LOAD_SECTIONS_SUCCESS,
//   DOWNLOAD_REPORT_ERROR, DOWNLOAD_REPORT_REQUEST, DOWNLOAD_REPORT_SUCCESS
// } from "./constants";

// export const initialState = fromJS({
//   activeCase: {},
//   caseId: "",
//   sections: [],
//   sectionTitle: "",
//   loading: false,
//   error: false,
//   section: null
// });

// function caseSectionReducer(state = initialState, action) {
//   switch (action.type) {
//     case LOAD_CASE_INFO_ERROR:
//       return state
//         .set("error", action.error)
//         .set("loading", false);
//     case LOAD_CASE_INFO_REQUEST:
//       return state
//         .set("caseId", action.caseId)
//         .set("error", false)
//         .set("loading", true);
//     case LOAD_CASE_INFO_SUCCESS:
//       return state
//         .set("activeCase", action.activeCase)
//         .set("error", false)
//         .set("loading", false);
//     case LOAD_SECTIONS_ERROR:
//       return state
//         .set("error", action.error)
//         .set("loading", false);
//     case LOAD_SECTIONS_REQUEST:
//       return state
//         .set("caseId", action.caseId)
//         .set("error", false)
//         .set("loading", true);
//     case LOAD_SECTIONS_SUCCESS:
//       return state
//         .set("sections", action.sections)
//         .set("error", false)
//         .set("loading", false);
//     case DOWNLOAD_REPORT_REQUEST:
//       return state
//         .set("loading", true)
//         .set("error", false)
//         .set("caseId", action.caseId);
//     case DOWNLOAD_REPORT_SUCCESS:
//       return state
//         .set("loading", false)
//         .set("error", false);
//     case DOWNLOAD_REPORT_ERROR:
//       return state
//         .set("loading", false)
//         .set("error", action.error);
//     default:
//       return state;
//   }
// }

// export default caseSectionReducer;


const initialState = {
  activeCase: {},
  caseId: "",
  sections: [],
  sectionTitle: "",
  loading: false,
  error: false,
  section: null,
  selectedSection: {},
  client: {},
  investigator: {},
}

const caseSectionReducer = createSlice({
  name: 'section',
  initialState,
  reducers: {
    caseinfoLoading(state, action) {
      state.loading = true;
      state.error = false;
      state.caseId = action.payload;
    },
    caseinfoSuccess(state, action) {
      state.loading = false;
      state.error = false;
      state.activeCase = action.payload;
    },
    caseinfoError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    clientLoading(state, action) {
      state.loading = true;
      state.error = false;
      state.caseId = action.payload;
    },
    clientSuccess(state, action) {
      state.loading = false;
      state.error = false;
      state.client = action.payload;
    },
    clientError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    investigatorLoading(state, action) {
      state.loading = true;
      state.error = false;
      state.caseId = action.payload;
    },
    investigatorSuccess(state, action) {
      state.loading = false;
      state.error = false;
      state.investigator = action.payload;
    },
    investigatorError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    sectionLoading(state, action) {
      state.loading = true;
      state.error = false;
      state.caseId = action.payload;
    },
    sectionSuccess(state, action) {
      state.loading = false;
      state.error = false;
      state.sections = action.payload;
    },
    sectionError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    downloadReportLoading(state, action) {
      state.loading = true;
      state.error = false;
      state.caseId = action.payload;
    },
    downloadReportSuccess(state, action) {
      state.loading = false;
      state.error = false;
    },
    downloadReportError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    createSectionLoading(state, action) {
      state.loading = true;
      state.error = false;
      state.caseId = action.payload;
    },
    createSectionSuccess(state, action) {
      state.loading = false;
      state.error = false;
    },
    createSectionError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    editSectionLoading(state, action) {
      state.loading = true;
      state.error = false;
      state.caseId = action.payload;
    },
    editSectionSuccess(state, action) {
      state.loading = false;
      state.error = false;
    },
    editSectionError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteSectionLoading(state, action) {
      state.loading = true;
      state.error = false;
      state.caseId = action.payload;
    },
    deleteSectionSuccess(state, action) {
      state.loading = false;
      state.error = false;
    },
    deleteSectionError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    setSelectedSection(state, action) {
      state.selectedSection = action.payload;
    }
  }
});

export default caseSectionReducer.reducer;

export const { caseinfoError, caseinfoLoading, caseinfoSuccess, sectionError, sectionLoading, sectionSuccess, downloadReportError, downloadReportLoading, downloadReportSuccess, createSectionError, createSectionLoading, createSectionSuccess, deleteSectionError, deleteSectionLoading, deleteSectionSuccess, setSelectedSection, clientError, clientLoading, clientSuccess, editSectionError, editSectionLoading, editSectionSuccess,investigatorError,investigatorLoading,investigatorSuccess } = caseSectionReducer.actions;