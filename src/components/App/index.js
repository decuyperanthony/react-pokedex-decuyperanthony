// == Import npm
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';


import fetchInApi from '../../utils/api';


// == Import
import Header from '../Header/index';
import Main from '../Main/index';
import PokemonDetails from '../PokemonDetails/index';


import './styles.css';

// == Composant
const App = () => {
  useEffect(fetchInApi, []);
  const pokemondetails = useSelector((state) => state.pokemondetails);
  let pokemonDetailsJSX = '';
  // si le client clique sur un pokemon cela me remplit l'objet pokemon
  // et declenche l'ouverture de la section Pokemon Details
  if (pokemondetails) {
    pokemonDetailsJSX = <PokemonDetails />;
  }

  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <Main />
        {pokemonDetailsJSX}
      </div>
    </div>
  );
};


// == Export
export default App;
