// import { fromJS } from "immutable";

// import {
//   NEW_CLIENT_REQUEST,
//   NEW_CLIENT_SUCCESS,
//   NEW_CLIENT_ERROR,
//   CHANGE_CLIENT_FIRST_NAME,
//   CHANGE_CLIENT_LAST_NAME,
//   CHANGE_CLIENT_USERNAME,
//   CHANGE_CLIENT_EMAIL,
//   CHANGE_CLIENT_PASSWORD,
//   CHANGE_CLIENT_POINT_OF_CONTACT_NAME,
//   CHANGE_CLIENT_POINT_OF_CONTACT_PHONE,
//   CHANGE_CLIENT_POINT_OF_CONTACT_EMAIL
// } from "./constants";


// // The initial state of the App
// export const initialState = fromJS({
//   loading: "",
//   error: [],
//   clientError: [],
//   clientFirstName: "",
//   clientLastName: "",
//   clientEmail: "",
//   clientUsername: "",
//   clientPassword: "",
//   clientPOCName: "",
//   clientPOCEmail: "",
//   clientPOCPhone: ""
// });

// function createNewClientReducer(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_CLIENT_FIRST_NAME:
//       return state.set("clientFirstName", action.clientFirstName);
//     case CHANGE_CLIENT_LAST_NAME:
//       return state.set("clientLastName", action.clientLastName);
//     case CHANGE_CLIENT_EMAIL:
//       return state.set("clientEmail", action.clientEmail);
//     case CHANGE_CLIENT_USERNAME:
//       return state.set("clientUsername", action.clientUsername);
//     case CHANGE_CLIENT_PASSWORD:
//       return state.set("clientPassword", action.clientPassword);
//     case CHANGE_CLIENT_POINT_OF_CONTACT_NAME:
//       return state.set("clientPOCName", action.clientPOCName);
//     case CHANGE_CLIENT_POINT_OF_CONTACT_EMAIL:
//       return state.set("clientPOCEmail", action.clientPOCEmail);
//     case CHANGE_CLIENT_POINT_OF_CONTACT_PHONE:
//       return state.set("clientPOCPhone", action.clientPOCPhone);
//     case NEW_CLIENT_REQUEST:
//       return state
//         .set("loading", true)
//         .set("error", false)
//         .set("clientError", []);
//     case NEW_CLIENT_SUCCESS:
//       return state
//         .set("loading", false)
//         .set("error", false)
//         .set("clientError", []);
//     case NEW_CLIENT_ERROR:
//       return state
//         .set("loading", false)
//         .set("error", true)
//         .set("clientError", action.clientError);
//     default:
//       return state;
//   }
// }

// export default createNewClientReducer;


import {createSlice} from "@reduxjs/toolkit"
// import cookie from 'react-cookies'

const initialState = {
  loading:false,
  error:false,
  client:[],
  // activeCaseDetail:{},
  // caseId:"",
  // investigatorId:"",
  // errorMessage:"",
  // isLoggedIn:false,
  // error:{},
  // token:""
}

const clientReducer = createSlice({
  name:'client',
  initialState,
  reducers:{
    loadingClient(state,action){
      state.loading=true;
      state.error=false;
      // state.investigatorId= action.payload;
      // state.user = {};
      // state.token="";

    },
    successClient(state,action){
      state.loading=false;
      state.error=false;
      state.client = action.payload.client;
      // cookie.save('token',action.payload?.token,{
      //   maxAge: 24 * 60 * 60,
      // });
      // const role = action.payload?.authorityList[0];
      // cookie.save("uuid", action.payload?.uuid);
      // cookie.save("role", role);
      // cookie.save("token", action.payload?.token);
      // state.user = action.payload;
      // state.token = action.payload?.token;
      // state.isLoggedIn = true;
    },
    failedClient(state,action){
      state.error = action.payload.error;
      state.loading = false;
    },
    // logOutAuth(state){
    //   cookie.remove('token');
    //   cookie.remove('role');
    //   cookie.remove('uuid');
    //   state.isLoggedIn = false;
    //   state.token = '';
    //   state.user = {}
    // }
  }
})

export default clientReducer.reducer;

export const {loadingClient, successClient, failedClient} = clientReducer.actions;