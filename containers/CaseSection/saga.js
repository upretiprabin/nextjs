import { all, take, call, put, select, takeLatest, takeEvery } from "redux-saga/effects";
import { request, downloadFile } from "utils/request";
import {
  LOAD_CASE_INFO_REQUEST,
  LOAD_SECTIONS_REQUEST,
  DOWNLOAD_REPORT_REQUEST
} from "./constants";
import {
  loadCaseInfoError,
  loadCaseInfoSuccess,
  loadSectionsError,
  loadSectionsSuccess,
  downloadReportError,
  downloadReportSuccess
} from "./actions";
import { makeSelectToken, makeSelectUUID } from "../App/selectors";

const apiUrlForCaseInfo = "/api/cases/";
const apiUrlForCaseSections = "/api/sections/";

function* loadCase(action) {
  const caseId = action.caseId;
  const token = yield select(makeSelectToken());
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": token.toString()
      }
    };
    const url = apiUrlForCaseInfo + caseId;
    const activeCase = yield call(request, url, options);
    yield put(loadCaseInfoSuccess(activeCase));
  } catch (e) {
    yield put(loadCaseInfoError(e));
  }
}

function* loadSections(action) {
  const caseId = action.caseId;
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
    yield put(loadSectionsSuccess(sections));
  } catch (e) {
    yield put(loadSectionsError(e));
  }
}

function* downloadReport(action) {
  const caseId = action.caseId;
  const token = yield select(makeSelectToken());
  const investigatorId = yield select(makeSelectUUID());
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": token.toString()
      }
    };
    const url = apiUrlForCaseInfo + "report/" + investigatorId + "/" + caseId;
    yield call(downloadFile, url, options);
    yield put(downloadReportSuccess());
  } catch (e) {
    yield put(downloadReportError(e));
  }
}

function* loadCaseInfoData() {
  yield takeEvery(LOAD_CASE_INFO_REQUEST, loadCase);
}

function* loadSectionsData() {
  yield takeEvery(LOAD_SECTIONS_REQUEST, loadSections);
}

function* loadCaseReport() {
  yield takeEvery(DOWNLOAD_REPORT_REQUEST, downloadReport);
}

export default function* caseSectionData() {
  yield all([loadCaseInfoData(), loadSectionsData(), loadCaseReport()]);
}
