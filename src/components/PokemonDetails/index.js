import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

// == styles
import './styles.scss';
import {
  Segment, Card, Icon, Image, Button,
} from 'semantic-ui-react';


const PokemonDetails = () => {
  // == state
  const pokemon = useSelector((state) => state.pokemon);
  const loading = useSelector((state) => state.loading);
  const theme = useSelector((state) => state.theme);

  const dispatch = useDispatch();
  // const PokemonDetails = useSelector((state) => state.PokemonDetails);


  // == pictures
  const pictureFront = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  const pictureBack = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`;
  const pictureShinyFront = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`;
  const pictureShinyBack = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${pokemon.id}.png`;
  // == types
  const { types } = pokemon;
  let typeButton = '';
  if (types !== undefined) {
    typeButton = types.map((e) => {
      const type = e.type.name;
      let color = '';
      switch (type) {
        case 'fire':
          color = 'orange';
          break;
        case 'grass':
          color = 'green';
          break;
        case 'flying':
          color = 'grey';
          break;
        case 'poison':
          color = 'brown';
          break;
        case 'water':
          color = 'blue';
          break;
        case 'bug':
          color = 'teal';
          break;
        default:
          color = 'black';
      }
      return (<Button color={color}>{type}</Button>);
    });
  }

  const handleClick = () => {
    console.log('il a cliqué');
    dispatch({ type: 'CLOSE_POKEMONDETAILS_CONTAINER' });
  };

  return (
    <Segment
      loading={loading}
      className="pokemon-details"
      inverted={theme}
    >
      <Icon link name="close" onClick={handleClick} />
      Pokemon details
      <Card className="container-details-pokemon" inverted={theme}>
        <div className="container-picture">
          <Image src={pictureFront} wrapped ui={false} />
          <Image src={pictureBack} wrapped ui={false} />
          <Image src={pictureShinyFront} wrapped ui={false} />
          <Image src={pictureShinyBack} wrapped ui={false} />
        </div>
        <Card.Content>
          <Card.Header> {pokemon.id} {pokemon.name} </Card.Header>
          <Card.Meta>
            <span className="date">weight : {pokemon.weight} pound height : {pokemon.height} inch</span>
          </Card.Meta>
          <Card.Description>
            {pokemon.name} is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon />
            {typeButton}
          </a>
        </Card.Content>
      </Card>
    </Segment>
  );
};


export default PokemonDetails;
