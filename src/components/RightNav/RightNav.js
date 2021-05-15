import React from 'react';
import {
  Ul,
  Item
} from './RightNavStyle';
const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Item exact to="/">Home</Item>
      <Item to="/events">Events</Item>
    </Ul>
  )
}

export default RightNav;