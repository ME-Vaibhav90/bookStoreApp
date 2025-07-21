import React from 'react'
import Home from './Home/Home';
import { Route, Routes } from "react-router-dom"
import Courses from "./courses/Courses";  
import Signup from "./components/Signup";  
import Login from "./components/login";

function App() {
  return (  
    <>
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path='/' element={<Home />}></Route>
         <Route path='/Course' element={<Courses />}></Route>
         <Route path='/Signup' element={<Signup />}></Route>
          <Route path='/Login' element={<Login />}></Route> 
      </Routes>
      </div>
    </>
  );
}

export default App