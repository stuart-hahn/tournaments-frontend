import { SET_CURRENT_USER, LOGIN_USER } from "./types";

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    user,
  };
};

export const loginUser = (credentials) => async (dispatch) => {
  const response = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  dispatch({ type: LOGIN_USER, payload: response.data });
};
