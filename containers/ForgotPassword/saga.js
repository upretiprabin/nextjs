import { all, take, call, put, select, takeLatest } from "redux-saga/effects";
import { RESET_REQUESTING } from "./constants";
import { makeSelectEmail } from "./selectors";
import { request } from "../../utils/request";
import swal from "sweetalert";
import { errorRequest, successRequest } from "./actions";

const loginUrl = "/api/resetPassword";

function resetApi(email) {

}

function* resetPassword() {
  const email = yield select(makeSelectEmail());
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    };
    const data = yield call(request, loginUrl, options);
    if (data.error) {
      swal({
        title: "Ahhh!!",
        text: data.error,
        icon: "error"
      });
    } else {
      swal({
        title: "Success!!",
        text: "Please check your email to reset password.",
        icon: "success"
      });
    }
    yield put(successRequest());
  } catch (error) {
    console.log(error);
    yield put(errorRequest(error));
  }
}

function* loginRequest() {
  yield takeLatest(RESET_REQUESTING, resetPassword);
}

export default function* defaultSaga() {
  yield all([loginRequest()]);
}
