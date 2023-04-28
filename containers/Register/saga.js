import {all, call, fork, put, select, take, takeEvery, takeLatest} from "redux-saga/effects";
import {REGISTER_REQUESTING, UPLOAD_AGENCY_LOGO_REQUEST, UPLOAD_PHOTO_REQUEST} from "./constants";
import {
  changeAgencyLogo,
  changePhoto,
  registerFail,
  registerSuccess,
  stepOneFailed,
  stepOneSuccess,
  stepThreeFailed,
  stepThreeSuccess,
  stepTwoFailed,
  stepTwoSuccess,
  uploadAgencyLogoFailure,
  uploadAgencyLogoProgress,
  uploadAgencyLogoSuccess,
  uploadPhotoFailure,
  uploadPhotoProgress,
  uploadPhotoSuccess
} from "./actions";
import {
  makeSelectAgencyAddress,
  makeSelectAgencyCity,
  makeSelectAgencyFax,
  makeSelectAgencyLogo,
  makeSelectAgencyName,
  makeSelectAgencyState,
  makeSelectAgencyZipCode,
  makeSelectConfirmPassword,
  makeSelectEmail,
  makeSelectFile,
  makeSelectFirstName,
  makeSelectLastName,
  makeSelectLicenseId,
  makeSelectPassword,
  makeSelectPhone,
  makeSelectPhoto,
  makeSelectUBI,
  makeSelectUsername
} from "./selectors";

import {createUploadFileChannel, request} from "../../utils/request";
import {validateEmail, validatePassword} from "../../utils/utils";
import swal from "sweetalert";
import history from "../../utils/history";
import {loadingRegister} from "./reducer";

const uploadUrl = "/api/upload";
const registerUrl = "/api/investigators/register";

function* workerRegister(action) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(action.payload)
    };

    const investigator = yield call(request, registerUrl, options);
    if (investigator.fieldErrors || investigator.globalErrors) {
      if (investigator.fieldErrors.length > 0) {
        for (let i = 0; i < investigator.fieldErrors.length; i++) {
          if (investigator.fieldErrors[i].field === 'username' && investigator.fieldErrors[i].code === 'AlreadyExists') {
            swal("Registration Failed!", "User already exists. Please try to login or reset your password", "error")
          }
        }
      }
      yield put(registerFail(investigator));
      return;
    }
    swal("Registered!", "You have been registered. Please check your email for the verification code to activate your account. (The code will be valid for 24hrs.)", "success");
    yield put(registerSuccess("Investigator Registered"));
    yield call(forwardTo, ("/verificationCode/" + investigator.uuid));
  } catch (error) {
    swal("Ohh!", "Something is not correct. Please fix it", "error");
    console.log('Error', error);
    yield put(registerFail(error));
  }
}

function* uploadPhotoSaga() {
  const file = yield select(makeSelectFile());
  const channel = yield call(createUploadFileChannel, uploadUrl, file);
  try {
    while (true) {
      const {progress = 0, err, success, fileId} = yield take(channel);
      if (err) {
        yield put(uploadPhotoFailure(file, err));
        return;
      }

      if (success) {
        yield put(uploadPhotoSuccess(file));
        yield put(changePhoto(fileId));
        return;
      }

      yield put(uploadPhotoProgress(file, progress));
    }
  } catch (error) {
    yield put(uploadPhotoFailure(file, error));
  }
}

function* uploadAgencyLogoSaga() {
  const file = yield select(makeSelectFile());
  const channel = yield call(createUploadFileChannel, uploadUrl, file);
  try {
    while (true) {
      const {progress = 0, err, success, fileId} = yield take(channel);
      if (err) {
        yield put(uploadAgencyLogoFailure(file, err));
        return;
      }

      if (success) {
        yield put(uploadAgencyLogoSuccess(file));
        yield put(changeAgencyLogo(fileId));
        return;
      }

      yield put(uploadAgencyLogoProgress(file, progress));
    }
  } catch (error) {
    yield put(uploadAgencyLogoFailure(file, error));
  }
}

function* registerRequest() {
  yield takeLatest(loadingRegister.type, workerRegister);
}

function* uploadPhotoRequestWatcherSaga() {
  yield takeEvery(UPLOAD_PHOTO_REQUEST, uploadPhotoSaga);
}

function* uploadAgencyLogoRequestWatcherSaga() {
  yield takeEvery(UPLOAD_AGENCY_LOGO_REQUEST, uploadAgencyLogoSaga);
}

export default function* registerSaga() {
  yield fork(registerRequest);
}
