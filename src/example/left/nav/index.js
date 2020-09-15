import React, { Component } from 'react';
import Hydratable from '../../../loadable/hydratable';

export default Hydratable({
    tag: 'nav',
    id: 'lnav',
    loader: () => import(/* webpackChunkName: `nav` */ './Nav.js')
})

