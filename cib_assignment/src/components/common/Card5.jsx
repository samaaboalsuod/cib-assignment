import React, { Component } from 'react';
// import './Card5.css';
import './Card4.css';

import Icon from './Icon';
import Midtitle from './Midtitle';

import icon4 from '../../assets/icon4.svg';
import icon5 from '../../assets/icon5.svg';
import icon6 from '../../assets/icon6.svg';
import Card2p from './Card2p';


const Card5 = () => {
    return ( 
        <>
        <div className='transCard'>
            <Icon iconpath={icon4} />
            <Midtitle Midtitle="Best Private Bank in Egypt" />
            <Card2p Card2p="Global Finance - 2023" />

        </div>

        <div className='transCard'>
            <Icon iconpath={icon5} />
            <Midtitle Midtitle="Best Mergers & Acquisitions Deal in MENA" />
            <Card2p Card2p="EMEA Finance - 2023" />

        </div>

        <div className='transCard'>
            <Icon iconpath={icon6} />
            <Midtitle Midtitle="Best Bank in Egypt" />
            <Card2p Card2p="Euromoney - 2023" />

        </div>
        
        </>
     );
}
 
export default Card5;