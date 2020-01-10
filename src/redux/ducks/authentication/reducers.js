import * as types from "./types";

/* State shape
{
  userName: string,
  password: string,
  displayName: string,
  isAuthenticated: bool
}
*/

const initialState = {
  userName: "",
  password: "",
  displayName: "",
  isAuthenticated: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_USER:
      return {
        ...state,
        userName: action.payload.userName,
        password: action.payload.password
      };
    case types.AUTHENTICATE_USER:
      return {
        ...state,
        isAuthenticated: true,
        displayName: action.payload
      };

    case types.LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        userName: ""
      };

    default:
      return state;
  }
};

export default authReducer;
