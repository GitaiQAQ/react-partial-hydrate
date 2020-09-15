import React, { Component } from 'react';
import Left from './left';
import Right from './right';
import Env from '../app/Env';

export default class Example extends Component {
  render() {
    return (
      <example>
        <Left/>
        <Right/>
      </example>
    );
  }
}
