import {Link} from 'react-router-dom'



const Navbar = () => {
    return ( <>
        <nav className="Navbar">
          <div className="links">
            <ul className='menu'>
              <li className='option_menu'><Link to="">Today's Deals</Link></li>
              <li className='option_menu'><Link to="">Services</Link></li>
              <li className='option_menu'><Link to="">Registry</Link></li>
              <li className='option_menu'><Link to="">Gift Cards</Link></li>
              <li className='option_menu'><Link to="">Sell</Link></li>
            </ul>
          </div>
        </nav>

        </>
     );
}
 
export default Navbar;