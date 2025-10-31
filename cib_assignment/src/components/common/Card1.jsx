import React, { Component } from 'react';
import './Card1.css';


import Icon from './Icon.jsx';

import icon1 from '../../assets/icon1.svg';
import Card1Title from './Card1Title.jsx';

const Card1 = () => {
    return ( 
    <div className='card1Cont'>
        <Icon iconpath={icon1} />
        <Card1Title card1Title="Apply for a New Account" />
    </div> 
    );
}
 
export default Card1;