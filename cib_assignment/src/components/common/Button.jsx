import React, { Component } from 'react';
import './Button.css';

const Button = (props) => {
    return ( 
        <button>{props.btnTxt}</button>
     );
}
 
export default Button;