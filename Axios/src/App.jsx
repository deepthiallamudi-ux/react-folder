import Firebase from "./Axios-firebase";
import Zxiosfun from "./zxiosfun";




function App() {
  return (
    <div className="App">
      <h1>Axios Example</h1>
      {/* <Zxiosfun/> */}
      <Firebase/>
    </div>
  );

}

export default App;


// difference between put and patch is that put is used to update the entire resource whereas patch is used to update a part of the resource.

// Axios is a promise-based HTTP client for the browser and Node.js, used to make HTTP requests to interact with APIs. it is used instead of fetch because it provides a simpler and more intuitive API, automatic JSON data transformation, better error handling, and support for features like request cancellation and interceptors.
// drawbacks of axios are that it is a third-party library, which adds extra dependencies to your project, it can increase the bundle size, and it may not be as lightweight as the native fetch API for simple use cases.
// drewbacks of fetch are that it has a more complex API, requires manual JSON data transformation, has less intuitive error handling, and lacks support for features like request cancellation and interceptors.