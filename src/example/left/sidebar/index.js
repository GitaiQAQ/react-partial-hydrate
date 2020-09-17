import React, { Component } from 'react';
import Hydratable from '../../../loadable/hydratable';

const isNodejs = process.on !== process.off;

export default Hydratable({
    tag: 'sidebar',
    loader: () => new Promise((resolve) => {
        setTimeout(() => {
            import(/* webpackChunkName: `sidebar` */ './Sidebar.js').then(resolve)
        }, isNodejs ? 2000 : 0);
    })
})