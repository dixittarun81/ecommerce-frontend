import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
} from "../actions/types";

const INITIAL_STATE = {
  error: null,
  message: "",
  loading: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return (state = { ...state, loading: true });
    case USER_REGISTER_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        message: action.payload.message,
      });
    case USER_REGISTER_FAILURE:
      return (state = {
        ...state,
        loading: false,
        error: action.payload.error,
      });
    default:
      return state;
  }
};

export default authReducer;
