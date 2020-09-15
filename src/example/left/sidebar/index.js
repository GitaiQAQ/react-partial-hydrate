import React, { Component } from 'react';
import Loadable from '../../../loadable';

const EMPTY_HTML = {__html: ''}

export default Loadable({
    id: 'sidebar',
    loading: () => <sidebar suppressHydrationWarning dangerouslySetInnerHTML={EMPTY_HTML} />,
    loader: () => import('./Sidebar.js'),
})

