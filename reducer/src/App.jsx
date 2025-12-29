import React,{Suspense} from 'react';
import Loop from './performance';
import Counter from './reducer/counter';
import   { UseStateComponent }   from './reducer/useStateComponent';
import ParentComponent from './Reacr-memo/parentComponent';
import Count from   './countP';
const Layzee=React.lazy(()=>import('./Reacr-memo/Lazyload')) ;
  

function App() {
  return (
    <div className="App">
      <Loop/>
      <Counter/>
      <UseStateComponent/>
      <Count/>
      <ParentComponent/>
      <Suspense fallback={<div>Loading...</div>}>
        <Layzee/>
      </Suspense>

    </div>
  );
}

export default App;