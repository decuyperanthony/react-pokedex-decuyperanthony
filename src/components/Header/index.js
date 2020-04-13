import React from 'react';

import { useSelector } from 'react-redux';

// == styles
import './styles.scss';
import { Segment, Input } from 'semantic-ui-react';


const Header = () => (
  <Segment inverted><Input inverted placeholder="Search..." /> </Segment>
);


export default Header;
