import React from "react";
import {Link} from "react-router-dom";



import "./menu.css";

const Menu = () => {
    return (<ul> 
        <Link to="/" ><li> Home </li></Link>
       <Link to="/about"> <li> About </li></Link>
       <Link to="/posts"> <li> Posts </li></Link>
    </ul>)
}

export default Menu;