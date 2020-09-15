import React, { Component } from 'react';
import Content from './content';
import Nav from './nav';

export default class Right extends Component {
  render() {
    return (
      <right {...this.props}>
        <Nav/>
        <Content/>
      </right>
    );
  }
};