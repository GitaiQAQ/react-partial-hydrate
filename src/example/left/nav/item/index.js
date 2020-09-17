import React, { Component } from 'react';
import Hydratable from '../../../../loadable/hydratable';

export default Hydratable({
    tag: 'item',
    loader: () => new Promise((resolve) => {
        setTimeout(() => {
            import(/* webpackChunkName: `nav` */ './Item.js').then(resolve)
        }, 2000);
    })
})

