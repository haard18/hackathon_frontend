import React from "react";
import Home from "./Components/Home";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import Form from "./comp/Form";
import Navbar from './Components/Navbar'
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
export default function App() {
  return (
    <div className="App">
      
       <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        </Routes>
          
       </Router>
    </div>
  );
}
