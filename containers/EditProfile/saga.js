import { all, take, call, put, select, takeLatest, takeEvery } from "redux-saga/effects";
import { request } from "utils/request";
import { EDIT_PROFILE_REQUEST, LOAD_INVESTIGATOR_INFO_REQUEST } from "./constants";
import { changeInvestigatorInfo, editProfileSuccess, editProfileError } from "./actions";
import { makeSelectToken, makeSelectUUID } from "../App/selectors";
import swal from "sweetalert";

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
    const investigator = yield call(request, investigatorDetailUrl + investigatorId + "/retrieve", options);
    yield put(changeInvestigatorInfo(investigator));
  } catch (error) {
  }
}

function* editProfileRequest(action) {
  const investigatorId = yield select(makeSelectUUID());
  const token = yield select(makeSelectToken());
  const data = {
    agencyName: action.payload.agencyName,
    agencyAddress: action.payload.agencyAddress,
    phone: action.payload.phone,
    agencyFax: action.payload.agencyFax,
    agencyWebsite: action.payload.agencyWebsite,
    email: action.payload.email,
    agencyZipCode: action.payload.agencyZipCode,
    licenseId: action.payload.licenseId,
    licenseInfo: action.payload.licenseInfo,
    member: action.payload.member,
    firstName: action.payload.firstName,
    lastName: action.payload.lastName,
    agencyCity: action.payload.agencyCity,
    agencyState: action.payload.agencyState,
    description: action.payload.description
  };
  const formData = new FormData();
  formData.append("photo", action.payload.photo);
  formData.append("agencyLogo", action.payload.agencyLogo);
  formData.append("investigatorInfo", JSON.stringify(data));
  try {

    const options = {
      method: "PUT",
      headers: {
        //"Content-Type": "multipart/form-data",
        "authorization": token.toString()
      },
      body: formData
    };
    const investigator = yield call(request, investigatorDetailUrl + investigatorId + "/update", options);
    yield put(changeInvestigatorInfo(investigator));
    yield put(editProfileSuccess("Investigator updated"));
    swal("Success!", "Profile updated successfully", "success");
  } catch (error) {
    yield put(editProfileError(error));
    swal("Ohh!", "Failed to update Profile. Please try again later.", "error");
  }
}

function* loadInvestigatorInfoData() {
  yield takeLatest(LOAD_INVESTIGATOR_INFO_REQUEST, loadInvestigatorInfo);
}

function* editInvestigatorProfileRequest() {
  yield takeLatest(EDIT_PROFILE_REQUEST, editProfileRequest);
}

export default function* defaultSaga() {
  yield all([loadInvestigatorInfoData(), editInvestigatorProfileRequest()]);
}
