import React, { Component } from 'react';
import Loadable from '../../../loadable';
import hydtationHTML from '../../../loadable/hydrationManager';

export default Loadable({
    id: 'sidebar',
    loading: () => <sidebar suppressHydrationWarning dangerouslySetInnerHTML={hydtationHTML('sidebar')} />,
    loader: () => import('./Sidebar.js'),
    render: (mods, props) => {
        const Sidebar = mods.default;
        return <Sidebar hydratable="sidebar"/>
    }
})

