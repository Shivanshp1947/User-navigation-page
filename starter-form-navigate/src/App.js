import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {

  const [isLoggedIn,setIsLoggedIn] = useState(false)
  return(
      <div className="w-screen h-screen bg-slate-800 ">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>     

        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>}/>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path="/dashboard" element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard/>
            </PrivateRoute>
          }/>
        </Routes>
      </div>
    );
};

export default App;
