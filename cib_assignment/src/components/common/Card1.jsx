import React, { Component } from 'react';
import './Card1.css';


import Icon from './Icon.jsx';
import Card1Title from './Card1Title.jsx';

import icon1 from '../../assets/icon1.svg';
import icon2 from '../../assets/icon2.svg';
import icon3 from '../../assets/icon3.svg';

const Card1 = () => {
    return ( 
     <>
     
    <div className='card1Cont'>
        <Icon iconpath={icon1} />
        <Card1Title card1Title="Apply for a New Account" />
    </div>

    <div className='card1Cont'>
        <Icon iconpath={icon2} />
        <Card1Title card1Title="Apply for a card" />
    </div>

    <div className='card1Cont'>
        <Icon iconpath={icon3} />
        <Card1Title card1Title="Apply for a loan or overdraft" />
    </div> 
     
     
     
     
     
     </>   
    );
}
 
export default Card1;