import { all, take, call, put, select, takeLatest } from "redux-saga/effects";
import { request } from "../../utils/request";
import { LOAD_ALL_CASES_REQUEST, LOAD_SECTIONS_REQUEST } from "./constants";
import { makeSelectToken } from "../App/selectors";
import { loadAllClientSuccess, loadSectionsError, loadSectionsSuccess, openSectionPage } from "./actions";
import history from "../../utils/history";

const allReportsUrl = "/api/cases/";
const apiUrlForCaseSections = "/api/sections/";

function* loadCases(action) {
  const investigatorId = action.investigatorId;
  const token = yield select(makeSelectToken());

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "authorization": token.toString()
    }
  };
  let cases = [];
  cases = yield call(request, allReportsUrl + investigatorId + "/list", options);
  yield put(loadAllClientSuccess(cases));
}

function* loadSections(action) {
  const caseId = action.selectedCase.uuid;
  const token = yield select(makeSelectToken());
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": token.toString()
      }
    };
    const url = apiUrlForCaseSections + caseId + "/filter";
    const sections = yield call(request, url, options);
    yield put(loadSectionsSuccess({sections: sections, case: action.selectedCase}));
    yield call(redirectToSectionPage, caseId, sections);
  } catch (e) {
    yield put(loadSectionsError(e));
  }
}

export function* loadCasesData() {
  yield takeLatest(LOAD_ALL_CASES_REQUEST, loadCases);
}

export function* loadSectionsData() {
  yield takeLatest(LOAD_SECTIONS_REQUEST, loadSections);
}

export default function* defaultSaga() {
  yield all([loadCasesData(), loadSectionsData()]);
}

export function redirectToSectionPage(caseId, sections) {
  if(sections && sections.length > 0) {
    history.push("/casesection/"+caseId+"/sections/"+sections[0].uuid);
  } else {
    history.push("/casesection/"+caseId);
  }
}
