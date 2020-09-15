import React, { Component } from 'react';
import Env from '../../../app/Env';

export default class Sidebar extends Component {
  render() {
    return (
      <sidebar {...this.props}>
        <Env/>
      </sidebar>
    );
  }
};