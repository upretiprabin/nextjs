import {all, call, put, select, takeEvery} from "redux-saga/effects";
import {deleteClientSuccess, fetchAllClients} from "./actions";
import {request} from "utils/request";
import {removeElement} from "utils/utils";
import {DELETE_CLIENT_REQUEST, LOAD_ALL_CLIENT_REQUEST} from "./constants";
import {makeSelectToken, makeSelectUUID} from "../App/selectors";
import {makeSelectAllClients} from "./selectors";

const allClientsUrl = "/api/clients/";

function* loadClients() {
  const investigatorId = yield select(makeSelectUUID());
  const token = yield select(makeSelectToken());

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "authorization": token.toString()
    }
  };
  let clients = [];
  clients = yield call(request, allClientsUrl + investigatorId + "/list", options);
  yield put(fetchAllClients(clients));
}

function* deleteClient(action) {
  const clientUuid = action.clientUuid;
  const investigatorId = yield select(makeSelectUUID());
  const token = yield select(makeSelectToken());

  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "authorization": token.toString()
    }
  };

  yield call(request, allClientsUrl + investigatorId + "/" + clientUuid + "/delete", options);
  let clients = yield select(makeSelectAllClients());
  removeElement(clients, "uuid", clientUuid);
  const newClients = JSON.parse(JSON.stringify(clients));
  yield put(fetchAllClients(newClients));
  yield put(deleteClientSuccess());
}

function* deleteClientData() {
  yield takeEvery(DELETE_CLIENT_REQUEST, deleteClient);
}

function* loadClientData() {
  yield takeEvery(LOAD_ALL_CLIENT_REQUEST, loadClients);
}

export default function* myClientsData() {
  yield all([loadClientData(), deleteClientData()]);
}