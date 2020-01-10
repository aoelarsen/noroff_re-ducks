import * as types from "./types";

export function fetchCards(cardsArray) {
  return {
    type: types.FETCH_CARDS,
    payload: cardsArray
  };
}

export function setFilteredCards(filteredArray) {
  return {
    type: types.FILTER_CARDS,
    payload: filteredArray
  };
}

export function setInputValue(input) {
  return {
    type: types.INPUT_VALUE,
    payload: input
  };
}

export function setLoading(bool) {
  return {
    type: types.SET_LOADING,
    paylaod: bool
  };
}
