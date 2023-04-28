import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  activeCase: null,
  caseId: "",
  sections: [],
  sectionTitle: "",
  section: null,
  investigator: null,
  client: null
}

const previewReducer = createSlice({
  name: 'previewPage',
  initialState,
  reducers: {
    fetchCaseInfoLoading(state) {
      state.loading = true;
      state.error = false;
    },
    fetchCaseInfoSuccess(state, action) {
      state.loading = false;
      state.error = false;
      state.activeCase = action.payload.activeCase;
    },
    fetchCaseInfoError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchSectionsLoading(state) {
      state.loading = true;
      state.error = false;
    },
    fetchSectionsSuccess(state, action) {
      state.loading = false;
      state.error = false;
      state.sections = action.payload.sections;
    },
    fetchSectionsError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchInvestigatorInfoLoading(state) {
      state.loading = true;
      state.error = false;
    },
    fetchInvestigatorInfoFromCaseLoading(state) {
      state.loading = true;
      state.error = false;
    },
    fetchInvestigatorInfoSuccess(state, action) {
      state.loading = false;
      state.error = false;
      state.investigator = action.payload.investigator;
    },
    fetchInvestigatorInfoError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchClientInfoLoading(state) {
      state.loading = true;
      state.error = false;
    },
    fetchClientInfoSuccess(state, action) {
      state.loading = false;
      state.error = false;
      state.client = action.payload.client;
    },
    fetchClientInfoError(state, action) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export default previewReducer.reducer;
export const {
  fetchCaseInfoLoading,
  fetchCaseInfoSuccess,
  fetchCaseInfoError,
  fetchSectionsLoading,
  fetchSectionsSuccess,
  fetchSectionsError,
  fetchInvestigatorInfoLoading,
  fetchInvestigatorInfoFromCaseLoading,
  fetchInvestigatorInfoSuccess,
  fetchInvestigatorInfoError,
  fetchClientInfoLoading,
  fetchClientInfoSuccess,
  fetchClientInfoError
} = previewReducer.actions;