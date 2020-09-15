import React, { Component } from 'react';
import Loadable from '../../../loadable';

const EMPTY_HTML = {__html: ''}

export default Loadable({
    id: 'right-nav',
    loading: () => <nav suppressHydrationWarning dangerouslySetInnerHTML={EMPTY_HTML} />,
    loader: () => import('./Nav.js'),
})