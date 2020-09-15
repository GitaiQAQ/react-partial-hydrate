import React, { Component } from 'react';
import Content from './content';
import Nav from './nav';

export default class Right extends Component {
  render() {
    return (
      <right>
        <Nav/>
        <Content/>
      </right>
    );
  }
};