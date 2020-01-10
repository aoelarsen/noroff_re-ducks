import * as types from "./types";

export function fetchCards(cardsArray) {
  return {
    type: types.FETCH_CARDS,
    payload: cardsArray
  };
}
