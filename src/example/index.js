import React, { Component } from 'react';
import Loadable from '../loadable';

export default Loadable({
    id: 'example',
    loading: () => null,
    loader: () => import(/* webpackChunkName: `example` */ './Example.js'),
})

