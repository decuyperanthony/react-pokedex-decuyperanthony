import axios from 'axios';
import store from '../store/index';

const fetchPokemon = (url) => {
  const promise = axios.get(url);
  promise.then((response) => {
    store.dispatch({ type: 'SET_POKEMON', payload: response.data });
  });
};

export default fetchPokemon;
