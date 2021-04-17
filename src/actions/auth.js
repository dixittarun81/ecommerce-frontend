import { LOGIN_REQUEST } from "./types";

export const logIn = (user) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
      payload: user,
    });
  };
};
