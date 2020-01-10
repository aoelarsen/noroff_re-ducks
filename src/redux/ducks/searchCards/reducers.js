import { FILTER_CARDS, INPUT_VALUE } from "./types";

const initialState = {
  inputValue: "",
  filteredCards: []
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload
      };

    case FILTER_CARDS:
      return {
        ...state,
        filteredCards: action.payload
      };

    default:
      return state;
  }
};

export default filterReducer;
