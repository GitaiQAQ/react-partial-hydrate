import React, { Component } from 'react';
import Loadable from '../../../loadable';

export default Loadable({
    id: 'content',
    loading: () => null,
    loader: () => import('./Content.js'),
})

