import {all, call, put, select, takeEvery, takeLatest} from "redux-saga/effects";
import {changeInvestigatorInfo, changePhotoLink, investigatorInfoError} from "./actions";
import {makeSelectToken, makeSelectUUID} from "../../containers/App/selectors";
import {request} from "../../utils/request";
import {LOAD_INVESTIGATOR_INFO_REQUEST, LOGOUT_REQUEST, LOGOUT_SUCCESS} from "./constants";
import {unsetClient} from "../../containers/App/actions";
import history from "../../utils/history";
import {CLIENT_UNSET} from "../../containers/App/constants";
import {deleteCookie, getCookie} from "cookies-next";

const photoUrl = "/api/generateLink/";
const investigatorDetailUrl = "/api/investigators/";

function* loadInvestigatorInfo() {
  const investigatorId = yield select(makeSelectUUID());
  const token = yield select(makeSelectToken());
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": token.toString()
      }
    };

    const investigator = yield call(request, investigatorDetailUrl + investigatorId, options);
    yield put(changeInvestigatorInfo(investigator));
    const role = getCookie("role");
    if (role === "ROLE_DETECTIVE" && investigator.photo != null)
      yield call(fetchPhotoLink, investigator.photo);
  } catch (error) {
    yield put(investigatorInfoError(""));
  }
}

function* fetchPhotoLink(mediaId) {
  const token = yield select(makeSelectToken());
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": token.toString()
      }
    };

    const photo = yield call(request, photoUrl + mediaId, options);
    yield put(changePhotoLink(photo.mediaUrl));
  } catch (error) {
    yield put(changePhotoLink(error));
  }
}

function* logout() {
  yield put(unsetClient());
  deleteCookie("uuid", {path: "/"});
  deleteCookie("role", {path: "/"});
  deleteCookie("token", {path: "/"});
  yield put({ type: CLIENT_UNSET });
  yield put({ type: LOGOUT_SUCCESS });
  yield call(forwardTo, "/login");
}

function* logoutRequest() {
  yield takeEvery(LOGOUT_REQUEST, logout);
}

function* loadInvestigatorInfoData() {
  yield takeLatest(LOAD_INVESTIGATOR_INFO_REQUEST, loadInvestigatorInfo);
}

function forwardTo(location){
  history.push(location)
}

export default function* defaultSaga() {
  yield all([loadInvestigatorInfoData(), logoutRequest()]);
}