import {getData, postData} from '../../helpers/serverHelper'
import {loadingAuth, failedAuth, successAuth} from './reducer'
import {CASE, CUSTOMER, LOGIN} from '../../helpers/urls'
import swal from 'sweetalert'
import cookie from 'react-cookies'

export const login = async (dispatch, req, cb) => {
  try {
    dispatch(loadingAuth())
    const data = await postData({url: LOGIN, req});

    if (data?.msg === 'Account not Active') {
      swal({
        title: "Ohh!!",
        text: "Your Account is not yet active. Please check your email for verification code.",
        icon: "warning"
      });
      dispatch(failedAuth({message: 'Account not active'}));
      cb('/verificationCode/' + data?.uuid);
    } else {
      dispatch(successAuth(data));
      const role = data?.authorityList;
      if (role?.includes("ROLE_DETECTIVE")) {
        console.log('detective');
        const customer = await postData(CUSTOMER(data?.uuid),{uuid:data?.uuid});
        console.log(customer,'customer');
        cookie.save('customerId', "test_customer");
        const isCase = await getData(CASE + '/' + data?.uuid + '/list');
        if (isCase?.length > 0) {
          // LOGIN_REQUESTING
          cb('/dashboard/' + data?.uuid);
        } else {
          cb('/welcome/' + data?.uuid);
        }
      } else if (role?.includes("ROLE_CLIENTS")) {
        console.log('client');
        cb('/client/' + data?.uuid);
      } else {
        dispatch(failedAuth({message: 'Sorry, we could not find an account with that username.'}))
      }
    }

    // cb();
  } catch (error) {
    console.log(error, "error")
    dispatch(failedAuth({message: "Sorry, we could not find an account with that username."}))
  }
}