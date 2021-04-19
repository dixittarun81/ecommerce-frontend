import axios from "../helpers/axios";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
} from "./types";

export const signup = (user) => {

  return async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST });
    const res = await axios.post("/admin/signup", {
      ...user,
    });

    if (res.status === 201) {
      const { message } = res.data;

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: { message },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: USER_REGISTER_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};
