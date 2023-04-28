import { CLIENT_SET, CLIENT_UNSET } from "./constants";
import { fromJS } from "immutable";

const initialSate = fromJS({
  loading: false,
  error: false,
  uuid: null,
  token: null,
  role: null
});

function appReducer(state = initialSate, action) {
  switch (action.type) {
    case CLIENT_SET:
      return state
        .set("uuid", action.loginData.uuid)
        .set("token", action.loginData.token)
        .set("role", action.loginData.authorityList[0]);
    case CLIENT_UNSET:
      return state
        .set("uuid", null)
        .set("token", null)
        .set("role", null);
    default:
      return state;
  }
}

export default appReducer;
