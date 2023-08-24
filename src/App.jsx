import { useState } from 'react'
import Navbar from "./Navbar"
import './style.css';
import {  BrowserRouter as Router} from "react-router-dom";
import Sidebar from "./Sidebar";
import Burger from './Burger';


function App() {
   const[sidebar,setSidebar]=useState(false);

  const showSidebar=() =>setSidebar(!sidebar);

  return (
    <>
      <Router>
        <Burger/>
        <Navbar/>
        <Sidebar className={sidebar}/>
      </Router>
    </>
  )
}

export default App
