import React from 'react';

import { useSelector } from 'react-redux';

import { Segment, Button } from 'semantic-ui-react';
import fetchInApi from '../../utils/api';

// == Import Component
import Pokemons from '../Pokemons/index';
// import Pokemonss from '../TestPokemonInput/index';

// == style
import './styles.scss';


const Main = () => {
  const loading = useSelector((state) => state.loading);
  const nextUrl = useSelector((state) => state.next_url);
  const theme = useSelector((state) => state.theme);

  const handleClick = () => {
    fetchInApi(nextUrl);
  };

  return (
    <Segment className="main" inverted={theme}>
      <h2>Liste des Pokemons</h2>
      <Pokemons />
      <Button loading={loading} type="button" onClick={handleClick}>next
      </Button>
      {/* <Pokemonss /> */}
    </Segment>
  );
};

export default Main;
