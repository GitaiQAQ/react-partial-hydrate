import React, { Component } from 'react';
import Hydratable from '../loadable/hydratable';

export default Hydratable({
    tag: 'example',
    loader: () => import(/* webpackChunkName: `example` */ './Example.js')
})

