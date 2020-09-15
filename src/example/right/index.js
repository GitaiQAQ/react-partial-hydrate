import React, { Component } from 'react';
import Loadable from '../../loadable';

export default Loadable({
    id: 'right',
    loading: () => null,
    loader: () => import(/* webpackChunkName: `right` */ './Right.js'),
})

