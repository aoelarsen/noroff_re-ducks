import { FETCH_CARDS } from "../../types";

const initialState = {
  allCards: []
};

const fetchCards = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARDS:
      return {
        ...state,
        allCards: action.payload
      };

    default:
      return state;
  }
};

export default fetchCards;
