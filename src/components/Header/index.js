import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

// == actions
import { TOGGLE_THEME, SYNC_INPUT, SET_FILTER_POKEMON } from '../../store/actions';

// == styles
import './styles.scss';
// eslint-disable-next-line import/order
import {
  Segment,
  Input,
  Radio,
  Icon,
} from 'semantic-ui-react';


const Header = () => {
  // == redux
  const dispatch = useDispatch();
  const { inputValue, pokemons, theme } = useSelector((state) => state);
  // const inputValue = useSelector((state) => state.inputValue);
  // const pokemons = useSelector((state) => state.pokemons);
  // const theme = useSelector((state) => state.theme);

  const filterPokemon = pokemons.filter((pokemon) => pokemon.name.indexOf(inputValue) !== -1);


  const handleChange = (evt) => {
    dispatch({ type: SYNC_INPUT, input: evt.target.value });
    dispatch({ type: SET_FILTER_POKEMON, payload: filterPokemon });
  };

  const handleThemeChange = (evt) => {
    dispatch({ type: TOGGLE_THEME });
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
