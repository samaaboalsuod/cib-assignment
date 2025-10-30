import React, { Component } from 'react';
import './Navbar.css';

const Navbar = (props) => {
    return ( 
        <div className='navText'>{props.navTxt}</div>
     );
}
 
export default Navbar;