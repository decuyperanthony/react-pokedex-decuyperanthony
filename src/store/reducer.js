const initialState = {
  inputValue: '',
  loading: false,
  next_url: '',
  pokemonsFiltered: [],
  pokemons: [],
  pokemon: {},
};


export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_POKEMONS': {
      return {
        ...state,
        pokemons: [...state.pokemons, ...action.payload],
        loading: true,
      };
    }
    case 'SET_NEXT_URL': {
      return {
        ...state,
        loading: false,
        next_url: action.payload,
      };
    }
    case 'SET_POKEMON': {
      const pokemon = action.payload;
      return {
        ...state,
        pokemon,
      };
    }
    case 'SYNC_INPUT': {
      const { input } = action;
      return {
        ...state,
        inputValue: input,
      };
    }
    default: {
      return state;
    }
  }
};
