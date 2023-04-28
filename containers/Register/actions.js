import {postData} from '../../helpers/serverHelper'
import {failedRegister, loadingRegister, successRegister} from './reducer'
import {REGISTER} from '../../helpers/urls'
import swal from 'sweetalert'

export const register = async (dispatch, req, cb) => {
  try {
    dispatch(loadingRegister())
    const investigator = await postData({url: REGISTER, req});
    if (investigator.fieldErrors || investigator.globalErrors) {
      if (investigator.fieldErrors.length > 0) {
        for (let i = 0; i < investigator.fieldErrors.length; i++) {
          if (investigator.fieldErrors[i].field === 'username' && investigator.fieldErrors[i].code === 'AlreadyExists') {
            swal("Registration Failed!", "User already exists. Please try to login or reset your password", "error")
          }
        }
      }
      dispatch(failedRegister({message: 'User already Exist'}));
    } else {
      swal("Registered!", "You have been registered. Please check your email for the verification code to activate your account. (The code will be valid for 24hrs.)", "success");
      dispatch(successRegister(investigator))
      cb('/verificationCode/' + investigator.uuid);
    }
  } catch (error) {
    swal("Ohh!", "Something is not correct. Please fix it", "error");
    console.log(error, "error");
    dispatch(failedRegister({message: error?.message}))
  }
}