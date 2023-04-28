import {call, fork, put, takeLatest} from "redux-saga/effects";
import {failedAuth, loadingAuth, successAuth} from "./reducer";
import {CUSTOMER, LOGIN} from "../../helpers/urls";
import {postData} from "../../helpers/serverHelper";
import Router from 'next/router';
import {setCookie} from "cookies-next";
import swal from 'sweetalert';
// import swal2 from 'sweetalert2';

function* workerLogin(action) {
  try {
    const {req} = action.payload;
    const loginData = yield call(postData, {url: LOGIN, req});

    if (loginData?.msg === "Account not Active") {
      swal({
        title: "Ohh!!",
        text: "Your Account is not yet active. Please check your email for verification code.",
        icon: "warning"
      });
      yield put(failedAuth({message: "Account is not active"}));
      yield call(() => Router.push("/verificationCode/" + loginData.uuid));
    } else {
      const role = loginData.authorityList;
      if (role.includes("ROLE_DETECTIVE")) {
        console.log("DETECTIVE");
        yield put(successAuth(loginData));
        const customer = yield call(postData, {url: CUSTOMER(loginData?.uuid), req: {uuid: loginData?.uuid}});
        console.log(customer, 'customer');
        setCookie('customerId', "test_customer", {
          maxAge: 1 * 60 * 60,
        });
        yield call(() => Router.push("/dashboard/" + loginData.uuid));
      } else if (role.includes("ROLE_CLIENTS")) {
        console.log('CLIENT');
        yield put(successAuth(loginData));
        yield call(() => Router.push("/client/" + loginData.uuid));
      } else {
        console.log('UNIDENTIFIED');
        yield put(failedAuth({message: "Sorry, we could not find an account with that username."}));
      }
    }
  } catch (error) {
    console.log('LOGIN ERROR', error);
    yield put(failedAuth({message: "Sorry, we could not find an account with that username."}));
  }
}

function* loginRequest() {
  yield takeLatest(loadingAuth.type, workerLogin);
}

export default function* loginSaga() {
  yield fork(loginRequest);
}
