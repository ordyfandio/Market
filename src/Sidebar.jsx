import {FaUser,FaBars,FaTimes, FaAngleRight,FaGlobe, FaAngleDown,FaArrowLeft} from 'react-icons/fa';
import { useState,useEffect,useRef } from 'react';
import { Link } from "react-router-dom";
import "./style.css";


const Sidebar = () => {
    const [SideBar,setSideBar]=useState(false);
    const showSideBar= () => setSideBar(!SideBar);
    
    const [SideBarMusic,setSideBarMusic]=useState();
    const showSideBarMusic= () => setSideBarMusic(!SideBarMusic);
    

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
                <FaTimes onClick={showSideBar} className='btn_close'/>
            </Link>
            <div className ="Sign">
                <p><FaUser style={{color:"white",cursor:"pointer",fontSize:"1.5em"}} /> Hello, Sign In </p>
            </div>
            <div className='subinfo' >
                <article>
                    <h2>Digital Content & Devices</h2>
                    <ul className='menuArticle'>
                        <li onClick={showSideBarMusic} style={{position:'relative'}}><Link >Music <FaAngleRight className='angleRight' onClick={showSideBarMusic}/>
                        <div className={SideBarMusic ? 'openMusic active':'Music'} style={{position:'absolute'}}>
                            <div className="scrollbar">
                                <FaArrowLeft className='btnArrow'/>
                                <span>Main Menu</span>
                            </div>
                            <div className='contains'>
                                <h1>Stream Music</h1>
                                <ul>
                                    <li>Music Unlimited</li>
                                    <li>Free Music</li>
                                    <li>Open Web player</li>
                                    <li>Download the app</li>
                                </ul>
                            </div>
                        </div>
                        </Link></li>
                        <li className='menuChange'><Link>AppStore <FaAngleRight className='angleRight'/></Link></li>
                        <li className='menuChange'><Link>Books <FaAngleRight className='angleRight'/></Link></li>
                    </ul>
                </article>
                <article>
                    <h2>Shop By Department</h2>
                    <ul className='menuArticle'>
                        <li className='menuChange'><Link>Computers <FaAngleRight className='angleRight'/></Link></li>
                        <li className='menuChange'><Link>Electronics <FaAngleRight className='angleRight'/></Link></li>
                        <li className='menuChange'><Link>Smart Phone <FaAngleRight className='angleRight'/></Link></li>
                        <li className='menuChange'><Link>See All <FaAngleDown className='angleDown'/></Link></li>
                    </ul>
                </article>
                <article>
                    <h2>Programs & Features</h2>
                    <ul className='menuArticle'>
                      <li className='menuChange'><Link>Gift Cards <FaAngleRight className='angleRight'/></Link></li>
                      <li className='menuChange'><Link>Shop by interest <FaAngleRight className='angleRight'/></Link></li>
                      <li className='menuChange'><Link>International Shopping <FaAngleRight className='angleRight'/></Link></li>
                      <li className='menuChange'><Link>See All <FaAngleDown className='angleDown'/></Link></li>
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
        </>
    );
}


export default Sidebar;