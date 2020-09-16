import React, { Component } from 'react';
import Hydratable from '../../../loadable/hydratable';

export default Hydratable({
    tag: 'nav',
    loader: () => import(/* webpackChunkName: `nav` */ './Nav.js')
})

