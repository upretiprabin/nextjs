import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  error: false,
  cases: [],
  activeCaseDetail: {},
  caseId: "",
  investigatorId: "",
}

const dashboardReducer = createSlice({
  name: 'cases',
  initialState,
  reducers: {
    loadingCases(state, action) {
      state.loading = true;
      state.error = false;
      state.investigatorId = action.payload;
    },
    successCases(state, action) {
      state.loading = false;
      state.error = false;
      state.cases = action.payload.cases;
    },
    failedCases(state, action) {
      state.error = action.payload.error;
      state.loading = false;
    },
    loadingSections(state) {
      state.loading = true;
      state.error = false;
    },
    successSections(state) {
      state.loading = false;
      state.error = false;
    },
    failedSections(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    }
  }
})

export default dashboardReducer.reducer;

export const {
  loadingCases,
  successCases,
  failedCases,
  loadingSections,
  successSections,
  failedSections
} = dashboardReducer.actions;