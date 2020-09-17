import React, { Component } from 'react';
import Env from '../../../../app/Env';

export default class Item extends Component {
  render() {
    return (
      <item {...this.props}>
          <Env/>
      </item>
    );
  }
};