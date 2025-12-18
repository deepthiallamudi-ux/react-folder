
import React from 'react';  
import {Link} from 'react-router-dom';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './routing/Home.jsx';
import About from './routing/About.jsx';
import Todos from './routing/Todos.jsx';
import NotFound from './routing/notFound.jsx';
// import Toggle from './toggle.jsx';
// import Colorchange from './colorchange.jsx';
//  import IterateFetch from './iteration&Fetch.jsx';
 import UserData from './useData.jsx';
// function app(){
//   return(
//     <div>
//       <IterateFetch/>
//       <Toggle/>
//       <Colorchange/>
//     </div>
//   )
// }

function App() {
  return(
    <>
    {/* <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/todos' element={<Todos/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter> */}
    {/* <IterateFetch/> */}
<UserData/>
    </>
  ) 
}

 export default App;