import React, { Component } from 'react';
import Loadable from '../../loadable';
import hydtationHTML from '../../loadable/hydrationManager';

export default Loadable({
    id: 'left',
    loading: () => <left suppressHydrationWarning dangerouslySetInnerHTML={hydtationHTML('left')} />,
    loader: () => import(/* webpackChunkName: `left` */ './Left.js'),
    render: (mods, props) => {
        const Left = mods.default;
        return <Left hydratable="left"/>
    }
})
