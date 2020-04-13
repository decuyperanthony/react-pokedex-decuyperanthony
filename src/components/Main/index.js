import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { Segment, Button } from 'semantic-ui-react';
import fetchInApi from '../../utils/api';

// == Import Component
import Pokemons from '../Pokemons/index';

// == style
import './styles.scss';


const Main = () => {
  const loading = useSelector((state) => state.loading);
  const nextUrl = useSelector((state) => state.next_url);
  const handleClick = () => {
    fetchInApi(nextUrl);
  };

  return (
    <Segment className="main">
      <h2>Liste des Pokemons</h2>
      <Pokemons />
      <Button loading={loading} type="button" onClick={handleClick}>next
      </Button>
    </Segment>
  );
};

export default Main;
