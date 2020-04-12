import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';

// == style
import './styles.scss';

const POKE_API = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20';


const Pokemons = () => {
  const dispatch = useDispatch();

  const fetchInApi = (url = POKE_API) => {
    const promise = axios.get(
      url,
    );
    promise.then((response) => {
      console.log('response.data', response.data);
      dispatch({ type: 'SET_POKEMONS', payload: response.data.results });
      dispatch({ type: 'SET_NEXT_URL', payload: response.data.next });
    });
  };

  useEffect(fetchInApi, []);

  console.log('Pokemons');

  const pokemons = useSelector((state) => state.pokemons);
  const nextUrl = useSelector((state) => state.next_url);
  console.log('pokemons', pokemons);
  const listPokemonsJSX = pokemons.map((pokemon, index) => <li key={pokemon.name}><div>{index + 1} : {pokemon.name}</div></li>);
  pokemons.map((pokemon, index) => {
    console.log('pokemon', pokemon);
    console.log('index', index + 1);
  });

  const handleClick = () => {
    fetchInApi(nextUrl);
  };

  return (
    <div>
      <h2>Liste des Pokemons</h2>
      <ul> {listPokemonsJSX}
      </ul>
      <button type="button" onClick={handleClick}>next
      </button>
    </div>
  );
};

export default Pokemons;
