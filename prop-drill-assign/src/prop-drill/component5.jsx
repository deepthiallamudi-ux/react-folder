import React from 'react';
import Component6 from './component6.jsx';

function Component5({ e, f }) {
  return (
    <div>
      <h4>This is prop f: {f}</h4>
      <Component6 e={e} />
    </div>
  );
}

export default Component5;