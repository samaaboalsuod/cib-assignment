import React, { Component } from 'react';
import './Card1.css';


import Icon from './Icon.jsx';

import icon1 from '../../assets/icon1.svg';

const Card1 = () => {
    return ( 
    <div className='card1Cont'>
        <Icon iconpath={icon1} />
    </div> 
    );
}
 
export default Card1;