import axios from "../helpers/axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST } from "./types";

export const logIn = (user) => {
  console.log(user);

  return async (dispatch) => {
    dispatch({type: LOGIN_REQUEST})
    const res = await axios.post("/admin/signin", {
      ...user,
    });

    if (res.status === 200) {
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem('user', JSON.stringify(user))
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token,
          user
        },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: LOGIN_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};

export const isUserLoggedIn = () => {
  return async dispatch => {
    const token = localStorage.getItem('token');
    if(token){
      const user = JSON.parse(localStorage.getItem('user'));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token, user
        }
      });
    }else{
      dispatch({
        type: LOGIN_FAILURE,
        payload: {error: 'Failed to login'}
      })
    }
  }
}

export const signout = () => {
  return async dispatch => {
    localStorage.clear();
    dispatch({
      type: LOGOUT_REQUEST
    })
  }
}
