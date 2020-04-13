const initialState = {
  loading: false,
  next_url: '',
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
    default: {
      return state;
    }
  }
};
