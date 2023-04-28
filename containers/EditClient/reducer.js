import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
  loading: "",
  error: false,
  client: null,
  payload: {},
  clientId: '',
  investigatorId: ''
};

const editClientReducer = createSlice({
  name: 'editClient',
  initialState,
  reducers: {
    loadingEditClients(state, action) {
      state.loading = true;
      state.error = false;
      state.clientError = [];
      state.payload = action.payload;

    },
    successEditClients(state, action) {
      state.loading = false;
      state.error = false;
      state.clientError = [];
      state.client = action.payload;
    },
    failedEditClients(state, action) {
      state.loading = false;
      state.error = false;
      state.clientError = action.payload;
    },
    requestLoadingClients(state, action) {
      state.loading = true;
      state.error = false;
      state.clientError = [];
      state.payload = action.payload;
      state.clientId = action.payload.clientId;
      state.investigatorId = action.payload.investigatorId;
      state.client = null
    },
    successLoadingClients(state, action) {
      state.loading = false;
      state.error = false;
      state.clientError = [];
      state.client = action.payload;
    },
    failedLoadingClients(state, action) {
      state.loading = false;
      state.error = false;
      state.clientError = action.payload;
    },
  }
})

export default editClientReducer.reducer;

export const {
  loadingEditClients,
  successEditClients,
  failedEditClients,
  requestLoadingClients,
  successLoadingClients,
  failedLoadingClients
} = editClientReducer.actions;
