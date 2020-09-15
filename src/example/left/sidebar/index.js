import React, { Component } from 'react';
import Loadable from '../../../loadable';

export default Loadable({
    id: 'sidebar',
    loading: () => null,
    loader: () => import('./Sidebar.js'),
})

