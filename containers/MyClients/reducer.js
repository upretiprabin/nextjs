import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  error: false,
  clients: [],
  activeCaseDetail: {},
  caseId: "",
  investigatorId: "",
}

const clientsReducer = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    loadingClients(state, action) {
      state.loading = true;
      state.error = false;
      state.investigatorId = action.payload;

    },
    successClients(state, action) {
      state.loading = false;
      state.error = false;
      state.clients = action.payload.clients;
    },
    failedClients(state, action) {
      state.error = action.payload.error;
      state.loading = false;
    },
    deleteClientLoading(state) {
      state.loading = true;
      state.error = false;
    },
    deleteClientSuccess(state) {
      state.loading = false;
      state.error = false;
    },
    deleteClientError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  }
})

export default clientsReducer.reducer;

export const {
  loadingClients,
  successClients,
  failedClients,
  deleteClientLoading,
  deleteClientSuccess,
  deleteClientError
} = clientsReducer.actions;