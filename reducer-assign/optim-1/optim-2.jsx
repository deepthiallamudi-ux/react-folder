import React, { useState, lazy, Suspense } from 'react';

// Lazy load the heavy component
const HeavyComponent = lazy(() => import('./HeavyComponent'));

export const Optim2 = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div style={{ padding: '20px' }}>
      <h1>React.memo & Lazy Loading</h1>
      
      <div>
        <h2>Counter: {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>
          Increment Counter
        </button>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
};
