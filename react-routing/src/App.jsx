import React, {useState} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Login from "./Login";
// import NotFound from "./notFound";
// import User from "./use.jsx"; 
import Dashboard from "./routing2/dashboard.jsx";
import Login from "./routing2/login.jsx";
import { isAuthenticated } from "./auth.jsx";
import Home from "./routing2/login.jsx";
import ProtectedRoute from "./routing2/protectRoute.jsx";

function App() {
  // const [page, setPage] = useState("Home");
  return(
    // <div>
    //   <button onClick={() => setPage("Home")}>Home</button>
    //   <button onClick={() => setPage("About")}>About</button>
    //   <button onClick={() => setPage("Login")}>Login</button>
    //   {page === "Home" && <h1>Welcome to the Home Page</h1>}
    //   {page === "About" && <h1>Welcome to the About Page</h1>}
    // above line of code means if page is equal to "About" then only render the h1 tag
    //   {page === "Login" && <h1>Welcome to the Login Page</h1>}
    //   </div>
    // <BrowserRouter>
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/about" element={<About />} />
    //   <Route path="/login" element={<Login />} />
    //   <Route path="*" element={<NotFound />} />
    //   <Route path="/user" element={<User />} />
    //   <Route path="/user/:id" element={<User />} />
    // </Routes>
    // </BrowserRouter>


    <BrowserRouter>
    <nav>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={
        // isAuthenticated() ? <Dashboard /> : <Login />
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
    </Routes>
</BrowserRouter>
  )
}
export default App;

// single page application means that the page does not reload when we navigate between different sections of the app. Instead, the content is dynamically updated based on user interactions, such as clicking buttons or links. In this example, clicking the buttons updates the state variable 'page', which in turn changes the displayed content without reloading the entire page.

// In this example, we have three buttons: Home, About, and Login. When a button is clicked, the state variable 'page' is updated to reflect the selected page. The content displayed below the buttons changes based on the value of 'page', allowing users to navigate between different sections of the app without a full page reload.

// routing is the process of determining which content to display based on user interactions or URL changes. it is used when building single-page applications (SPAs) to manage navigation between different views or components without reloading the entire page.
// <routes> its a container for all the <route> components. it defines the routing structure of the application.

// <route> it defines a single route within the application. it specifies the path and the component to be rendered when that path is accessed. 

// protected route means that certain routes or pages within an application are restricted and can only be accessed by authorized users. typically, this involves checking if a user is authenticated (logged in) before allowing access to specific routes. if the user is not authenticated, they are usually redirected to a login page or shown an error message. protected routes are commonly used in applications that require user authentication to ensure that sensitive information or functionalities are only accessible to authorized users.