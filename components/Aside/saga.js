import { all, take, call, put, select, takeLatest } from "redux-saga/effects";
import { request } from "../../utils/request";
import {
  CREATE_NEW_SECTION_ERROR,
  CREATE_NEW_SECTION_SUCCESS,
  CREATE_NEW_SECTION_REQUEST
} from "./constants";
import { makeSelectToken, makeSelectUUID } from "../../containers/App/selectors";
import { createSectionSuccess, createSectionError } from "./actions";
import history from "../../utils/history";

const baseUrl = "/api/sections/";

function* newRequest(action) {
  const caseId = action.caseId;
  const token = yield select(makeSelectToken());
  const name = "Section Title";
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": token.toString()
      },
      body: JSON.stringify({ name })
    };
    let url = baseUrl + caseId + "/create";
    const newSection = yield call(request, url, options);
    yield put(createSectionSuccess());
    history.push("/casesection/" + caseId + "/sections/" + newSection.uuid);
  } catch (e) {
    yield put(createSectionError(e));
  }
}

function* newSectionCreateRequest() {
  yield takeLatest(CREATE_NEW_SECTION_REQUEST, newRequest);
}

export default function* asideData() {
  yield all([newSectionCreateRequest()]);
}