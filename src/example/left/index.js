import React, { Component } from 'react';
import Hydratable from '../../loadable/hydratable';

export default Hydratable({
    tag: 'left',
    loader: () => import(/* webpackChunkName: `left` */ './Left.js')
})
