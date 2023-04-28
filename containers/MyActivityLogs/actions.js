import {getData} from "../../helpers/serverHelper";
import {ACTIVITYLOGS} from "../../helpers/urls";
import {failedActivityLogs, loadingActivityLogs, successActivityLogs} from "./reducer"
import {getCookie} from "cookies-next";

export const getActivityLogs = async (dispatch, uuid) => {
  try {
    const uuidD = getCookie('uuid');
    dispatch(loadingActivityLogs(uuidD));
    const data = await getData(ACTIVITYLOGS + '/' + uuidD + '/list');
    dispatch(successActivityLogs({activityLogs: data}));
  } catch (error) {
    dispatch(failedActivityLogs({error: error}));
  }
}