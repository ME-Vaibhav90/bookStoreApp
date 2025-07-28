import React from 'react'
import Home from './Home/Home';
import { Navigate , Route, Routes } from "react-router-dom"
import Courses from "./courses/Courses";  
import Signup from "./components/Signup";  
import Login from "./components/login";
import {Toaster} from 'react-hot-toast';
import {useAuth} from './context/AuthProvider.jsx'
import Contact from './components/Contact.jsx'; 



function App() {
  
   const{authUser,loading} = useAuth()
   console.log(authUser);  
   const ProtectedRoute = ({ children }) => {
    if (loading) return <div>Loading...</div>;    // ✅ only delay if needed
    return authUser ? children : <Navigate to="/signup" />;
  };
      
       

  return (  
    <>
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path='/' element={<Home />}></Route>
         {/* <Route path='/course' element={ authUser?< Courses />:<Navigate to="/signup"></Navigate>}></Route> */}
        
        
        <Route path="/Course" element={
          <ProtectedRoute>
            <Courses />
          </ProtectedRoute>
        } />

         <Route path="/contact" element={<Contact />} /><Route />
         <Route path='/signup' element={<Signup />}></Route>
          <Route path='/Login' element={<Login />}></Route> 
          {/* <Route path='/Logout' element={<Logout />}></Route> */}
      </Routes>
        <Toaster  reverseOrder={false} />
      {/* ... other components */}
      </div>
    </>
  );
}

export default App