// == Import npm
import React, { useEffect } from 'react';

import fetchInApi from '../../utils/api';


// == Import
import Header from '../Header/index';
import Main from '../Main/index';
import PokemonDetails from '../PokemonDetails/index';


import './styles.css';

// == Composant
const App = () => {
  useEffect(fetchInApi, []);
  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <Main />
        <PokemonDetails />
      </div>
    </div>
  );
};


// == Export
export default App;
