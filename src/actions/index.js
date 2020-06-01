import { LOGIN_USER } from "./types";

export const userPostFetch = (user) => {
  return (dispatch) => {
    return fetch("http://localhost:3001/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
          // Here you should have logic to handle invalid creation of a user.
          // This assumes your Rails API will return a JSON object with a key of
          // 'message' if there is an error with creating the user, i.e. invalid username
        } else {
          localStorage.setItem("token", data.token);
          dispatch(loginUser(data.user));
        }
      });
  };
};

const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: user,
});
