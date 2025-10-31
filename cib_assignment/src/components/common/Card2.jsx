import React, { Component } from 'react';
import './Card2.css';

import Card1Title from './Card1Title';
import Card2p from './Card2p';

import Card2Img from './Card2Img';
import Img1 from '../../assets/img1.png';
import Img2 from '../../assets/img2.png';
import Img3 from '../../assets/img3.png';

const Card2 = () => {
    return ( 
        <>
        
        <div className='card2Cont'>

            <div className='imgCont'>
              <Card2Img Card2Img={Img1} />
            </div>

            <div className='card2Data'>

             <Card1Title card1Title="Buying and making a home" />
             <Card2p Card2p="Buying a home can be an emotional process, but it is so important to approach it logically" />

            </div>

             <div className='readCont'>
                <p>Read more</p>
             </div>


        </div>

        <div className='card2Cont'>

            <div className='imgCont'>
              <Card2Img Card2Img={Img2} />
            </div>

            <div className='card2Data'>

             <Card1Title card1Title="Traveling on a budget" />
             <Card2p Card2p="So for all of you travelers, take a vacation without spending a fortune with these helpful tips and tricks." />

            </div>
            
             <div className='readCont'>
                <p>Read more</p>
             </div>


        </div>

        <div className='card2Cont'>

            <div className='imgCont'>
              <Card2Img Card2Img={Img3} />
            </div>

            <div className='card2Data'>

             <Card1Title card1Title="University life tips" />
             <Card2p Card2p="The impact of a good education can be transformative." />

            </div>
            
             <div className='readCont'>
                <p>Read more</p>
             </div>


        </div>
        
        
        
        </>
     );
}
 
export default Card2;
<>





</>