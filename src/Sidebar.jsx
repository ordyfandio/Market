import {FaUser,FaBars,FaTimes, FaAngleRight,FaGlobe, FaAngleDown} from 'react-icons/fa';
import { useState,useEffect,useRef } from 'react';
import { Link } from "react-router-dom";
import "./style.css";

const Sidebar = () => {
    const [SideBar,setSideBar]=useState(false);
    const showSideBar= () => setSideBar(!SideBar);
    const msgEndRef=useRef(null);

    let menuRef = useRef();
   
    useEffect(()=>{
      let handler= (e)=>{
         if(!menuRef.current.contains(e.target)){
            setSideBar(false)
         }
      };
      document.addEventListener("mousedown",handler);

      return()=>{
        document.removeEventListener("mousedown",handler);
      }
    });
    
    useEffect(()=>{
 
    });

    return (  
        <>
        <div className="menuBurger ">
            <Link to="" className="menu-bar" onClick={showSideBar}>
              <FaBars  className='btn_burger' />All
            </Link>
        </div>
        <div className={SideBar? 'open active':'submenu'} ref={menuRef}>
            <Link to="" className='menu-close'>
                <FaTimes onClick={showSideBar} className='btn_close'/>
            </Link>
            <div className ="Sign">
                <p><FaUser style={{color:"white",cursor:"pointer",fontSize:"1.5em"}} /> Hello, Sign In </p>
            </div>
            <div className='subinfo'>
                <article>
                    <h2>Digital Content & Devices</h2>
                    <ul className='menuArticle'>
                        <li>Music <FaAngleRight className='angleRight'/></li>
                        <li>AppStore <FaAngleRight className='angleRight'/></li>
                        <li>Books <FaAngleRight className='angleRight'/></li>
                    </ul>
                </article>
                <article>
                    <h2>Shop By Department</h2>
                    <ul className='menuArticle'>
                        <li>Computers <FaAngleRight className='angleRight'/></li>
                        <li>Electronics <FaAngleRight className='angleRight'/></li>
                        <li>Smart Phone <FaAngleRight className='angleRight'/></li>
                        <li>See All <FaAngleDown className='angleDown'/></li>
                    </ul>
                </article>
                <article>
                    <h2>Programs & Features</h2>
                    <ul className='menuArticle'>
                      <li>Gift Cards <FaAngleRight className='angleRight'/></li>
                      <li>Shop by interest <FaAngleRight className='angleRight'/></li>
                      <li>International Shopping <FaAngleRight className='angleRight'/></li>
                      <li>See All <FaAngleDown className='angleDown'/></li>
                    </ul>
                </article>
                <article>
                    <h2>Help & Settings</h2>
                    <ul className='menuArticle'>
                      <li>Your Account</li>
                      <li><FaGlobe className=''/>  English</li>
                      <li>Customer Service</li>
                      <li>Sign in</li>
                    </ul>
                </article>
            </div>
        </div>
        <div ref={msgEndRef}></div>
        </>
    );
}
export default Sidebar;