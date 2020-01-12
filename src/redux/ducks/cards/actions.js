import * as types from "./types";

export const loadCardsBegin = () => {
  return {
    type: types.LOAD_CARDS_BEGIN
  };
};

export const loadCardsSuccess = cards => {
  return {
    type: types.LOAD_CARDS_SUCCESS,
    payload: cards
  };
};

export const loadCardsError = error => {
  return {
    type: types.LOAD_CARDS_ERROR,
    payload: error
  };
};

export const setFilteredCards = filteredArray => {
  return {
    type: types.FILTER_CARDS,
    payload: filteredArray
  };
};

export const setInputValue = input => {
  return {
    type: types.INPUT_VALUE,
    payload: input
  };
};
