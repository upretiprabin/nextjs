// import { fromJS } from "immutable";

// import {
//     VERIFY_CODE_REQUEST, VERIFY_CODE_ERROR, VERIFY_CODE_SUCCESS,
//     GET_NEW_CODE_REQUEST, GET_NEW_CODE_ERROR, GET_NEW_CODE_SUCCESS
// } from "./constants";

// export const initialState = fromJS({
//     investigatorId: '',
//     verificationCode: '',
//     loading: false,
//     error: false
// });

// function verificationCodeReducer(state = initialState, action) {
//     switch (action.type) {
//         case VERIFY_CODE_REQUEST:
//             return state
//                 .set("error", false)
//                 .set("loading", true);
//         case VERIFY_CODE_ERROR:
//             return state
//                 .set("error", action.error)
//                 .set("loading", false);
//         case VERIFY_CODE_SUCCESS:
//             return state
//                 .set("error", false)
//                 .set("loading", false);
//         case GET_NEW_CODE_REQUEST:
//             return state
//                 .set("error", false)
//                 .set("loading", true);
//         case GET_NEW_CODE_ERROR:
//             return state
//                 .set("error", action.error)
//                 .set("loading", false);
//         case GET_NEW_CODE_SUCCESS:
//             return state
//                 .set("error", false)
//                 .set("loading", false);
//         default:
//             return state;
//     }
// }

// export default verificationCodeReducer;



import {createSlice} from "@reduxjs/toolkit"
import cookie from 'react-cookies'

const initialState = {
  loading:false,
  error:false,
  success:false,
  verificationCode: '',
//   user:{},
//   token:""
}

const verificationReducer = createSlice({
  name:'verification',
  initialState,
  reducers:{
    loadingVerification(state){
      state.loading=true;
      state.success=false;
      state.error=false;
    //   state.user = {};
    //   state.token="";

    },
    successVerification(state,action){
        state.loading=false;
        state.success=true;
        state.error=false;
      },
    failedVerification(state,action){
        state.loading=false;
        state.success=false;
        state.error=true;
      },
    setVerificationState(state, action) {
      state.verificationCode = action.payload.verificationCode;
    }
  }
})

export default verificationReducer.reducer

export const {loadingVerification, successVerification, failedVerification, setVerificationState} = verificationReducer.actions;