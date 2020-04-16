import {
  SET_POKEMONS,
  SET_FILTER_POKEMON,
  SET_POKEMON,
  SYNC_INPUT,
  TOGGLE_THEME,
  CLOSE_POKEMONDETAILS_CONTAINER,
} from './actions';

const initialState = {
  inputValue: '',
  theme: false,
  loading: false,
  pokemondetails: false,
  pokemonsFiltered: [],
  pokemons: [],
  pokemon: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_POKEMONS: {
      return {
        ...state,
        pokemons: [...state.pokemons, ...action.payload],
        pokemonsFiltered: [...state.pokemons, ...action.payload],
        // loading: true,
      };
    }
    case SET_FILTER_POKEMON: {
      return {
        ...state,
        pokemonsFiltered: [...action.payload],
      };
    }
    case SET_POKEMON: {
      const pokemon = action.payload;
      return {
        ...state,
        pokemon,
        pokemondetails: true,
      };
    }
    case SYNC_INPUT: {
      const { input } = action;
      return {
        ...state,
        inputValue: input,
      };
    }
    case TOGGLE_THEME: {
      const toggleTheme = !state.theme;
      return {
        ...state,
        theme: toggleTheme,
      };
    }
    case CLOSE_POKEMONDETAILS_CONTAINER: {
      return {
        ...state,
        pokemondetails: false,
      };
    }
    default: {
      return state;
    }
  }
};
