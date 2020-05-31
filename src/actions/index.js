import { SET_CURRENT_USER, LOGIN_USER } from "./types";

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    user,
  };
};

export const login = () => {
  return {
    type: LOGIN_USER,
  };
};
