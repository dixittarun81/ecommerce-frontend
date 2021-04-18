import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST } from "../actions/types";

const INITIAL_STATE = {
  token: null,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    picture: "",
  },
  authenticate: false,
  authenticating: true,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return (state = { ...state, authenticating: true });
    case LOGIN_SUCCESS:
      return (state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false
      });
    case LOGOUT_REQUEST:
      return (state = {...INITIAL_STATE});
    default:
      return state;
  }
};

export default authReducer;
