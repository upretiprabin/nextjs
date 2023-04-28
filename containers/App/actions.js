import { CLIENT_SET, CLIENT_UNSET } from "./constants";

export function setClient(loginData) {
  return {
    type: CLIENT_SET,
    loginData
  };
}

export function unsetClient() {
  return {
    type: CLIENT_UNSET
  };
}
