// import { fromJS } from "immutable";

// import {
//   PHOTO_LINK_REQUEST, PHOTO_LINK, LOAD_INVESTIGATOR_INFO, LOAD_INVESTIGATOR_INFO_REQUEST, LOAD_INVESTIGATOR_INFO_ERROR,
//   LOGOUT_REQUEST, LOGOUT_SUCCESS
// } from "./constants";

// export const initialState = fromJS({
//   loading: false,
//   error: {},
//   photoLink: "",
//   investigator: null
// });

// const reducer = function headerReducer(state = initialState, action) {
//   switch (action.type) {
//     case PHOTO_LINK_REQUEST:
//       return state
//         .set("loading", true)
//         .set("error", false);
//     case PHOTO_LINK:
//       return state
//         .set("loading", false)
//         .set("error", false)
//         .set("photoLink", action.photoLink);
//     case LOAD_INVESTIGATOR_INFO:
//       return state
//         .set("loading", false)
//         .set("error", false)
//         .set("investigator", action.investigator);
//     case LOAD_INVESTIGATOR_INFO_ERROR:
//       return state
//         .set("loading", false)
//         .set("error", action.error);
//     case LOAD_INVESTIGATOR_INFO_REQUEST:
//       return state
//         .set("loading", true)
//         .set("error", false);
//     case LOGOUT_REQUEST:
//       return state
//         .set("loading", true)
//         .set("error", false);
//     case LOGOUT_SUCCESS:
//       return state
//         .set("loading", false)
//         .set("error", false);
//     default:
//       return state;
//   }
// };

// export default reducer;


import {createSlice} from "@reduxjs/toolkit"
import cookie from 'react-cookies'

const initialState = {
  loading:false,
  loadingPhoto:false,
  error:false,
  errorPhoto:false,
  investigator:{},
  photoLink:'',
}

const infoReducer = createSlice({
  name:'info',
  initialState,
  reducers:{
    loadingInfo(state){
      state.loading=true;
      state.investigator = {};
      state.error=false;

    },
    successInfo(state,action){
      state.loading=false;
      state.error=false;
      state.investigator = action.payload.investigator;
    },
    failedInfo(state,action){
      state.error = action.payload,
      state.loading = false
    },
    loadingPhoto(state){
      state.loadingPhoto=true;
      state.photoLink = '';
      state.errorPhoto=false;
    },
    successPhoto(state,action){
      state.loadingPhoto=false;
      state.errorPhoto=false;
      state.photoLink = action.payload.photoLink;
    },
    failedPhoto(state,action){
      state.errorPhoto = action.payload,
      state.loadingPhoto = false
    }
  }
})

export default infoReducer.reducer;

export const {loadingInfo, successInfo, failedInfo, logOutAuth,loadingPhoto,successPhoto,failedPhoto} = infoReducer.actions;