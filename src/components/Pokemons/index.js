import React from 'react';

import { useSelector } from 'react-redux';

import { Card, Image } from 'semantic-ui-react';

import fetchPokemon from '../../utils/api2';

// == style
import './styles.scss';


const Pokemons = () => {
  const imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  const endUrl = '.png';
  const pokemons = useSelector((state) => state.pokemons);
  const listPokemonsJSX = pokemons.map((pokemon, index) => (

    <Card
      key={pokemon.name}
      data-key={pokemon.url}
      onClick={() => {
        fetchPokemon(pokemon.url);
      }}
    >
      <Image src={imgUrl + (index + 1) + endUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Description>
          {'#'} {index + 1}  {pokemon.name}
        </Card.Description>
      </Card.Content>
    </Card>
  ));


  return (
    <Card.Group itemsPerRow={6} stackable>
      {listPokemonsJSX}
    </Card.Group>
  );
};


export default Pokemons;
