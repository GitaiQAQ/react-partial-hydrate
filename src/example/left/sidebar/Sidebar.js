import React, { Component } from 'react';
import Env from '../../../app/Env';
import Item from './item';

export default class Sidebar extends Component {
  render() {
    return (
      <sidebar {...this.props}>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </sidebar>
    );
  }
};