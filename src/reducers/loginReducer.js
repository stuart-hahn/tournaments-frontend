const INITIAL_STATE = {
  isSignedIn: null,
  currentUser: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, isSignedIn: true, currentUser: action.payload };
    case "LOGOUT_USER":
      return { ...state, isSignedIn: false, currentUser: null };
    default:
      return state;
  }
};
