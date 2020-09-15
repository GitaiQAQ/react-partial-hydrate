import React, { Component } from 'react';
import Loadable from '../loadable';
import hydtationHTML from '../loadable/hydrationManager';

export default Loadable({
    id: 'example',
    loading: () => <example suppressHydrationWarning dangerouslySetInnerHTML={hydtationHTML('example')} />,
    loader: () => import(/* webpackChunkName: `example` */ './Example.js'),
})

