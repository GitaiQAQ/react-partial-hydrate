import React from 'react';
import Loadable from './index';
import hydtationHTML from './hydrationManager';

let num = 0;

export default function (opts) {
    const id = num++;
    return Loadable({
        ...opts,
        loading: () => React.createElement(opts.tag, {
            suppressHydrationWarning: true,
            dangerouslySetInnerHTML: hydtationHTML(id)
        }),
        render(mods, props) {
            const DefaultMod = mods.default;
            return <DefaultMod hydratable={id} {...props}/>
        }
    })
}