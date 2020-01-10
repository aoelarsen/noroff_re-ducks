import * as types from "./types";

/* State shape
{
  isVisible: bool
}
*/

const initialState = {
  isVisible: false
};

const toggleInfo = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_ABOUT_INFO:
      return { ...state, isVisible: !state.isVisible };

    default:
      return state;
  }
};

export default toggleInfo;
