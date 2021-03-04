import React, { Component } from 'react';
import NestingBox from './components/NestingBox';
import Env from './components/Env';

export default class App extends Component {
  render() {
    return (
      <div style={{
        display: 'block'
      }}>
        <div style={{
          fontSize: '10em'
        }}>
          <div>
            Hydratable
          </div>
          <div>
            Loadable            
          </div>
        </div>
        <div>
          <NestingBox flag={0}>
            <Env/>
          </NestingBox>
          <NestingBox flag={1}>
            <Env/>
          </NestingBox>
        </div>
      </div>
    );
  }
}
