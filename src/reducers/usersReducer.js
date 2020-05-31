export default (state = null, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return [...state, action.payload];
    default:
      return state;
  }
};
