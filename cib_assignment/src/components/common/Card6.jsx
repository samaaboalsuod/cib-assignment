import React, { Component } from 'react';
import './Card1.css';

import Card6Icon from './Card6Icon';
import Card1Title from './Card1Title.jsx';
import Card2p from './Card2p.jsx';

import icon7 from '../../assets/icon7.svg';
import icon8 from '../../assets/icon8.svg';
import icon9 from '../../assets/icon9.svg';


const Card6 = () => {
    return (
        <>
        
        
    <div className='card1Cont'>
        <Card6Icon icon2path={icon7} />

        <div className='card6Data'>

           <Card1Title card1Title="Online" />
           <Card2p Card2p="Chat with 'Zaki' our digital assistant to guide you through our products and services, or reach out on social media." />

        </div>

    </div>

    <div className='card1Cont'>
        <Card6Icon icon2path={icon8} />

        <div className='card6Data'>

           <Card1Title card1Title="On the phone" />
           <Card2p Card2p="For support, including emergencies such as cards closure or immediate critical feedback." />

        </div>

    </div>

    <div className='card1Cont'>
        <Card6Icon icon2path={icon9} />

        <div className='card6Data'>

           <Card1Title card1Title="In branch" />
           <Card2p Card2p="Our trained team of tellers and relationship managers are here to help you get the service you need. " />

        </div>

    </div>
        
        
        
        </>
     );
}
 
export default Card6;