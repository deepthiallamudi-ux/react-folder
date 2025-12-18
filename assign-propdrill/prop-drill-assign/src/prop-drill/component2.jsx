import React from 'react';
import Component3 from './component3.jsx';

function Component2(props) {
  return (
    <div>
      <Component3 {...props} />
    </div>
  );
}

export default Component2;