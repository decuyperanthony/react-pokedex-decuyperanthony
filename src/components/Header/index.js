import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

// == styles
import './styles.scss';
import {
  Segment, Input, Radio, Icon,
} from 'semantic-ui-react';


const Header = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.inputValue);
  const pokemons = useSelector((state) => state.pokemons);
  const theme = useSelector((state) => state.theme);

  // const pokemons = useSelector((state) => state.pokemons);
  // const inputValue = useSelector((state) => state.inputValue);
  const filterPokemon = pokemons.filter((pokemon) => pokemon.name.indexOf(inputValue) !== -1);


  const handleChange = (evt) => {
    dispatch({ type: 'SYNC_INPUT', input: evt.target.value });
    dispatch({ type: 'SET_FILTER_POKEMON', payload: filterPokemon });
  };

  const handleThemeChange = (evt) => {
    console.log('evtInToggleThemeChange', evt.currentTarget);
    dispatch({ type: 'TOGGLE_THEME' });
  };


  return (
    <Segment inverted={theme} className="header">
      <div>
        <Input
          value={inputValue}
          inverted={theme}
          placeholder="Search..."
          onChange={handleChange}
        />
      </div>
      <div className="container-toggle-theme">
        <Radio toggle onChange={handleThemeChange} />
        <Icon name="lightbulb" />
      </div>
    </Segment>
  );
};


export default Header;
