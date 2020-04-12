import React from 'react';

import { useSelector } from 'react-redux';

// == styles
import './styles.scss';
import { Segment } from 'semantic-ui-react';


const Header = () => {
  const pokemon = useSelector((state) => state.pokemon);
  pokemon.map((e) => {
    console.log('e', e);
  });
  return (
    <Segment><header>Header {pokemon}</header></Segment>
  );
};


export default Header;
