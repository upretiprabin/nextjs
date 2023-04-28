import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  caseError: false,
  investigatorId: '',
  caseName: "",
  cause: "",
  classification: null,
  clientId: null,
  clients: [],
  classificationOptions: [],
};

const addCaseReducer = createSlice({
  name: 'addNewCase',
  initialState,
  reducers: {
    addCaseLoading(state) {
      state.loading = true;
      state.error = false;
      state.caseError = false;
    },
    addCaseSuccess(state) {
      state.loading = false;
      state.error = false;
      state.caseError = false;
    },
    addCaseError(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.caseError = action.payload;
    },
    setCaseName(state, action) {
      state.caseName = action.payload;
    },
    setCause(state, action) {
      state.cause = action.payload;
    },
    setClassification(state, action) {
      state.classification = action.payload;
    },
    setClientId(state, action) {
      state.clientId = action.payload;
    },
    editCaseLoading(state) {
      state.loading = true;
      state.error = false;
      state.caseError = false;
    },
    editCaseSuccess(state) {
      state.loading = false;
      state.error = false;
      state.caseError = false;
    },
    editCaseError(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.caseError = action.payload;
    },
    fetchClientLoading(state) {
      state.loading = true;
      state.error = false;
      state.caseError = false;
      state.caseName = '';
      state.cause = '';
      state.classification = null;
      state.clientId = null;
    },
    fetchClientSuccess(state, action) {
      state.loading = false;
      state.error = false;
      state.caseError = false;
      state.clients = action.payload.clientList;
      state.classificationOptions = action.payload.classificationOptions
    },
    fetchClientError(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.caseError = action.payload;
    },
    fetchCaseDetailsLoading(state) {
      state.loading = true;
      state.error = false;
      state.caseError = false;
    },
    fetchCaseDetailsSuccess(state, action) {
      state.loading = false;
      state.error = false;
      state.caseError = false;
      state.caseName = action.payload.caseName;
      state.cause = action.payload.cause;
      state.classification = action.payload.classification;
      state.clientId = action.payload.clientId;
    },
    fetchCaseDetailsError(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.caseError = action.payload;
    },
  }
});

export default addCaseReducer.reducer;

export const {
  fetchClientLoading,
  fetchClientSuccess,
  fetchClientError,
  addCaseLoading,
  addCaseSuccess,
  addCaseError,
  editCaseLoading,
  editCaseSuccess,
  editCaseError,
  fetchCaseDetailsLoading,
  fetchCaseDetailsSuccess,
  fetchCaseDetailsError,
  setCaseName,
  setCause,
  setClassification,
  setClientId
} = addCaseReducer.actions;