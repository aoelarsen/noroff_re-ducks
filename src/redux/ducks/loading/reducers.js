import { SET_LOADING } from "./types";

/* State shape
{
  isLoading: bool
}
*/

const initialState = {
  isLoading: true
};

const isLoading = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };

    default:
      return state;
  }
};

export default isLoading;
