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

// import useState from "./useState.jsx";
// function App() {
//   return (
//     <div className="App">
//       <useState />
//     </div>
//   );
// }
// export default App;
// import Styling from "./styling.jsx";
// import Card from "./card.jsx";
// import List from "./list.jsx";
// import Todo from "./todo.jsx";
// function App() {
//   return (
//     <div className="App">
//       <Styling />
//       <Card />
//       <List />
//       <Todo />
//     </div>
//   );
// }
// export default App;

// import Cleanup from "./cleanup.jsx";
// import Prop from "./propdrillong.jsx";
// import UseEffects from "./useEffect.jsx";
// import UseRef from "./useref.jsx";

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
  {/* <UseEffects />
    <Cleanup/> */}
    {/* <UseRef/> */}
    <Parent/>
    </>
  );

}
export default App;
