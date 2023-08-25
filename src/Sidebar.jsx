import {FaUser,FaBars,FaTimes} from 'react-icons/fa';
import { useState,useEffect,useRef } from 'react';
import { Link } from "react-router-dom";
import "./style.css";

const Sidebar = () => {
    const [SideBar,setSideBar]=useState(false);

    const showSideBar= () => setSideBar(!SideBar);
    
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

    return (  
        <>
        <div className="menuBurger ">
            <Link to="" className="menu-bar" onClick={showSideBar}>
              <FaBars  className='btn_burger' />All
            </Link>
        </div>
        <div className={SideBar? 'open active':'submenu'} ref={menuRef}>
            <Link to="" className='menu-close'>
                <FaTimes onClick={showSideBar}/>
            </Link>
            <div className ="Sign">
                <p><FaUser style={{color:"white",cursor:"pointer",fontSize:"1.5em"}} /> Hello, Sign In </p>
            </div>
            <div className='subinfo'>
                <article>
                    <h2>Digital Content & Devices</h2>
                    <ul className='menuArticle'>
                        <li>Music</li>
                        <li>AppStore</li>
                        <li>Books</li>
                    </ul>
                </article>
                <article>
                    <h2>Shop By Department</h2>
                    <ul className='menuArticle'>
                        <li>Computers</li>
                        <li>Electronics</li>
                        <li>Smart Phone</li>
                    </ul>
                </article>
                <article>
                    <h2>Programs & Features</h2>
                    <ul className='menuArticle'>
                      <li>Gift Cards</li>
                      <li>Shop by interest</li>
                      <li>International Shopping </li>
                    </ul>
                </article>
            </div>
        </div>
        </>
    );
}
export default Sidebar;