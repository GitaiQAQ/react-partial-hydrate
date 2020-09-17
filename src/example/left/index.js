import React, { Component } from 'react';
import Hydratable from '../../loadable/hydratable';

export default Hydratable({
    tag: 'left',
    loader: () => new Promise((resolve) => {
        setTimeout(() => {
            import(/* webpackChunkName: `left` */ './Left.js').then(resolve)
        }, 2000);
    })
})
