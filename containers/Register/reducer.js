// import { fromJS } from "immutable";

// import {
//   REGISTER_REQUESTING,
//   REGISTER_SUCCESS,
//   REGISTER_FAILED,
//   CHANGE_FIRSTNAME,
//   CHANGE_LASTNAME,
//   CHANGE_USERNAME,
//   CHANGE_PASSWORD,
//   CHANGE_CONFIRM_PASSWORD,
//   CHANGE_EMAIL,
//   STEP_FOUR,
//   SUBMIT_FORM_DATA,
//   CHANGE_LICENSEID,
//   CHANGE_UBI,
//   CHANGE_PHOTO,
//   CHANGE_PHONE,
//   CHANGE_AGENCY_NAME,
//   CHANGE_AGENCY_ADDRESS,
//   CHANGE_AGENCY_CITY,
//   CHANGE_AGENCY_STATE,
//   CHANGE_AGENCY_ZIP_CODE,
//   CHANGE_AGENCY_FAX,
//   CHANGE_AGENCY_LOGO,
//   CHANGE_AGENCY_IS_MEMBER_OF_ASSOCIATION,
//   CHANGE_DESCRIPTION,
//   PENDING, SUCCESS, FAILED,
//   UPLOAD_AGENCY_LOGO_REQUEST, UPLOAD_AGENCY_LOGO_FAILURE, UPLOAD_AGENCY_LOGO_SUCCESS, UPLOAD_AGENCY_LOGO_PROGRESS,
//   UPLOAD_PHOTO_REQUEST, UPLOAD_PHOTO_FAILURE, UPLOAD_PHOTO_SUCCESS, UPLOAD_PHOTO_PROGRESS,
//   STEP_ONE_REQUEST, STEP_ONE_FAIL, STEP_ONE_SUCCESS,
//   STEP_TWO_REQUEST, STEP_TWO_FAIL, STEP_TWO_SUCCESS,
//   STEP_THREE_REQUEST, STEP_THREE_FAIL, STEP_THREE_SUCCESS, STEP_REFRESH, GO_TO_PREVIOUS_STEP
// } from "./constants";

// export const initialState = fromJS({
//   loading: false,
//   error: {},
//   stepOneError: {},
//   stepTwoError: {},
//   stepThreeError: {},
//   registerError: {},
//   msg: "",
//   firstName: "",
//   lastName: "",
//   email: "",
//   username: "",
//   password: "",
//   confirmPassword: "",
//   licenseId: "",
//   ubi: "",
//   photo: "",
//   phone: "",
//   agencyName: "",
//   agencyAddress: "",
//   agencyCity: "",
//   agencyState: "",
//   agencyZipCode: "",
//   agencyFax: "",
//   agencyLogo: "",
//   isMemberOfAssociation: "",
//   description: "",
//   currentStep: 1
// });

// const reducer = function registerReducer(state = initialState, action) {
//   switch (action.type) {
//     case GO_TO_PREVIOUS_STEP:
//       return state
//         .set("currentStep", (action.currentStep - 1));
//     case STEP_REFRESH:
//       return state
//         .set("loading", true)
//         .set("stepOneError", [])
//         .set("currentStep", 1)
//         .set("error", false);
//     case STEP_ONE_REQUEST:
//       return state
//         .set("loading", true)
//         .set("stepOneError", [])
//         .set("currentStep", 1)
//         .set("error", false);
//     case STEP_ONE_FAIL:
//       return state
//         .set("loading", false)
//         .set("error", true)
//         .set("stepOneError", action.stepOneError)
//         .set("currentStep", 1);
//     case STEP_ONE_SUCCESS:
//       return state
//         .set("loading", false)
//         .set("error", false)
//         .set("stepOneError", [])
//         .set("currentStep", 2);
//     case STEP_TWO_REQUEST:
//       return state
//         .set("loading", true)
//         .set("stepTwoError", [])
//         .set("error", false)
//         .set("currentStep", 2);
//     case STEP_TWO_FAIL:
//       return state
//         .set("loading", false)
//         .set("error", true)
//         .set("stepTwoError", action.stepTwoError)
//         .set("currentStep", 2);
//     case STEP_TWO_SUCCESS:
//       return state
//         .set("loading", false)
//         .set("error", false)
//         .set("stepTwoError", [])
//         .set("currentStep", 3);
//     case STEP_THREE_REQUEST:
//       return state
//         .set("loading", true)
//         .set("stepThreeError", [])
//         .set("error", false)
//         .set("currentStep", 3);
//     case STEP_THREE_FAIL:
//       return state
//         .set("loading", false)
//         .set("error", true)
//         .set("stepThreeError", action.stepThreeError)
//         .set("currentStep", 3);
//     case STEP_THREE_SUCCESS:
//       return state
//         .set("loading", false)
//         .set("error", false)
//         .set("stepThreeError", [])
//         .set("currentStep", 4);
//     case STEP_FOUR:
//       return state
//         .set("currentStep", 5);
//     case SUBMIT_FORM_DATA:
//       return state
//         .set("msg", "Submitted");
//     case REGISTER_REQUESTING:
//       return state
//         .set("loading", true)
//         .set("error", false);
//     case REGISTER_SUCCESS:
//       return state
//         .set("loading", false)
//         .set("error", false)
//         .set("msg", action.msg);
//     case REGISTER_FAILED:
//       return state
//         .set("loading", false)
//         .set("error", true)
//         .set("registerError", action.registerError);
//     case CHANGE_FIRSTNAME:
//       return state
//         .set("firstName", action.firstName);
//     case CHANGE_LASTNAME:
//       return state
//         .set("lastName", action.lastName);
//     case CHANGE_EMAIL:
//       return state
//         .set("email", action.email);
//     case CHANGE_USERNAME:
//       return state
//         .set("username", action.username);
//     case CHANGE_PASSWORD:
//       return state
//         .set("password", action.password);
//     case CHANGE_CONFIRM_PASSWORD:
//       return state
//         .set("confirmPassword", action.confirmPassword);
//     case CHANGE_LICENSEID:
//       return state
//         .set("licenseId", action.licenseId);
//     case CHANGE_UBI:
//       return state
//         .set("ubi", action.ubi);
//     case CHANGE_PHOTO:
//       return state
//         .set("photo", action.photo);
//     case CHANGE_PHONE:
//       return state
//         .set("phone", action.phone);
//     case CHANGE_AGENCY_NAME:
//       return state
//         .set("agencyName", action.agencyName);
//     case CHANGE_AGENCY_ADDRESS:
//       return state
//         .set("agencyAddress", action.agencyAddress);
//     case CHANGE_AGENCY_CITY:
//       return state
//         .set("agencyCity", action.agencyCity);
//     case CHANGE_AGENCY_STATE:
//       return state
//         .set("agencyState", action.agencyState);
//     case CHANGE_AGENCY_ZIP_CODE:
//       return state
//         .set("agencyZipCode", action.agencyZipCode);
//     case CHANGE_AGENCY_FAX:
//       return state
//         .set("agencyFax", action.agencyFax);
//     case CHANGE_AGENCY_LOGO:
//       return state
//         .set("agencyLogo", action.agencyLogo);
//     case CHANGE_AGENCY_IS_MEMBER_OF_ASSOCIATION:
//       return state
//         .set("isMemberOfAssociation", action.isMemberOfAssociation);
//     case CHANGE_DESCRIPTION:
//       return state
//         .set("description", action.description);
//     case UPLOAD_PHOTO_REQUEST:
//       return state
//         .set("file", action.payload);
//     case UPLOAD_PHOTO_FAILURE:
//       return state
//         .set("err", action.payload)
//         .set("error", action.error)
//         .set("meta", action.meta);
//     case UPLOAD_PHOTO_SUCCESS:
//       return state
//         .set("meta", action.meta);
//     case UPLOAD_PHOTO_PROGRESS:
//       return state
//         .set("progress", action.progress)
//         .set("meta", action.meta);
//     case UPLOAD_AGENCY_LOGO_REQUEST:
//       return state
//         .set("file", action.payload);
//     case UPLOAD_AGENCY_LOGO_FAILURE:
//       return state
//         .set("err", action.payload)
//         .set("error", action.error)
//         .set("meta", action.meta);
//     case UPLOAD_AGENCY_LOGO_SUCCESS:
//       return state
//         .set("meta", action.meta);
//     case UPLOAD_AGENCY_LOGO_PROGRESS:
//       return state
//         .set("progress", action.progress)
//         .set("meta", action.meta);
//     default:
//       return state;
//   }
// };

// export default reducer;


import {createSlice} from "@reduxjs/toolkit"
import cookie from 'react-cookies'

const initialState = {
  status:"initial",
  loading: false,
  errorMessage:"",
  isLoggedIn:false,
  user:{},
  token:""
}

const registerReducer = createSlice({
  name:'register',
  initialState,
  reducers:{
    loadingRegister(state){
      state.status="loading";
      state.loading = true;
      state.user = {};
      state.token="";

    },
    successRegister(state,action){
      state.status="success";
      state.loading = false;
      cookie.save('token',action.payload?.accessToken,{
        maxAge: 24 * 60 * 60,
      });
      const role = action.payload?.authorityList[0];
      cookie.save("uuid", action.payload?.uuid);
      cookie.save("customerId", action.payload?.stripeId);
      cookie.save("role", role);
      cookie.save("token", action.payload?.token);
      state.user = action.payload;
      state.token = action.payload?.token;
      state.isLoggedIn = true;
    },
    failedRegister(state,action){
      state.status = "error";
      cookie.remove("uuid");
      cookie.remove("role");
      cookie.remove('token');
      state.errorMessage = action.payload?.message;
      state.user={};
      state.token = '';
      state.isLoggedIn = false
    }
  }
})

export default registerReducer.reducer

export const {loadingRegister, successRegister, failedRegister} = registerReducer.actions;