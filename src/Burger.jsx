import { Link } from "react-router-dom";
import {FaBars} from 'react-icons/fa';

const Burger = () => {
    return ( 
        <>
        <div className="menuBurger ">
            <Link to="" className="menu-bar">
              <FaBars  className='btn_burger'/>All
            </Link>
        </div>
        </>
     );
}
 
export default Burger;