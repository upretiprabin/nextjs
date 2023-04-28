import {all, call, fork, put, select, takeLatest} from "redux-saga/effects";
import {RESET_REQUESTING} from "./constants";
import {errorRequest, successRequest} from "./actions";
import {request} from "../../utils/request";
import swal from "sweetalert";
import history from "../../utils/history";
import {makeSelectUuid} from "./selectors";

const loginUrl = "/api/changePassword";

function* resetPassword(action) {
  const uuid = yield select(makeSelectUuid());
  console.log(action);
  try {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...action.payload, uuid })
    };
    yield call(request, loginUrl, options);
    swal({
      title: "Success!!",
      text: "Your Password has been Reset",
      icon: "success"
    });
    yield put(successRequest());
    yield call(forwardTo, "/login");
  } catch (error) {
    yield put(errorRequest(error));
  }
}

function* resetRequest() {
  yield takeLatest(RESET_REQUESTING, resetPassword);
}

function forwardTo(location) {
  history.push(location)
}

export default function* defaultSaga() {
  yield all([fork(resetRequest)]);
}
