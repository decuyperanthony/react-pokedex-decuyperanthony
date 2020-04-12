import React from 'react';

import { useSelector } from 'react-redux';

import { Card, Icon, Image } from 'semantic-ui-react';

// == style
import './styles.scss';


const Pokemon = () => {
  console.log('pokemon');
  const imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  const endUrl = '.png';
  const pokemons = useSelector((state) => state.pokemons);

  const listPokemonsJSX = pokemons.map((pokemon, index) => (

    <Card key={pokemon.name}>
      <Image src={imgUrl + (index + 1) + endUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header>#{index + 1}  {pokemon.name}</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 amis
        </a>
      </Card.Content>
    </Card>

  ));


  return (
    <Card.Group itemsPerRow={3} stackable>
      {listPokemonsJSX}
    </Card.Group>
  );
};


export default Pokemon;
