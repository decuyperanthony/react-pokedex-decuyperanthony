import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Card, Image } from 'semantic-ui-react';

import fetchPokemon from '../../utils/api2';

// == style
import './styles.scss';


const Pokemons = () => {
  // const dispatch = useDispatch();
  const imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  const endUrl = '.png';
  const pokemons = useSelector((state) => state.pokemonsFiltered);

  //!
  const myUrl = (str) => Number((str.slice(-4, -1)).replace(/[^\d]/g, ''));


  const listPokemonsJSX = pokemons.map((pokemon, index) => (

    <Card
      key={pokemon.name}
      data-key={pokemon.url}
      onClick={() => {
        fetchPokemon(pokemon.url);
      }}
      className="card-container"
    >
      <Image src={imgUrl + myUrl(pokemon.url) + endUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Description>
          {'#'} {myUrl(pokemon.url)}  {pokemon.name}
        </Card.Description>
      </Card.Content>
    </Card>
  ));


  return (
    <Card.Group
      itemsPerRow={3}
      stackable
    >
      {listPokemonsJSX}
    </Card.Group>
  );
};


export default Pokemons;
