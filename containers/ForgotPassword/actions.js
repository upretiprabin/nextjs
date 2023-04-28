import swal from "sweetalert";
import {postData} from "../../helpers/serverHelper";
import {FORGOTPASSWORD} from "../../helpers/urls";
import {resetError, resetRequesting, resetSuccess} from "./reducer";

export const resetPassword = async (dispatch, email) => {
  try {
    dispatch(resetRequesting());
    const data = await postData({url: FORGOTPASSWORD, req: {email}});
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
    dispatch(resetSuccess());
  } catch (error) {
    console.log(error);
    dispatch(resetError(error));
  }
}