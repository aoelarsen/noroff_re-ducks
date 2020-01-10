import * as types from "./types";

/* State shape
{
  allCards: []
}
*/

const initialState = {
  allCards: []
};

const fetchCardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CARDS:
      return {
        ...state,
        allCards: action.payload
      };

    default:
      return state;
  }
};

export default fetchCardsReducer;
