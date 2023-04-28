import { fromJS } from "immutable";
import {
  CREATE_NEW_SECTION_ERROR,
  CREATE_NEW_SECTION_SUCCESS,
  CREATE_NEW_SECTION_REQUEST
} from "./constants";


export const initialState = fromJS({
  loading: false,
  error: []
});

function newSectionReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_NEW_SECTION_ERROR:
      return state
        .set("loading", false)
        .set("error", action.error);
    case CREATE_NEW_SECTION_SUCCESS:
      return state
        .set("loading", false)
        .set("error", false);
    case CREATE_NEW_SECTION_REQUEST:
      return state
        .set("loading", true)
        .set("error", false);
    default:
      return state;
  }
}

export default newSectionReducer;