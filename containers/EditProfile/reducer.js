import { fromJS } from "immutable";

import {
  LOAD_INVESTIGATOR_INFO,
  LOAD_INVESTIGATOR_INFO_REQUEST,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_ERROR,
  EDIT_PROFILE_REQUEST
} from "./constants";

export const initialState = fromJS({
  loading: false,
  error: false,
  investigator: []
});

function editProfileReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_INVESTIGATOR_INFO_REQUEST:
      return state
        .set("loading", true)
        .set("error", false);
    case LOAD_INVESTIGATOR_INFO:
      return state
        .set("loading", false)
        .set("error", false)
        .set("investigator", action.investigator);
    case EDIT_PROFILE_REQUEST:
      return state.set("loading", true).set("error", false).set("payload", action.payload);
    case EDIT_PROFILE_SUCCESS:
      return state
        .set("loading", false)
        .set("error", false);
    case EDIT_PROFILE_ERROR:
      return state
        .set("loading", false)
        .set("error", action.error);
    default:
      return state;
  }
}

export default editProfileReducer;