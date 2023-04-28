// import { fromJS } from "immutable";

// import {
//   RESET_REQUESTING,
//   CHANGE_EMAIL, RESET_ERROR
// } from "./constants";

// export const initialState = fromJS({
//   loading: false,
//   error: false,
//   email: ""
// });

// const reducer = function loginReducer(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_EMAIL:
//       return state
//         .set("email", action.email);
//     case RESET_REQUESTING:
//       return state
//         .set("loading", true)
//         .set("error", false);
//     case RESET_ERROR:
//       return state
//         .set("loading", true)
//         .set("error", action.error);
//     default:
//       return state;
//   }
// };

// export default reducer;


import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    error: false,
    email: ""
}

const forgotPasswordReducer = createSlice({
  name:'forgotpassword',
  initialState,
  reducers:{
    changeEmail(state,action){
      state.email= action.payload;

    },
    resetRequesting(state,action){
      state.loading=true;
      state.error=false;
    },
    resetSuccess(state,action){
      state.loading=false;
      state.error=false;
    },
    resetError(state,action){
      state.error = action.payload.error;
      state.loading = false;
    },
  }
})

export default forgotPasswordReducer.reducer;

export const {changeEmail, resetRequesting, resetError, resetSuccess} = forgotPasswordReducer.actions;