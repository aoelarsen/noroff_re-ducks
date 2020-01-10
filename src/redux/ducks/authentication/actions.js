import * as types from "./types";

export function addUser(userInfo) {
  return {
    type: types.ADD_USER,
    payload: userInfo
  };
}

export function authUser(displayName) {
  return {
    type: types.AUTHENTICATE_USER,
    payload: displayName
  };
}

export function logOutUser() {
  return {
    type: types.LOGOUT_USER
  };
}
