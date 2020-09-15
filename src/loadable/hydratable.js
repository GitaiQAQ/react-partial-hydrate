import React from 'react';
import Loadable from './index';
import hydtationHTML from './hydrationManager';

export default function (opts) {
    return Loadable({
        ...opts,
        loading: () => React.createElement(opts.tag, {
            suppressHydrationWarning: true,
            dangerouslySetInnerHTML: hydtationHTML(opts.id)
        }),
        render(mods, props) {
            const DefaultMod = mods.default;
            return <DefaultMod hydratable={opts.id} {...props}/>
        }
    })
}