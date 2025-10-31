import React, { Component } from 'react';
import './MenuTap.css';

const MenuTap = (props) => {
    return ( 
        <h3 className='menutitle'>{props.menuTxt}</h3>
     );
}
 
export default MenuTap;