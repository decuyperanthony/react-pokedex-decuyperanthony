const initialState = {
  next_url: '',
  pokemons: [],
  pokemonUrl: '',
  pokemon: [],
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
    case 'SET_POKEMON_URL': {
      return {
        ...state,
        pokemonUrl: action.payload,
      };
    }
    case 'SET_POKEMON': {
      return {
        ...state,
        pokemon: [...action.payload],
      };
    }
    default: {
      return state;
    }
  }
};
