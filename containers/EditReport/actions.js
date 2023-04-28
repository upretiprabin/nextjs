// import {
//   EDIT_CASE_REQUESTING,
//   EDIT_CASE_SUCCESS,
//   EDIT_CASE_ERROR,
//   EDIT_LOAD_CLIENTS_REQUEST,
//   EDIT_LOAD_CLIENTS_SUCCESS,
//   EDIT_LOAD_CLIENTS_ERROR,
//   EDIT_LOAD_CASE_SUCCESS,
//   EDIT_LOAD_CASE_REQUESTING, EDIT_LOAD_CASE_ERROR
// } from "./constants";
//
// export function editCaseRequest(payload) {
//   return {
//     type: EDIT_CASE_REQUESTING,
//     payload
//   };
// }
//
// export function loadClientsOfInvestigatorRequest(investigatorId) {
//   return {
//     type: EDIT_LOAD_CLIENTS_REQUEST,
//     investigatorId
//   };
// }
//
// export function loadClientsOfInvestigatorSuccess(clients) {
//   return {
//     type: EDIT_LOAD_CLIENTS_SUCCESS,
//     clients
//   };
// }
//
// export function loadClientsOfInvestigatorError(error) {
//   return {
//     type: EDIT_LOAD_CLIENTS_ERROR,
//     error
//   };
// }
//
// export function loadCaseRequestEdit(caseId) {
//   return {
//     type: EDIT_LOAD_CASE_REQUESTING,
//     caseId
//   };
// }
//
// export function loadCaseSuccessEdit(editCase) {
//   console.log("editCase", editCase);
//   return {
//     type: EDIT_LOAD_CASE_SUCCESS,
//     editCase
//   };
// }
//
// export function loadCaseErrorEdit() {
//   return {
//     type: EDIT_LOAD_CASE_ERROR
//   };
// }
//
// export function editCaseSuccess(editCase) {
//   return {
//     type: EDIT_CASE_SUCCESS,
//     editCase
//   };
// }
//
// export function editCaseError(caseError) {
//   return {
//     type: EDIT_CASE_ERROR,
//     caseError
//   };
// }
