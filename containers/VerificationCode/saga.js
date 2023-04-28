import {all, call, fork, put, takeLatest} from "redux-saga/effects";
import {request} from "../../utils/request";
import {GET_NEW_CODE_REQUEST, VERIFY_CODE_REQUEST} from "./constants";
import {getNewCodeError, getNewCodeSuccess, verifyCodeError, verifyCodeSuccess} from "./actions";
import history from "../../utils/history";
import swal from "sweetalert";

const apiUrlForVerifyCode = "/api/investigators/";

function* verifyCode(action) {
    const investigatorId = action.payload.investigatorId;
    const verificationCode = action.payload.verificationCode;
    try {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        };
        const url = apiUrlForVerifyCode + "verifyCode/" + investigatorId + "?" + (new URLSearchParams({code: verificationCode}).toString());
        let response = yield call(request, url, options);
        swal("Congratulations!", "Your account has been activated.")
        yield put(verifyCodeSuccess());
        yield call(forwardTo, "/login");
    } catch (e) {
        swal({
            title: "Error",
            text: e.error,
            icon: "error"
        });
        yield put(verifyCodeError(e));
    }
}

function* getNewCode(action) {
    const investigatorId = action.payload.investigatorId;
    try {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        };
        const url = apiUrlForVerifyCode + "changeVerifyCode/" + investigatorId;
        let response = yield call(request, url, options);
        swal("Update!", response.success + " (The code will be valid for 24hrs.)")
        yield put(getNewCodeSuccess());
    } catch (e) {
        swal({
            title: "Error",
            text: e.error,
            icon: "error"
        });
        yield put(getNewCodeError(e));
    }
}

function* verifyCodeRequest() {
    yield takeLatest(VERIFY_CODE_REQUEST, verifyCode);
}

function* getNewCodeRequest() {
    yield takeLatest(GET_NEW_CODE_REQUEST, getNewCode);
}

function forwardTo(location) {
    history.push(location)
}

export default function* verifyCodeSaga() {
    yield all([fork(verifyCodeRequest), fork(getNewCodeRequest)]);
}
