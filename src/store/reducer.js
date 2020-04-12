const initialState = {
  next_url: '',
  pokemons: [],
  pokemonName: '',
};


export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_POKEMONS': {
      return {
        ...state,
        pokemons: [...state.pokemons, ...action.payload],
      };
    }
    case 'SET_NEXT_URL': {
      return {
        ...state,
        next_url: action.payload,
      };
    }
    case 'SET_POKEMON_NAME': {
      return {
        ...state,
        pokemonName: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
