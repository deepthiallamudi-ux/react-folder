import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './Pages/auth/login';
import SignUp from './Pages/auth/signUp';
import Chefboard from './chefSide/ChefBoard';


function App(){
    return (
  <>
        <Navbar/>
        <div className="min-h-screen">
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signUp" element={<SignUp/>}/>
            <Route path="/chefSide" element={<Chefboard/>}/>
          </Routes>
        </div>
        <Footer/>
      </>
    )
}

export default App;