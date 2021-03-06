import {
  LOGIN_USER,
  LOGOUT_USER,
  ADD_TOURNAMENTS,
  FETCH_TOURNAMENTS,
  ADD_PLAYERS,
  FETCH_PLAYERS,
} from "./types";

export const fetchPlayers = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_PLAYERS });
    const token = localStorage.token;
    if (token) {
      return fetch("http://localhost:3001/api/v1/players", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Authorization": `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then((players) => dispatch({ type: ADD_PLAYERS, players }));
    }
  };
};

const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: user,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const getProfileFetch = () => {
  return (dispatch) => {
    const token = localStorage.token;
    if (token) {
      return fetch("http://localhost:3001/api/v1/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Authorization": `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.error) {
            localStorage.removeItem("token");
          } else {
            dispatch(loginUser(data.user));
          }
        });
    }
  };
};

export const userLoginFetch = (user) => {
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

export const userPostFetch = (user) => {
  return (dispatch) => {
    return fetch("http://localhost:3001/api/v1/users", {
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

export const fetchTournaments = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_TOURNAMENTS });
    const token = localStorage.token;
    if (token) {
      return fetch("http://localhost:3001/api/v1/tournaments", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Authorization": `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then((tournaments) =>
          dispatch({ type: ADD_TOURNAMENTS, tournaments })
        );
    }
  };
};
