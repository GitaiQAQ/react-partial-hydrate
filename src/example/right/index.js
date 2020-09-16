import React, { Component } from 'react';
import Loadable from '../../loadable';

const EMPTY_HTML = {__html: ''}

export default Loadable({
    loading: () => <right suppressHydrationWarning dangerouslySetInnerHTML={EMPTY_HTML} />,
    loader: () => import(/* webpackChunkName: `right` */ './Right.js'),
})

