import React, { Component } from 'react';
import './Card4.css';
import Card2Img from './Card2Img';

import img8 from '../../assets/img8.svg'
import img9 from '../../assets/img9.svg'
import img10 from '../../assets/img10.svg'
import Midtitle from './Midtitle';

const Card4 = () => {
    return ( 
        <>

        <div className='transCard'>
            <Card2Img Card2Img={img8} />
            <Midtitle Midtitle="S&P/EGX ESG Index" />

        </div>

        <div className='transCard'>
            <Card2Img Card2Img={img9} />
            <Midtitle Midtitle="S&P/EGX ESG Index" />

        </div>

        <div className='transCard'>
            <Card2Img Card2Img={img10} />
            <Midtitle Midtitle="S&P/EGX ESG Index" />

        </div>
        
        </>
     );
}
 
export default Card4;