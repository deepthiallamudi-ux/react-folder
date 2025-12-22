import React from 'react';
import Component4 from './component4.jsx';

function Component3({ a, b, c, d, e, f }) {
  return (
    <div>
      <h4>This is prop a: {a}</h4>
      <h4>This is prop b: {b}</h4>
      <Component4 c={c} d={d} e={e} f={f} />
    </div>
  );
}

export default Component3;