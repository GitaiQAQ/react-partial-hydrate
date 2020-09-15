import React, { Component } from 'react';
import Env from '../../../app/Env';

export default class Content extends Component {
  render() {
    return (
      <content {...this.props}>
          <Env/>
      </content>
    );
  }
};