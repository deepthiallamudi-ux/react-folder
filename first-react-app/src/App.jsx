// import Student from "./props.jsx";
// function App() {
//   return (
//     <div className="App">
//       <Student name="Alice" age={20} isStudent={true} />
//       <Student name="Bob" age={22} isStudent={false} />
//       <Student name="Charlie" age={19} isStudent={true} />
//       <Student name="Diana" age="21" isStudent={false} />
//     </div>
//   );
// }


// export default App;
// // read only properties
// //shared components
// //parent to child data flow

import UseStateEx from "./class-notes/useState.jsx";
import Styling from "./class-notes/styling.jsx";
import Card from "./class-notes/card.jsx";
import List from "./class-notes/list.jsx";
import Todo from "./class-notes/todo.jsx";
import Cleanup from "./class-notes/cleanup.jsx";
import UseEffects from "./class-notes/useEffect.jsx";
import UseRef from "./class-notes/useref.jsx";
import ComponentA from './class-notes/propdrill/ComponentA.jsx';

function Parent() {
  const msg = "Hello from Parent";
  return <div>
<A msg={msg} />
  </div>;
}
function A({msg}) {
  return <div>
    <B msg={msg} />
  </div>;
}
function B({msg}) {
  return <C msg={msg} />;
}
function C({msg}) {
  return <p>msg={msg}</p>;
}


function App() {
  return (
    <>
     <div className="App">
      {/* <Styling />
       <Card />
       <List />
       <Todo />
  <UseEffects />
    <Cleanup/> 
    <UseRef/>
    <Parent/> */}
    <ComponentA />
     <UseStateEx />
     </div>
    </>
  );

}
export default App;
