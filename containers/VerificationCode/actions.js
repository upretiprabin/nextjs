import swal from "sweetalert";
import { getData, postData } from "../../helpers/serverHelper";
import { GET_CODE, REGISTER, VERIFY } from "../../helpers/urls";
import { failedVerification, loadingVerification, successVerification } from "./reducer";
import {getCookie} from "cookies-next";

export const verifyCodeCall = async(dispatch, req, cb) =>{
    try {
      dispatch(loadingVerification())
      const data = await getData(VERIFY(req.uuid,req.code));
      cb('/login');
      swal("Congratulations!", "Your account has been activated.")
      dispatch(successVerification(data))
    } catch (error) {
      console.log(error,"error")
      swal({
          title: "Error",
          text: error.error,
          icon: "error"
      });
      dispatch(failedVerification({message: error?.message}))
    }
  }

export const getCodeAgain = async(dispatch) =>{
    try {
      dispatch(loadingVerification())
      const uuid = getCookie('uuid');
      const data = await getData(GET_CODE(uuid));
      swal("Update!", data.success + " (The code will be valid for 24hrs.)");
      dispatch(successVerification(data))
    } catch (error) {
        swal({
            title: "Error",
            text: error.error,
            icon: "error"
        });
      console.log(error,"error")
      dispatch(failedVerification({message: error?.message}))
    }
  }