import { all, take, call, put, select, takeLatest, takeEvery } from "redux-saga/effects";

import { request } from "utils/request";
import {
  newClientError,
  newClientSuccess
} from "./actions";

import {
  NEW_CLIENT_REQUEST,
  NEW_CLIENT_SUCCESS,
  NEW_CLIENT_ERROR
} from "./constants";

import {
  makeSelectClientFirstName,
  makeSelectClientLastName,
  makeSelectClientEmail,
  makeSelectClientUsername,
  makeSelectClientPassword,
  makeSelectClientPOCName,
  makeSelectClientPOCPhone,
  makeSelectClientPOCEmail
} from "./selectors";
import { makeSelectToken, makeSelectUUID } from "../App/selectors";
import swal from "sweetalert";
import {
  changeClientEmail,
  changeClientFirstName,
  changeClientLastName,
  // changeClientPassword,
  changeClientPOCContactEmail,
  changeClientPOCContactName,
  changeClientPOCContactPhone,
  changeClientUsername
} from "../EditClient/actions";

const newClientUrl = "/api/clients/";

function* createNewClient() {
  const clientFirstName = yield select(makeSelectClientFirstName());
  const clientLastName = yield select(makeSelectClientLastName());
  const clientEmail = yield select(makeSelectClientEmail());
  const clientUsername = yield select(makeSelectClientUsername());
  // const clientPassword = yield select(makeSelectClientPassword());
  const clientPOCName = yield select(makeSelectClientPOCName());
  const clientPOCEmail = yield select(makeSelectClientPOCEmail());
  const clientPOCPhone = yield select(makeSelectClientPOCPhone());

  const errors = [];

  if (clientFirstName === undefined || clientFirstName.length <= 2) {
    errors.push({ field: "clientFirstName", code: "Client First is not Valid", rejectedValue: "" });
  }
  if (clientLastName === undefined || clientLastName.length <= 2) {
    errors.push({ field: "clientLastName", code: "Client Last is not Valid", rejectedValue: "" });
  }
  if (clientEmail === undefined || clientEmail.length <= 2) {
    errors.push({ field: "clientEmail", code: "Client Email is not Valid", rejectedValue: "" });
  }
  if (clientUsername === undefined || clientUsername.length <= 2) {
    errors.push({ field: "clientUsername", code: "Client Username is not Valid", rejectedValue: "" });
  }
  // if (clientPassword === undefined || clientPassword.length <= 2) {
  //   errors.push({ field: "clientPassword", code: "Client Password is not Valid", rejectedValue: "" });
  // }
  if (clientPOCName === undefined || clientPOCName.length <= 2) {
    errors.push({ field: "clientPOCName", code: "Client Point of Contact Name is not Valid", rejectedValue: "" });
  }
  if (clientPOCEmail === undefined || clientPOCEmail.length <= 2) {
    errors.push({ field: "clientPOCEmail", code: "Client Point of Contact Email is not Valid", rejectedValue: "" });
  }
  if (clientPOCPhone === undefined || clientPOCPhone.length <= 2) {
    errors.push({ field: "clientPOCPhone", code: "Client Point of Contact Phone is not Valid", rejectedValue: "" });
  }

  if (errors.length > 0) {
    swal("Ohh!", "Something is not correct. Please fix it", "error");
    yield put(newClientError(errors));
  } else {
    const payload = {
      firstName: clientFirstName,
      lastName: clientLastName,
      email: clientEmail,
      username: clientUsername,
      // password: clientPassword,
      nameOfPOC: clientPOCName,
      emailOfPOC: clientPOCEmail,
      phoneOfPOC: clientPOCPhone
    };
    const investigatorId = yield select(makeSelectUUID());
    const token = yield select(makeSelectToken());
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authorization": token.toString()
        },
        body: JSON.stringify(payload)
      };

      const activeUrl = newClientUrl + investigatorId + "/create";

      const newClient = yield call(request, activeUrl, options);
      if (newClient.fieldErrors || newClient.globalErrors) {
        swal("Ohh!", "Something is not correct. Please fix it", "error");
        yield put(newClientError(newClient));
        return;
      }
      swal("Congratulations", "New Client has been added", "success");
      yield put(newClientSuccess("Client Registered"));
      yield put(changeClientFirstName(""));
      yield put(changeClientLastName(""));
      yield put(changeClientUsername(""));
      yield put(changeClientEmail(""));
      // yield put(changeClientPassword(""));
      yield put(changeClientPOCContactName(""));
      yield put(changeClientPOCContactPhone(""));
      yield put(changeClientPOCContactEmail(""));
    } catch (error) {
      yield put(newClientError(error));
    }
  }
}

function* newClientRequest() {
  yield takeLatest(NEW_CLIENT_REQUEST, createNewClient);
}

export default function* githubData() {
  yield all([newClientRequest()]);
}
