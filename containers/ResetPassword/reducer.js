import {fromJS} from "immutable";

import {
  CHANGE_CONFIRM_PASSWORD,
  CHANGE_PASSWORD,
  CHANGE_UUID,
  RESET_ERROR,
  RESET_REQUESTING,
  RESET_SUCCESS
} from "./constants";

export const initialState = fromJS({
  loading: false,
  error: false,
  password: "",
  confirmPassword: "",
  uuid: ""
});

const reducer = function loginReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PASSWORD:
      return state
        .set("password", action.password);
    case CHANGE_CONFIRM_PASSWORD:
      return state
        .set("confirmPassword", action.confirmPassword);
    case CHANGE_UUID:
      return state
        .set("uuid", action.uuid);
    case RESET_REQUESTING:
      return state
        .set("loading", true)
        .set("error", false);
    case RESET_SUCCESS:
      return state
        .set("loading", false)
        .set("error", false);
    case RESET_ERROR:
      return state
        .set("loading", false)
        .set("error", action.error);
    default:
      return state;
  }
};

export default reducer;
