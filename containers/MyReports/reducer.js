// import { fromJS } from "immutable";
// import {
//   CASE_LIST_REQUEST,
//   CLIENT_DOWNLOAD_REPORT_ERROR, CLIENT_DOWNLOAD_REPORT_REQUEST,
//   CLIENT_DOWNLOAD_REPORT_SUCCESS,
//   DELETE_REPORT_REQUEST, GIVE_CLIENT_ACCESS,
//   GIVE_CLIENT_ACCESS_SUCCESS, GIVE_CLIENT_ACCESS_ERROR,
//   LOAD_ALL_REPORT, START_DATE, END_DATE, LOAD_ALL_FILTER, FILTER_BY_PARAM_REQUEST, LOAD_ALL_REPORT_REQUEST
// } from "./constants";

import {createSlice} from "@reduxjs/toolkit";

// export const initialState = fromJS({
//   reports: [],
//   caseId: "",
//   filters: [],
//   filterParam: "",
//   loading: false
// });

// function allReportReducer(state = initialState, action) {
//   switch (action.type) {
//   case LOAD_ALL_REPORT:
//     return state
//       .set("reports", action.reports)
//       .set("loading", false)
//       .set("error", false);
//   case LOAD_ALL_FILTER:
//     return state.set("filters", action.filters);
//   case CASE_LIST_REQUEST:
//     return state.set("reports", action.reports);
//   case DELETE_REPORT_REQUEST:
//     return state.set("caseId", action.caseId);
//   case START_DATE:
//     return state.set("startdate", action.startdate);
//   case END_DATE:
//     return state.set("enddate", action.enddate);
//   case FILTER_BY_PARAM_REQUEST:
//     return state.set("classificationFilter", action.classificationFilter).set("statusFilter", action.statusFilter);
//   case CLIENT_DOWNLOAD_REPORT_REQUEST:
//     return state
//       .set("loading", true)
//       .set("error", false)
//       .set("caseId", action.caseId);
//   case GIVE_CLIENT_ACCESS:
//     return state
//       .set("loading", true)
//       .set("error", false)
//       .set("caseId", action.caseId);
//   case GIVE_CLIENT_ACCESS_SUCCESS:
//       return state
//           .set("loading", false)
//           .set("error", false)
//   case GIVE_CLIENT_ACCESS_ERROR:
//       return state
//           .set("loading", false)
//           .set("error", action.error)
//   case CLIENT_DOWNLOAD_REPORT_SUCCESS:
//     return state
//       .set("loading", false)
//       .set("error", false);
//   case CLIENT_DOWNLOAD_REPORT_ERROR:
//     return state
//       .set("loading", false)
//       .set("error", action.error);
//   case LOAD_ALL_REPORT_REQUEST:
//     return state
//       .set("loading", true)
//       .set("error", false);
//   case LOAD_ALL_REPORT_REQUEST:
//     return state
//       .set("loading", true)
//       .set("error", false);
//   default:
//     return state;
//   }
// }

// export default allReportReducer;
const initialState = {
  loading: false,
  error: false,
  reports: [],
  caseId: "",
  filters: [],
  filterParam: "",
  startDate: null,
  endDate: null
}

const caseReducer = createSlice({
  name: 'case',
  initialState,
  reducers: {
    loadAllReports(state, action) {
      state.loading = false;
      state.error = false;
      state.reports = action.payload;
    },
    loadAllFilters(state, action) {
      state.filters = action.payload;
    },
    caseListRequest(state, action) {
      state.reports = action.payload;
    },
    deleteCaseRequest(state, action) {
      state.caseId = action.payload;
    },
    completeCaseRequest(state, action) {
      state.caseId = action.payload;
    },
    setStartDate(state, action) {
      state.startDate = action.payload;
    },
    setEndDate(state, action) {
      state.endDate = action.payload;
    },
    filterByParams(state, action) {
      state.classificationFilter = action.payload.classificationFilter;
      state.statusFilter = action.payload.statusFilter;
    },
    clientDownloadReportRequest(state, action) {
      state.loading = true;
      state.error = false;
      state.caseId = action.payload;
    },
    clientDownloadReportSuccess(state, action) {
      state.loading = false;
      state.error = false;
    },
    clientDownloadReportError(state, action) {
      state.loading = false;
      state.error = true;
    },
    clientReportAccessRequest(state, action) {
      state.loading = true;
      state.error = false;
      state.caseId = action.payload;
    },
    clientReportAccessSuccess(state, action) {
      state.loading = false;
      state.error = false;
    },
    clientReportAccessError(state, action) {
      state.loading = false;
      state.error = true;
    },
    loadAllReportsRequest(state, action) {
      state.loading = true;
      state.error = false;
    },
  }
})

export default caseReducer.reducer;

export const {
  caseListRequest,
  clientDownloadReportError,
  clientDownloadReportRequest,
  clientDownloadReportSuccess,
  clientReportAccessError,
  clientReportAccessRequest,
  clientReportAccessSuccess,
  deleteCaseRequest,
  filterByParams,
  loadAllFilters,
  loadAllReports,
  loadAllReportsRequest,
  setStartDate,
  setEndDate,
} = caseReducer.actions;