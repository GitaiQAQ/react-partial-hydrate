import React, { Component } from 'react';
import Loadable from '../../../loadable';

export default Loadable({
    id: 'right-nav',
    loading: () => null,
    loader: () => import('./Nav.js'),
})