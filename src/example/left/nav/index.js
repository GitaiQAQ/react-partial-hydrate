import React, { Component } from 'react';
import Hydratable from '../../../loadable/hydratable';

const isNodejs = process.on !== process.off;

export default Hydratable({
    tag: 'nav',
    loader: () => new Promise((resolve) => {
        setTimeout(() => {
            import(/* webpackChunkName: `nav` */ './Nav.js').then(resolve)
        }, isNodejs ? 0: 2000);
    })
})

