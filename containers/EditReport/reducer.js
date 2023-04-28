// import { fromJS } from "immutable";
// import {
//   EDIT_CASE_REQUESTING,
//   EDIT_CASE_SUCCESS,
//   EDIT_CASE_ERROR,
//   EDIT_LOAD_CLIENTS_REQUEST,
//   EDIT_LOAD_CLIENTS_SUCCESS,
//   EDIT_LOAD_CASE_REQUESTING,
//   EDIT_LOAD_CASE_SUCCESS,
//   EDIT_LOAD_CASE_ERROR, EDIT_LOAD_CLIENTS_ERROR
// } from "./constants";
// import { EDIT_CLIENT_REQUEST } from "../EditClient/constants";

import { createSlice } from "@reduxjs/toolkit";

// export const initialState = fromJS({
//   loading: false,
//   error: [],
//   caseError: [],
//   clients: [],
//   clientId: "",
//   caseId: "",
//   editCase: ""
// });

// function editCaseReducer(state = initialState, action) {
//   switch (action.type) {
//     case EDIT_CLIENT_REQUEST:
//       return state
//         .set("payload", payload)
//         .set("loading", true)
//         .set("error", false);
//     case EDIT_CASE_REQUESTING:
//       return state.set("loading", true).set("error", false);
//     case EDIT_LOAD_CLIENTS_REQUEST:
//       return state
//         .set("investigatorId", action.investigatorId)
//         .set("loading", true)
//         .set("error", false);
//     case EDIT_LOAD_CASE_REQUESTING:
//       return state
//         .set("loading", true)
//         .set("error", false)
//         .set("caseId", action.caseId);
//     case EDIT_LOAD_CASE_SUCCESS:
//       return state
//         .set("loading", true)
//         .set("error", false)
//         .set("editCase", action.editCase);
//     case EDIT_LOAD_CASE_ERROR:
//       return state.set("loading", false).set("error", action.error);
//     case EDIT_LOAD_CLIENTS_ERROR:
//       return state.set("loading", false).set("error", action.error);
//     case EDIT_LOAD_CLIENTS_SUCCESS:
//       return state
//         .set("loading", false)
//         .set("error", false)
//         .set("clients", action.clients);
//     case EDIT_CASE_SUCCESS:
//       return state
//         .set("loading", false)
//         .set("error", false)
//         .set("error", true)
//         .set("editCase", action.editCase)
//         .set("caseError", []);
//     case EDIT_CASE_ERROR:
//       return state
//         .set("loading", false)
//         .set("error", true)
//         .set("caseError", action.caseError);
//     default:
//       return state;
//   }
// }

// export default editCaseReducer;


// const initialState = {
//   loading: false,
//   error: [],
//   caseError: [],
//   clients: [],
//   clientId: "",
//   caseId: "",
//   editCase: ""
// };