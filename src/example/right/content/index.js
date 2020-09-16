import React, { Component } from 'react';
import Loadable from '../../../loadable';

const EMPTY_HTML = {__html: ''}

export default Loadable({
    loading: () => <content suppressHydrationWarning dangerouslySetInnerHTML={EMPTY_HTML} />,
    loader: () => import('./Content.js'),
})

