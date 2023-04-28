import {axiosInstance} from "./axiosInstance";
import {getCookie} from "cookies-next";
import qs from 'qs';

export const getData = async (url = '') => {
  // const token = localStorage.getItem('token');
  const token = getCookie("token");
  const data = await axiosInstance.get(url, {headers: {"Authorization": `Bearer ${token}`}});
  return data?.data;
}

export const getDataWithParams = async ({url = '', params = {}}) => {
  // const token = localStorage.getItem('token');
  console.log("Query Params", params);
  const token = getCookie("token");
  const paramsSerializer = {
    serialize: (params) => {
      return qs.stringify(params, {indices: false});
    }
  }
  const data = await axiosInstance.get(url, {
    headers: {"Authorization": `Bearer ${token}`},
    params,
    paramsSerializer
  });
  return data?.data;
}

export const deleteData = async (url = '') => {
  // const token = localStorage.getItem('token');
  const token = getCookie("token");
  const data = await axiosInstance.delete(url, {headers: {"Authorization": `Bearer ${token}`}});
  return data?.data;
}
export const postData = async ({url, req}) => {
  const token = getCookie("token");
  console.log(url);
  const data = await axiosInstance.post(url, req, {headers: {"Authorization": `Bearer ${token}`}});
  return data?.data;
}

export const putData = async ({url, req}) => {
  // const token = localStorage.getItem('token');
  const token = getCookie("token");
  const data = await axiosInstance.put(url, req, {headers: {"Authorization": `Bearer ${token}`}});
  return data?.data;
}
export const patchData = async (url = '', req) => {
  // const token = localStorage.getItem('token');
  const token = getCookie("token");
  const data = await axiosInstance.patch(url, req, {headers: {"Authorization": `Bearer ${token}`}});
  return data?.data;
}
export const postSuperData = async (url = '', req) => {
  // const token = localStorage.getItem('token');
  const token = 'tokenSUPERtoken3485%^';
  console.log(token);
  const data = await axiosInstance.post(url, req, {headers: {"Authorization": `Bearer ${token}`}});
  return data?.data;
}