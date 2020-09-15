import React, { Component } from 'react';
import Loadable from '../../loadable';

const EMPTY_HTML = {__html: ''}

export default Loadable({
    id: 'left',
    loading: () => <left suppressHydrationWarning dangerouslySetInnerHTML={EMPTY_HTML} />,
    loader: () => import(/* webpackChunkName: `left` */ './Left.js'),
})

