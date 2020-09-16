import React, { Component } from 'react';
import Hydratable from '../../../loadable/hydratable';

export default Hydratable({
    tag: 'sidebar',
    loader: () => import(/* webpackChunkName: `nav` */ './Sidebar.js')
})

