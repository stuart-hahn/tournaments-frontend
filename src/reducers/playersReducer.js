const INITIAL_STATE = {
  players: [],
  requesting: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_PLAYERS":
      return {
        ...state,
        players: [...state.players],
        requesting: true,
      };
    case "ADD_PLAYERS":
      return {
        ...state,
        players: action.players,
        requesting: false,
      };
    default:
      return state;
  }
};
