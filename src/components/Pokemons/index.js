import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { Segment } from 'semantic-ui-react';
import fetchInApi from '../../utils/api';

// == Import Component
import Pokemon from '../Pokemon/index';

// == style
import './styles.scss';


const Pokemons = () => {
  const nextUrl = useSelector((state) => state.next_url);
  const handleClick = () => {
    fetchInApi(nextUrl);
  };

  return (
    <Segment>
      <h2>Liste des Pokemons</h2>
      <Pokemon />
      <button type="button" onClick={handleClick}>next
      </button>
    </Segment>
  );
};

export default Pokemons;
