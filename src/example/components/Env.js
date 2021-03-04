import React from 'react';

import COLOR_LIST from '../utils/color';

export default function Env () {
    return <div style={{
        backgroundColor: COLOR_LIST[1]
      }}>
        {(process.on !== process.off) ? 'Node' : 'Browser'}
    </div>;
}
