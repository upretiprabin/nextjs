import {
  CHANGE_CONFIRM_PASSWORD,
  CHANGE_PASSWORD,
  CHANGE_UUID,
  RESET_ERROR,
  RESET_REQUESTING,
  RESET_SUCCESS
} from "./constants";

export function resetRequest(values) {
  return {
    type: RESET_REQUESTING,
    payload: values
  };
}

export function successRequest() {
  return {
    type: RESET_SUCCESS
  };
}

export function errorRequest(error) {
  return {
    type: RESET_ERROR,
    error
  };
}

export function changePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    password
  };
}

export function changeConfirmPassword(confirmPassword) {
  return {
    type: CHANGE_CONFIRM_PASSWORD,
    confirmPassword
  };
}

export function changeUuid(uuid) {
  return {
    type: CHANGE_UUID,
    uuid
  };
}
