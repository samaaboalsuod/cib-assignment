import React, { Component } from 'react';
import './Header.css';
import Button from '../common/Button';

const Header = () => {
    return ( 
        <div className='heroSec'>
            <div className='heroCont'>

            <h1>CIB</h1>
            <h2>Delivering value to our clients, our community and our shareholders</h2>
            <Button btnTxt="Discover more" />
            </div>
        </div>
     );
}
 
export default Header;