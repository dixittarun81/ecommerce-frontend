import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from "../actions/types";

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
  loading: false,
  error: null,
  message: "",
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
        authenticating: false,
      });
    case LOGOUT_REQUEST:
      return (state = { ...state, loading: true });
    case LOGOUT_SUCCESS:
      return (state = { ...INITIAL_STATE });
    case LOGOUT_FAILURE:
      return (state = {
        ...state,
        error: action.payload.error,
        loading: false,
      });
    default:
      return state;
  }
};

export default authReducer;
