import React, { Component } from 'react';
import Nav from './nav';
import Sidebar from './sidebar';

export default class Left extends Component {
  render() {
    return (
      <left>
        <Nav/>
        <Sidebar/>
      </left>
    );
  }
};