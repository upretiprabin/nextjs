import {failedEditClients, requestLoadingClients, successEditClients, successLoadingClients} from "./reducer";
import {getData, putData} from "../../helpers/serverHelper";
import {CLIENTS} from "../../helpers/urls";
import swal from "sweetalert";
import {getCookie} from "cookies-next";

export const editClientDetails = async (dispatch, req, id) => {
  try {
    const {
      companyName: clientCompanyName,
      nameOfPOC: clientPOCName,
      emailOfPOC: clientPOCEmail,
      phoneOfPOC: clientPOCPhone
    } = req;

    const errors = [];

    if (!clientCompanyName || clientCompanyName.length <= 2) {
      errors.push({field: "clientCompanyName", code: "Client Company Name is not Valid", rejectedValue: ""});
    }
    if (!clientPOCName || clientPOCName.length <= 2) {
      errors.push({field: "clientPOCName", code: "Client Point of Contact Name is not Valid", rejectedValue: ""});
    }
    if (clientPOCEmail && clientPOCEmail.length > 0 && clientPOCEmail.length <= 2) {
      errors.push({field: "clientPOCEmail", code: "Client Point of Contact Email is not Valid", rejectedValue: ""});
    }
    if (!clientPOCPhone || clientPOCPhone.length <= 2) {
      errors.push({field: "clientPOCPhone", code: "Client Point of Contact Phone is not Valid", rejectedValue: ""});
    }
    if (errors.length > 0) {
      dispatch(failedEditClients(errors));
    } else {
      const payload = {
        companyName: clientCompanyName,
        nameOfPOC: clientPOCName,
        emailOfPOC: clientPOCEmail,
        phoneOfPOC: clientPOCPhone
      };
      const dt = await putData({url: CLIENTS + '/' + id + '/', req: payload});
      if (dt.fieldErrors || dt.globalErrors) {
        dispatch(failedEditClients(dt));
        // return;
      } else {
        dispatch(successEditClients(dt));
        swal("Hurrah", "Client has been successfully Updated", "success");
      }
    }
  } catch (error) {
    dispatch(failedEditClients(error));
  }
}

export const loadClientDetails = async (dispatch, id) => {
  try {
    const investigatorId = getCookie('uuid');
    dispatch(requestLoadingClients({clientId: id, investigatorId}));
    const dt = await getData(CLIENTS + '/' + id);
    console.log("CLIENT", dt);
    dispatch(successLoadingClients(dt));
  } catch (error) {
    dispatch(failedEditClients(error));
  }
}
