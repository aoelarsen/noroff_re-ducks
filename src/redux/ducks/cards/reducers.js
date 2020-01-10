import * as types from "./types";

/* State shape
{
  allCards: [],
  filteredCards: [],
  inputValue: string,
  isLoading: bool
}
*/

const initialState = {
  allCards: [],
  filteredCards: [],
  inputValue: ""
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CARDS:
      return {
        ...state,
        allCards: action.payload
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
    case types.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
};

export default cardsReducer;
