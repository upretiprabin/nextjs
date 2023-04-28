import { setClient } from "../containers/App/actions";
import cookie from "react-cookies";
import {getCookie} from "cookies-next";

function checkAuthorization(dispatch) {
  const storedToken = getCookie("token");

  if (storedToken) {
    const uuid = getCookie("uuid");
    const role = getCookie("role");

    // const createdDate = new Date(token.created);
    // const created = Math.round(createdDate.getTime() / 1000);
    // const ttl = 1209600;
    // const expiry = created + ttl;
    //
    // if (created > expiry) return false;

    dispatch(setClient({ token: storedToken, uuid: uuid, authorityList: [role] }));
    return true;
  }

  return false;
}

export function checkIndexAuthorization({ dispatch }) {

  return (nextState, replace, next) => {
    if (checkAuthorization(dispatch)) {
      replace("welcome");
      return next();
    }

    replace("login");
    return next();
  };
}

export function checkWidgetAuthorization(store,availableWhileLoggedIn) {
  if(availableWhileLoggedIn)
    return false
  let { dispatch, getState } = store;
  const token = getState().token;
  if (token) return true;
  return checkAuthorization(dispatch);
}
