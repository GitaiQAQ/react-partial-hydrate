import React from 'react';
import { hydrate } from 'react-dom';
import { App } from './index';

setTimeout(() => {
  hydrate(
    <App/>,
    document.getElementById('root')
  );
}, 1000);