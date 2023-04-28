import {createSlice} from "@reduxjs/toolkit"
import cookie from 'react-cookies'
import {setCookie, deleteCookie, getCookies} from "cookies-next";

const initialState = {
  status: "initial",
  loading: false,
  errorMessage: "",
  user: "",
  token: "",
  role: []
}

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loadingAuth(state) {
      state.status = "loading";
      state.loading = true;
    },
    successAuth(state, action) {
      state.status = "success";
      state.loading = false;
      state.user = action.payload?.uuid;
      state.token = action.payload?.token;
      state.role = action.payload?.authorityList;
      if (!action.payload?.authCheck) {
        setCookie("uuid", state.user, {
          maxAge: 24 * 60 * 60,
        });
        setCookie("role", JSON.stringify(state.role), {
          maxAge: 24 * 60 * 60,
        });
        setCookie("token", state.token, {
          maxAge: 24 * 60 * 60,
        });
      }
      state.isLoggedIn = true;
    },
    failedAuth(state, action) {
      state.status = "error";
      state.loading = false;
      deleteCookie('token');
      deleteCookie('role');
      deleteCookie('uuid');
      state.errorMessage = action.payload?.message;
    },
    logOutAuth(state) {
      state.status = "success";
      deleteCookie('token');
      deleteCookie('role');
      deleteCookie('uuid');
      deleteCookie('customerId');
      state.token = '';
      state.user = '';
      state.role = [];
      state.loading = false;
    }
  }
})

export default authReducer.reducer;

export const {loadingAuth, successAuth, failedAuth, logOutAuth} = authReducer.actions;