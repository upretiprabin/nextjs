function createActivityReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TIME:
      return state.set("time", action.time);
    case CHANGE_DATE:
      return state.set("date", action.date);
    case CHANGE_ACTIVITY:
      return state.set("activity", action.activity);
    case NEW_ACTIVITY_REQUEST:
      return state
        .set("loading", true)
        .set("caseId", action.caseId)
        .set("error", false);
    case NEW_ACTIVITY_SUCCESS:
      return state.set("loading", false).set("error", false);
    case NEW_ACTIVITY_ERROR:
      return state.set("loading", false).set("error", action.error);
    case LOAD_ALL_MY_ACTIVITY_LOGS:
      return state.set("activityLogs", action.activityLogs);
    default:
      return state;
  }
}

import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  time: "",
  date: "",
  activity: "",
  activityLogs: []
}

const activeActivityLogsReducer = createSlice({
  name: 'activeActivityLogs',
  initialState,
  reducers: {
    fetchAllActivityLogsByCaseLoading(state) {
      state.loading = true;
      state.error = false;
    },
    fetchAllActivityLogsByCaseSuccess(state, action) {
      state.loading = false;
      state.error = false;
      state.activityLogs = action.payload.activityLogs;
    },
    fetchAllActivityLogsByCaseError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    newActivityLoading(state) {
      state.loading = true;
      state.error = false;
    },
    newActivitySuccess(state) {
      state.loading = false;
      state.error = false;
    },
    newActivityError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    updateActivityLoading(state) {
      state.loading = true;
      state.error = false;
    },
    updateActivitySuccess(state) {
      state.loading = false;
      state.error = false;
    },
    updateActivityError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    setActivityDate(state, action) {
      state.date = action.payload;
    },
    setActivityTime(state, action) {
      state.time = action.payload;
    },
    setActivityContent(state, action) {
      state.activity = action.payload;
    }
  }
});

export default activeActivityLogsReducer.reducer;

export const {
  fetchAllActivityLogsByCaseLoading,
  fetchAllActivityLogsByCaseSuccess,
  fetchAllActivityLogsByCaseError,
  newActivityLoading,
  newActivitySuccess,
  newActivityError,
  updateActivityLoading,
  updateActivitySuccess,
  updateActivityError,
  setActivityDate,
  setActivityTime,
  setActivityContent
} = activeActivityLogsReducer.actions;

