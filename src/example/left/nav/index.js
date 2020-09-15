import React, { Component } from 'react';
import Loadable from '../../../loadable';

export default Loadable({
    id: 'left-nav',
    loading: () => null,
    loader: () => import('./Nav.js'),
})