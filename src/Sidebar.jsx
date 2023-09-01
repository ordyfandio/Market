import {FaUser,FaBars,FaTimes, FaAngleRight,FaGlobe, FaAngleDown,FaArrowLeft} from 'react-icons/fa';
import { useState,useEffect,useRef } from 'react';
import { Link } from "react-router-dom";
import "./style.css";


const Sidebar = () => {
    const [SideBar,setSideBar]=useState(false);
    const showSideBar= () => setSideBar(!SideBar);
    
    const [SideBarMusic,setSideBarMusic]=useState();
    const showSideBarMusic= () => setSideBarMusic(!SideBarMusic);

    const [SideBarStore,setSideBarStore]=useState();
    const showSideBarStore= () => setSideBarStore(!SideBarStore);
    
    const [SideBarBook,setSideBarBook]=useState();
    const showSideBarBook= () => setSideBarBook(!SideBarBook);

    const [SideBarComp,setSideBarComp]=useState();
    const showSideBarComp= () => setSideBarComp(!SideBarComp);
    
    const [SideBarElect,setSideBarElect]=useState();
    const showSideBarElect= () => setSideBarElect(!SideBarElect);

    const [SideBarPhone,setSideBarPhone]=useState();
    const showSideBarPhone= () => setSideBarPhone(!SideBarPhone);

    const [SideBarCard,setSideBarCard]=useState();
    const showSideBarCard= () => setSideBarCard(!SideBarCard);

    const [SideBarShop,setSideBarShop]=useState();
    const showSideBarShop= () => setSideBarShop(!SideBarShop);

    const [ScrollDown,setScrollDown]=useState();
    const showScrollDown= () => setScrollDown(!ScrollDown);

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
                        <li onClick={showSideBarMusic} style={{position:'relative'}} className='menuChange'><Link >Music <FaAngleRight className='angleRight' onClick={showSideBarMusic}/>
                        <div className={SideBarMusic ? 'openMusic active':'Music'} style={{position:'absolute'}} >
                            <div className="scrollbar">
                                <FaArrowLeft className='btnArrow'/>
                                <span>Main Menu</span>
                            </div>
                            <div className='contains'>
                                <h1>Stream Music</h1>
                                <ul>
                                    <li className='sous_contains'>Music Unlimited</li>
                                    <li className='sous_contains'>Free Music</li>
                                    <li className='sous_contains'>Open Web player</li>
                                    <li className='sous_contains'>Download the app</li>
                                </ul>
                            </div>
                        </div>
                        </Link></li>

                        <li className='menuChange' onClick={showSideBarStore} style={{position:'relative'}}><Link>AppStore <FaAngleRight className='angleRight' onClick={showSideBarStore}/>
                        <div className={SideBarStore ? 'openStore active':'Store'} style={{position:'absolute'}}>
                            <div className="scrollbarStore">
                                <FaArrowLeft className='btnArrow'/>
                                <span>Main Menu</span>
                            </div>
                            <div className='contains'>
                                <h1 style={{marginTop:'-40px'}}>Appstore</h1>
                                <ul>
                                    <li className='sous_contains'>All Apps and Games</li>
                                    <li className='sous_contains'>Games</li>
                                    <li className='sous_contains'>Download Appstore</li>
                                    <li className='sous_contains'>Your Apps and Subscription</li>
                                </ul>
                            </div>
                        </div>
                        </Link></li>

                        <li className='menuChange' onClick={showSideBarBook} style={{position:'relative'}}><Link>Kindle E-Readers & Books <FaAngleRight className='angleRight' onClick={showSideBarBook}/>
                        <div className={SideBarBook ? 'openBook active':'Book'} style={{position:'absolute'}}>
                            <div className="scrollbarBook">
                                <FaArrowLeft className='btnArrow'/>
                                <span>Main Menu</span>
                            </div>
                            <div className='contains'>
                                <h1 style={{marginTop:'-40px'}}>Kindle E-Readers</h1>
                                <ul>
                                    <li className='sous_contains'>Kindle Kids</li>
                                    <li className='sous_contains'>Kindle</li>
                                    <li className='sous_contains'>Accesories</li>
                                    <li className='sous_contains'>See all Kindle E-Readers</li>
                                </ul>
                                <hr style={{marginLeft:'-50px',marginTop:'5px',opacity:'0.4'}}/>
                            </div>
                            <div className='contains'>
                                <h1 style={{marginTop:'-40px'}}>Kindle Store</h1>
                                <ul>
                                    <li className='sous_contains'>Kindle Book</li>
                                    <li className='sous_contains'>Kindle Reading</li>
                                    <li className='sous_contains'>Kindle Prime Reading</li>
                                    <li className='sous_contains'>Kindle Vella</li>
                                </ul>
                                <hr style={{marginLeft:'-50px',marginTop:'5px',opacity:'0.4'}}/>
                            </div>
                            <div className='contains'>
                                <h1 style={{marginTop:'-40px'}}>Apps & Resources</h1>
                                <ul>
                                    <li className='sous_contains'>Free Kindle Reading Apps</li>
                                    <li className='sous_contains'>Kindle for web</li>
                                    <li className='sous_contains'>Manage Your Content and Devices</li>
                                    <li className='sous_contains'>Trace-In</li>
                                </ul>
                            </div>
                        </div>
                        </Link></li>
                    </ul>
                </article>
                <article>
                    <h2>Shop By Department</h2>
                    <ul className='menuArticle'>
                        <li className='menuChange' onClick={showSideBarComp}><Link>Computers <FaAngleRight className='angleRight' onClick={showSideBarComp}/>
                        <div className={SideBarComp ? 'openComp active':'Comp'} style={{position:'absolute'}}>
                            <div className="scrollbarComp">
                                <FaArrowLeft className='btnArrow'/>
                                <span>Main Menu</span>
                            </div>
                            <div className='contains'>
                                <h1 style={{marginTop:'-40px'}}>Computers</h1>
                                <ul>
                                    <li className='sous_contains'>Data Storage</li>
                                    <li className='sous_contains'>Laptop Accesories</li>
                                    <li className='sous_contains'>Computers & Tablettes</li>
                                    <li className='sous_contains'>Printers</li>
                                    <li className='sous_contains'>Monitors</li>
                                </ul>
                            </div>
                        </div>
                        </Link></li>
                        <li className='menuChange' onClick={showSideBarElect}><Link>Electronics <FaAngleRight className='angleRight' onClick={showSideBarElect}/>
                        <div className={SideBarElect ? 'openElect active':'Elect'} style={{position:'absolute'}}>
                            <div className="scrollbarElect">
                                <FaArrowLeft className='btnArrow'/>
                                <span>Main Menu</span>
                            </div>
                            <div className='contains'>
                                <h1 style={{marginTop:'-40px'}}>Electronics</h1>
                                <ul>
                                    <li className='sous_contains'>Accesories & Supplies</li>
                                    <li className='sous_contains'>Camera & Photo</li>
                                    <li className='sous_contains'>Computers & Accesories</li>
                                    <li className='sous_contains'>Home Audio</li>
                                    <li className='sous_contains'>Office Electronics</li>
                                </ul>
                            </div>
                        </div>
                        </Link></li>
                        <li className='menuChange' onClick={showSideBarPhone}><Link>Smart Phone <FaAngleRight className='angleRight' onClick={showSideBarPhone}/>
                        <div className={SideBarPhone ? 'openPhone active':'phone'} style={{position:'absolute'}}>
                            <div className="scrollbarPhone">
                                <FaArrowLeft className='btnArrow'/>
                                <span>Main Menu</span>
                            </div>
                            <div className='contains'>
                                <h1 style={{marginTop:'-40px'}}>Smart Home</h1>
                                <ul>
                                    <li className='sous_contains'>Smart Home</li>
                                    <li className='sous_contains'>Plugs and Outlets</li>
                                    <li className='sous_contains'>Detectors and Sensors</li>
                                    <li className='sous_contains'>Pet</li>
                                    <li className='sous_contains'>WIFI and Networking</li>
                                </ul>
                            </div>
                        </div>
                        </Link></li>
                        <li className='menuChange' onClick={showScrollDown}><Link>See All <FaAngleDown className='angleDown' onClick={showScrollDown}/></Link></li>
                        <div className={ScrollDown ?'openScrollDown': 'scrollDown'}>
                            <ul className='subDown'>
                                <li><Link>Automotive <FaAngleRight style={{marginLeft:'180px',fontSize:'1.1em'}}/></Link></li>
                                <li><Link>Baby <FaAngleRight style={{marginLeft:'222px',fontSize:'1.1em'}}/></Link></li>
                                <li><Link>Girl's Fashion <FaAngleRight style={{marginLeft:'160px',fontSize:'1.1em'}}/></Link></li>
                                <li><Link>Boy's Fashion <FaAngleRight style={{marginLeft:'160px',fontSize:'1.1em'}}/></Link></li>
                            </ul>
                        </div>
                    </ul>
                </article>
                <article>
                    <h2>Programs & Features</h2>
                    <ul className='menuArticle'>
                      <li className='menuChange' onClick={showSideBarCard}><Link>Gift Cards <FaAngleRight className='angleRight' onClick={showSideBarCard}/>
                      <div className={SideBarCard ? 'openCard active':'card'} style={{position:'absolute'}}>
                            <div className="scrollbarCard">
                                <FaArrowLeft className='btnArrow'/>
                                <span>Main Menu</span>
                            </div>
                            <div className='contains'>
                                <h1 style={{marginTop:'-40px'}}>Give A Gift Card</h1>
                                <ul>
                                    <li className='sous_contains'>All gift cards</li>
                                    <li className='sous_contains'>Gift Card by mail</li>
                                    <li className='sous_contains'>Specialty gift cards</li>
                                    <li className='sous_contains'>Cash</li>
                                    <li className='sous_contains'>For Businesses</li>
                                </ul>
                                <hr style={{marginLeft:'-50px',marginTop:'5px',opacity:'0.4'}}/>
                            </div>
                            <div className='contains'>
                                <h1 style={{marginTop:'-40px'}}>Manage Your Gift Card</h1>
                                <ul>
                                    <li className='sous_contains'>Redeem a gift card</li>
                                    <li className='sous_contains'>View Your Balance</li>
                                    <li className='sous_contains'>Reload Your Balance</li>
                                </ul>
                            </div>
                        </div>
                      </Link></li>
                      <li className='menuChange'><Link>Shop by interest</Link></li>
                      <li className='menuChange' onClick={showSideBarShop}><Link>International Shopping <FaAngleRight className='angleRight' onClick={showSideBarShop}/>
                      <div className={SideBarShop ? 'openShop active':'shop'} style={{position:'absolute'}}>
                            <div className="scrollbarShop">
                                <FaArrowLeft className='btnArrow'/>
                                <span>Main Menu</span>
                            </div>
                            <div className='contains'>
                                <h1 style={{marginTop:'-40px'}}>International Shopping</h1>
                                <ul>
                                    <li className='sous_contains'>Where we ship</li>
                                    <li className='sous_contains'>Visit Global</li>
                                </ul>
                            </div>
                        </div>
                      </Link></li>
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