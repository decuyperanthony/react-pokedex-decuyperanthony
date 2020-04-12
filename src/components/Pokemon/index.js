import React from 'react';

import { useSelector } from 'react-redux';

import { Card, Icon, Image } from 'semantic-ui-react';
// import fetchInApi from '../../../public/img/';

// == style
import './styles.scss';

const Pokemon = () => {
  console.log('pokemon');
  const pokemons = useSelector((state) => state.pokemons);
  const listPokemonsJSX = pokemons.map((pokemon, index) => (
    <li key={pokemon.name}>
      <Card>
        <Image src={`../../../public/img/${index + 1}.png`} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{index + 1} : {pokemon.name}</Card.Header>
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
            22 Friends
          </a>
        </Card.Content>
      </Card>
    </li>
  ));


  return (
    <div>my card
      {listPokemonsJSX}
    </div>
  );
};

// return (

// );

export default Pokemon;
