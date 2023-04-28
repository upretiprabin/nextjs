import {getData, postData, putData} from "../../helpers/serverHelper";
import {
  editCaseError,
  editCaseLoading,
  editCaseSuccess,
  fetchClientError,
  fetchClientLoading,
  fetchClientSuccess,
  addCaseError,
  addCaseLoading,
  addCaseSuccess
} from "./reducer"
import cookie from 'react-cookies';
import swal from "sweetalert";


export const addNewCase = async (dispatch, title, cause, classification, clientId) => {
  dispatch(addCaseLoading());
  const errors = [];

  if (title === undefined || title.length <= 2) {
    errors.push({field: "caseName", code: "Case Name is not Valid", rejectedValue: ""});
  }
  if (cause === undefined || cause.length <= 2) {
    errors.push({field: "cause", code: "Cause is not Valid", rejectedValue: ""});
  }
  if (classification === undefined || classification.length <= 2) {
    errors.push({field: "clientEmail", code: "Classification is not Valid", rejectedValue: ""});
  }
  if (clientId === undefined || clientId.length <= 2) {
    errors.push({field: "clientUsername", code: "Client selected is not Valid", rejectedValue: ""});
  }
  if (errors.length > 0) {
    swal("Ohh!", "Something is not correct. Please fix it", "error");
    dispatch(addCaseError(errors));
  } else {
    try {
      const investigatorId = cookie.load('uuid');
      const caseUrl = '/cases/' + investigatorId + "/" + clientId + "/create";
      const caseData = await postData(caseUrl, {title, cause, classification});
      if (caseData.fieldErrors || caseData.globalErrors) {
        swal("Ohh!", "Something is not correct. Please fix it", "error");
        dispatch(addCaseError(caseData));
        return;
      }
      swal("Congratulations", "New Case has been created", "success");
      dispatch(addCaseSuccess());
    } catch (error) {
      dispatch(addCaseError(error));
    }
  }
}

export const editCase = async (dispatch, title, cause, classification, clientId, caseId) => {
  dispatch(editCaseLoading());
  try {
    const investigatorId = cookie.load('uuid');
    const caseUrl = '/cases/' + investigatorId + "/" + clientId + "/" + caseId;
    const caseData = await putData({url: caseUrl, req: {title, cause, classification}});
    swal("Hurrah", "Your Case has been successfully Updated", "success");
    dispatch(editCaseSuccess());
  } catch (error) {
    swal("Ohh!", "Something is not correct. Please try again", "error");
    dispatch(editCaseError(error));
  }
}


export const fetchClients = async (dispatch) => {
  const investigatorId = cookie.load('uuid');
  try {
    dispatch(fetchClientLoading());
    const caseUrl = '/clients/' + investigatorId + "/clientList";
    const clients = await getData(caseUrl);
    dispatch(fetchClientSuccess(clients));
    return clients;
  } catch (error) {
    dispatch(fetchClientError(error));
  }
}