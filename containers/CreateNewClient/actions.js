import {postData} from "../../helpers/serverHelper";
import {CLIENT} from "../../helpers/urls";
import {failedClient, loadingClient, successClient} from "./reducer"
import {getCookie} from "cookies-next";
import swal2 from "sweetalert2";

export const addClient = async (dispatch, req) => {
  try {
    const uuid = getCookie('uuid');
    dispatch(loadingClient());
    const data = await postData({url: CLIENT(uuid) + '/create', req});
    if (data?.data) {
      swal2.fire({
        titleText: "Congrats!",
        text: "New Client has been added!",
        confirmButtonText: "CONTINUE",
        icon: "success",
        showCloseButton: true,
        customClass: {
          container: 'commonAlert'
        }
      });
    }
    dispatch(successClient({client: data}));
  } catch (error) {
    console.log(error, 'err');
    dispatch(failedClient({message: error?.message}));
  }
}
