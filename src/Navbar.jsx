// import {Link} from 'react-router-dom';
// import { useState } from 'react';
// import {FaBars} from 'react-icons/fa';
import {Link} from 'react-router-dom'



const Navbar = () => {
    

    return ( <>
        <nav className="Navbar">
          <div className="links">
            <ul className='menu'>
              <li><Link to="">Today's Deals</Link></li>
              <li><Link to="">Services</Link></li>
              <li><Link to="">Registry</Link></li>
              <li><Link to="">Gift Cards</Link></li>
              <li><Link to="">Sell</Link></li>
            </ul>
          </div>
        </nav>

        </>
     );
}
 
export default Navbar;