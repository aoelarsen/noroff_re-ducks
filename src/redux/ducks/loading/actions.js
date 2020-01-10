import * as types from "./types";

export function setLoading(bool) {
  return {
    type: types.SET_LOADING,
    paylaod: bool
  };
}
