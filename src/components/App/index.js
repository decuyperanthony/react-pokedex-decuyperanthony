// == Import npm
import React from 'react';


// == Import
import Header from '../Header/index';
import Pokemons from '../Pokemons/index';


import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Pokemons />
  </div>
);

// == Export
export default App;
