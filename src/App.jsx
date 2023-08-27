import Navbar from "./Navbar"
import './style.css';
import {  BrowserRouter as Router} from "react-router-dom";
import Sidebar from "./Sidebar";



function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Sidebar/>
      </Router>
    </>
  )
}

export default App
