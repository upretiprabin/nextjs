import {call, fork, put, takeEvery} from "redux-saga/effects";
import {
  fetchCaseInfoError,
  fetchCaseInfoLoading,
  fetchCaseInfoSuccess,
  fetchClientInfoError,
  fetchClientInfoLoading,
  fetchClientInfoSuccess,
  fetchInvestigatorInfoError,
  fetchInvestigatorInfoFromCaseLoading,
  fetchInvestigatorInfoLoading,
  fetchInvestigatorInfoSuccess,
  fetchSectionsError,
  fetchSectionsLoading,
  fetchSectionsSuccess
} from "./reducer";
import {CASE, CLIENTS, INVESTIGATOR, INVESTIGATORS, PHOTO, SECTION} from "../../helpers/urls";
import {getData} from "../../helpers/serverHelper";
import {getCookie} from "cookies-next";

function* loadCase(action) {
  const caseId = action.payload.caseId;
  try {
    const url = CASE + "/" + caseId;
    const activeCase = yield call(getData, url);
    yield put(fetchCaseInfoSuccess({activeCase}));
  } catch (e) {
    yield put(fetchCaseInfoError(e));
  }
}

function* loadSections(action) {
  const caseId = action.payload.caseId;
  try {
    const url = SECTION + "/" + caseId;
    const sections = yield call(getData, url);
    yield put(fetchSectionsSuccess({sections}));
  } catch (e) {
    yield put(fetchSectionsError(e));
  }
}

function* loadInvestigatorInfo() {
  const investigatorId = getCookie('uuid');
  try {
    let investigator = yield call(getData, INVESTIGATORS(investigatorId));
    let mediaURL = yield call(fetchPhotoLink, investigator.agencyLogo);
    if (mediaURL !== "error") {
      investigator.agencyLogo = mediaURL.mediaUrl;
    }
    yield put(fetchInvestigatorInfoSuccess({investigator}));
  } catch (error) {
    yield put(fetchInvestigatorInfoError());
  }
}

function* loadInvestigatorInfoFromCase(action) {
  const caseId = action.payload.caseId;
  try {
    let investigator = yield call(getData, INVESTIGATOR + "/fromCase/" + caseId);
    let mediaURL = yield call(fetchPhotoLink, investigator.agencyLogo);
    if (mediaURL !== "error") {
      investigator.agencyLogo = mediaURL.mediaUrl;
    }
    yield put(fetchInvestigatorInfoSuccess({investigator}));
  } catch (error) {
    yield put(fetchInvestigatorInfoError(error));
  }
}

function* loadClientInfo(action) {
  const caseId = action.payload.caseId;
  try {
    const activeUrl = CLIENTS + "/" + "fromCase/" + caseId;
    const client = yield call(getData, activeUrl);
    yield put(fetchClientInfoSuccess({client}));
  } catch (error) {
    yield put(fetchClientInfoError(error));
  }
}

function* fetchPhotoLink(mediaId) {
  try {
    return yield call(getData, PHOTO(mediaId));
  } catch (error) {
    return "error";
  }
}

function* loadCaseInfoData() {
  yield takeEvery(fetchCaseInfoLoading.type, loadCase);
}

function* loadSectionsData() {
  yield takeEvery(fetchSectionsLoading.type, loadSections);
}

function* loadInvestigatorInfoData() {
  yield takeEvery(fetchInvestigatorInfoLoading.type, loadInvestigatorInfo);
}

function* loadInvestigatorInfoFromCaseData() {
  yield takeEvery(fetchInvestigatorInfoFromCaseLoading.type, loadInvestigatorInfoFromCase);
}

function* loadClientInfoData() {
  yield takeEvery(fetchClientInfoLoading.type, loadClientInfo);
}

export default function* casePreviewSectionSaga() {
  yield fork(loadCaseInfoData);
  yield fork(loadSectionsData);
  yield fork(loadInvestigatorInfoData);
  yield fork(loadInvestigatorInfoFromCaseData)
  yield fork(loadClientInfoData);
}
