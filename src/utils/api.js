import axios from 'axios';
import store from '../store/index';

const POKE_API = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151';


const fetchInApi = (url = POKE_API) => {
  const promise = axios.get(
    url,
  );
  promise.then((response) => {
    store.dispatch({ type: 'SET_POKEMONS', payload: response.data.results });
    // store.dispatch({ type: 'SET_NEXT_URL', payload: response.data.next });
  });
};

export default fetchInApi;
