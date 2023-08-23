// import {Link} from 'react-router-dom';
import {FaHamburger} from 'react-icons/fa'


const Navbar = () => {
    return ( 
        <nav className="Navbar">
          <div className="links">
            <a href=''><FaHamburger style={{color:'red',cursor:'pointer'}}/></a>
            <a href=''>Home</a>
            <a href="">Shop</a>
            <a href="">Services</a>
            <a href="">About Us</a>
          </div>
        </nav>
     );
}
 
export default Navbar;