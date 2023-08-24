import {FaUser} from 'react-icons/fa';
// import { useState } from 'react';

const Sidebar = () => {

    return ( 
        <>
           <div>
             <div className='sign'>
               <p><FaUser style={{color:"black",cursor:"pointer"}} /> Hello, Sign In </p>
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