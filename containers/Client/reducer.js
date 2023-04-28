import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  reports: [],
  currentReports: [],
  pageLimit: 3,
  currentPage: 1,
  totalPages: null
}

const clientCaseReducer = createSlice({
  name: 'clientCase',
  initialState,
  reducers: {
    clientCasesLoading(state) {
      state.loading = true;
      state.error = false;
    },
    clientCasesSuccess(state, action) {
      state.loading = false;
      state.error = false;
      state.reports = action.payload.reports;
    },
    clientCasesError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    downloadClientReportLoading(state) {
      state.loading = true;
      state.error = false;
    },
    downloadClientReportSuccess(state) {
      state.loading = false;
      state.error = false;
    },
    downloadClientReportError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    setPageState(state, action) {
      state.currentPage = action.payload.currentPage;
      state.currentReports = action.payload.currentReports;
      state.totalPages = action.payload.totalPages;
    }
  }
});

export default clientCaseReducer.reducer;

export const {
  clientCasesLoading,
  clientCasesSuccess,
  clientCasesError,
  downloadClientReportLoading,
  downloadClientReportSuccess,
  downloadClientReportError,
  setPageState
} = clientCaseReducer.actions;
