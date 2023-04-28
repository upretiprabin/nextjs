import {getData} from "../../helpers/serverHelper";
import {INVESTIGATORS, PHOTO} from "../../helpers/urls";
import {failedInfo, failedPhoto, loadingInfo, loadingPhoto, successInfo, successPhoto} from "./reducer"
import {getCookie} from "cookies-next";

export const getInfo = async (dispatch) => {
  try {
    const uuid = getCookie('uuid');
    dispatch(loadingInfo());
    const data = await getData(INVESTIGATORS(uuid));
    const role = getCookie("role");
    if (role?.includes("ROLE_DETECTIVE") && data.photo) {
      await getPhotoLink(dispatch, data.photo);
    }
    console.log('investigator info', data);
    dispatch(successInfo({investigator: data}));
  } catch (error) {
    dispatch(failedInfo(error?.message));
  }
}

export const getPhotoLink = async (dispatch, id) => {
  try {
    // const uuid = cookie.load('uuid');
    dispatch(loadingPhoto());
    const data = await getData(PHOTO(id));
    dispatch(successPhoto({photoLink: data.mediaUrl}));
  } catch (error) {
    dispatch(failedPhoto(error?.message));
  }
}