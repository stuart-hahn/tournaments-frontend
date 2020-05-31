const INITIAL_STATE = {
  username: "",
  password: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return [...state, action.payload];
    default:
      return state;
  }
};
