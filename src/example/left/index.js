import React, { Component } from 'react';
import Loadable from '../../loadable';

export default Loadable({
    id: 'left',
    loading: () => null,
    loader: () => import(/* webpackChunkName: `left` */ './Left.js'),
})

