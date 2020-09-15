import React, { Component } from 'react';
import Env from '../../../app/Env';

export default class Nav extends Component {
  render() {
    return (
      <nav {...this.props}>
          <Env/>
      </nav>
    );
  }
};