import {deleteData, getData} from "../../helpers/serverHelper";
import {CLIENTS} from "../../helpers/urls";
import {deleteClientSuccess, failedClients, loadingClients, successClients} from "./reducer"
import {getCookie} from "cookies-next";

export const getClients = async (dispatch, uuid) => {
  try {
    const uuidD = getCookie('uuid');
    dispatch(loadingClients(uuidD));
    const data = await getData(CLIENTS + '/' + uuidD + '/list');
    console.log("Clients", data);
    dispatch(successClients({clients: data}));
  } catch (error) {
    dispatch(failedClients({error: error}));
  }
}

export const deleteClient = async (dispatch, uuid, stateClients) => {
  const clientUuid = uuid;
  const investigatorId = getCookie('uuid');
  await deleteData(CLIENTS+"/"+investigatorId+"/"+clientUuid+"/delete")
  dispatch(deleteClientSuccess());
}