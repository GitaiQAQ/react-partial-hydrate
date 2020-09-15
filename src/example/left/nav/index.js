import React, { Component } from 'react';
import Loadable from '../../../loadable';
import hydtationHTML from '../../../loadable/hydrationManager';

export default Loadable({
    id: 'left-nav',
    loading: () => <nav suppressHydrationWarning dangerouslySetInnerHTML={hydtationHTML('left-nav')} />,
    loader: () => import('./Nav.js'),
    render: (mods, props) => {
        const Nav = mods.default;
        return <Nav hydratable="left-nav"/>
    }
})