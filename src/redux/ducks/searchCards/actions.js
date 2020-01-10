import * as types from "./types";

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
