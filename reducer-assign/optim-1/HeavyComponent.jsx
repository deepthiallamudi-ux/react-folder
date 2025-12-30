import React from 'react';

const HeavyComponent = () => {
  console.log('HeavyComponent rendered');

  const items = [];
  for (let i = 0; i < 100; i++) {
    items.push(<div key={i}>Heavy Item {i + 1}</div>);
  }

  return (
    <div>
      <h2>Heavy Component</h2>
      <p>Lazy loaded and memoized with React.memo</p>
      <div style={{ maxHeight: '300px', overflow: 'auto' }}>
        {items}
      </div>
    </div>
  );
};

export default React.memo(HeavyComponent);
