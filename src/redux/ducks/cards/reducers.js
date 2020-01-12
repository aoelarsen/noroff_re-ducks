import * as types from "./types";

/* State shape
{
  isLoadingCards: bool,
  hasLoadedCards: bool,
  cards: [],
  filteredCards: [],
  inputValue: string,
}
*/

const initialState = {
  isLoadingCards: false,
  hasLoadedCards: false,
  cardsArray: [],
  filteredCards: [],
  inputValue: "",
  serverError: null
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_CARDS_BEGIN:
      return {
        ...state,
        isLoadingCards: true
      };

    case types.LOAD_CARDS_SUCCESS:
      return {
        ...state,
        isLoadingCards: false,
        hasLoadedCards: true,
        cardsArray: action.payload
      };

    case types.LOAD_CARDS_ERROR:
      return {
        ...state,
        isLoadingCards: false,
        hasLoadedCards: true,
        serverError: action.payload
      };

    case types.INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload
      };

    case types.FILTER_CARDS:
      return {
        ...state,
        filteredCards: action.payload
      };

    default:
      return state;
  }
};

export default cardsReducer;
