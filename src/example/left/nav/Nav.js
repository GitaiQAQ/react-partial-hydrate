import React, { Component } from 'react';
import Env from '../../../app/Env';
import Item from './item';

export default class Nav extends Component {
  render() {
    return (
      <nav {...this.props}>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
      </nav>
    );
  }
};