import React, { Component } from 'react';
import Loadable from '../loadable';

const EMPTY_HTML = {__html: ''}

export default Loadable({
    id: 'example',
    loading: () => <example suppressHydrationWarning dangerouslySetInnerHTML={EMPTY_HTML} />,
    loader: () => import(/* webpackChunkName: `example` */ './Example.js'),
})

