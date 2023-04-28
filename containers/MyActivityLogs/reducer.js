import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  error: false,
  activityLogs: [],
  activeCaseDetail: {},
  caseId: "",
  investigatorId: "",
  filterCases: [],
  startdate: null,
  enddate: null
}

const activityLogsReducer = createSlice({
  name: 'activityLogs',
  initialState,
  reducers: {
    loadingActivityLogs(state, action) {
      state.loading = true;
      state.error = false;
    },
    successActivityLogs(state, action) {
      state.loading = false;
      state.error = false;
      state.activityLogs = action.payload.activityLogs;
    },
    failedActivityLogs(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    deleteActivityLogLoading(state) {
      state.loading = true;
      state.error = false;
    },
    deleteActivityLogSuccess(state) {
      state.loading = false;
      state.error = false;
    },
    deleteActivityLogError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    setStartDate(state, action) {
      state.startdate = action.payload.startdate;
    },
    setEndDate(state, action) {
      state.enddate = action.payload.enddate;
    },
    fetchCasesFilterLoading(state) {
      state.error = false;
    },
    fetchCasesFilterSuccess(state, action) {
      state.error = false;
      state.filterCases = action.payload.filterCases;
    },
    fetchCasesFilterError(state, action) {
      state.error = action.payload;
    },
    filterByDateLoading(state) {
      state.loading = true;
      state.error = false;
    },
    filterByParamsLoading(state) {
      state.loading = true;
      state.error = false;
    }
  }
})

export default activityLogsReducer.reducer;

export const {
  loadingActivityLogs,
  successActivityLogs,
  failedActivityLogs,
  deleteActivityLogLoading,
  deleteActivityLogSuccess,
  deleteActivityLogError,
  fetchCasesFilterLoading,
  fetchCasesFilterSuccess,
  fetchCasesFilterError,
  filterByDateLoading,
  filterByParamsLoading,
  setStartDate,
  setEndDate
} = activityLogsReducer.actions;
