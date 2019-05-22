export default function reducerDashboard(state = {}, action) {
  switch (action.type) {
    case "GET_POKEMONS":
      return { ...state, pokemons: action.response };
    case "GET_POKEMONS_ID":
      return { ...state, pokemon: action.response };
    default:
      return state;
  }
}
