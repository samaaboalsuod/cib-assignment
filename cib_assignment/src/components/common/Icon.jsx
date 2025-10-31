import React, { Component } from 'react';
import './Icon.css';

const Icon = (props) => {
    return ( 
        <div className='strokeCir'>
            <img src={props.iconpath} alt="" />
        </div>
     );
}
 
export default Icon;