import axios from 'axios';
import Router from "next/router";
import store from '../redux/store';
import {logOutAuth} from "../containers/Login/reducer";

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers:{
        'Access-Control-Allow-Origin':'*'
    },
    // timeout: 60 * 100
});

axiosInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if(error.response.status === 401) {
        store.dispatch(logOutAuth())
        Router.replace('/login')
    }
    return Promise.reject(error);
});