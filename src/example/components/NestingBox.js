import React, { useMemo } from 'react';

import Loadable from '../../loadable';
import Hydratable from '../../loadable/hydratable';

import COLOR_LIST from '../utils/color';

const EMPTY_HTML = {__html: ''}
const MAX_DEPTH = 5;
const isNodejs = (process.on !== process.off);

const AsyncCompFn = () => new Promise((resolve) => {
  const sleep = 1000 * Math.random();
  setTimeout(() => {
    resolve(NestingBox);
  }, sleep);
});

const HydratableCompList = [];
const LoadableCompList = [];

export default function NestingBox (props) {
  const { level, flag, children, ...rest } = Object.assign({ level: 0, flag: 0 }, props);

  if (level > MAX_DEPTH) {
    return children;
  }

  HydratableCompList.push([
    Hydratable({
      tag: `div`,
      loader: AsyncCompFn
    }),
    Hydratable({
      tag: `div`,
      loader: AsyncCompFn
    })
  ]);

  LoadableCompList.push([
    Loadable({
      loading: () => <div suppressHydrationWarning dangerouslySetInnerHTML={EMPTY_HTML} />,
      loader: AsyncCompFn
    }),
    Loadable({
      loading: () => <div suppressHydrationWarning dangerouslySetInnerHTML={EMPTY_HTML} />,
      loader: AsyncCompFn
    })
  ]);

  const [FirstComp, SecondComp] = [HydratableCompList, LoadableCompList][flag][level];

  return (
    <div {...rest}>
      <div style={{
        // width: level ? 'initial' : '50%',
        flexDirection: level % 2 ? 'column' : 'row',
        backgroundColor: COLOR_LIST[level],
      }}>
        <FirstComp level={level + 1} flag={flag} children={children}/>
        <SecondComp level={level + 1} flag={flag} children={children}/>
      </div>
    </div>
  );
}