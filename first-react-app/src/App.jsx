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

// import Components from "./useState.jsx";
// function App() {
//   return (
//     <div className="App">
//       <Components />
//     </div>
//   );
// }
// export default App;
import Styling from "./styling.jsx";
import Card from "./card.jsx";
import List from "./list.jsx";
function App() {
  return (
    <div className="App">
      <Styling />
      <Card />
      <List />
    </div>
  );
}
export default App;