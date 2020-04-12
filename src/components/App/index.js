// == Import npm
import React, { useEffect } from 'react';

import fetchInApi from '../../utils/api';


// == Import
import Header from '../Header/index';
import Pokemons from '../Pokemons/index';


import './styles.css';

// == Composant
const App = () => {
  useEffect(fetchInApi, []);
  return (
    <div className="app">
      <Header />
      <Pokemons />
    </div>
  );
};


// == Export
export default App;
