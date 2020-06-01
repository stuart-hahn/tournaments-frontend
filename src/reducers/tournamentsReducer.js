const INITIAL_STATE = {
  tournaments: [],
  requesting: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_TOURNAMENTS":
      return {
        ...state,
        tournaments: [...state.tournaments],
        requesting: true,
      };

    case "ADD_TOURNAMENTS":
      return {
        ...state,
        tournaments: action.tournaments,
        requesting: false,
      };
    default:
      return state;
  }
};
