import React, { Component } from 'react';
import './Card3.css';

import Card2Img from './Card2Img';
import Card1Title from './Card1Title';
import Card2p from './Card2p';

import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';
import img6 from '../../assets/img6.png';

const Card3 = () => {
    return (
        <>
        
        <div className='card3Cont'>

            <Card2Img Card2Img={img4} />

            <div className='card3Data'>

             <Card2p Card2p="08/10/2025 - Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion" />
             <Card1Title card1Title="Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion" />
             <Card2p Card2p="CIB, Egypt's leading and largest private sector bank, has successfully partnered with CI Capital to complete the seventh issuance for Halan Consumer Finance, valued at EGP 3.4 billion." />

            </div>
        </div>

        <div className='card3Cont'>

            <Card2Img Card2Img={img5} />

            <div className='card3Data'>

             <Card2p Card2p="26/10/2025 - Commercial International Bank (CIB) Has Partnered with talabat and Mastercard to Launch a new Credit Card Tailored to the Digital Generation in Egypt" />
             <Card1Title card1Title="Commercial International Bank (CIB) Has Partnered with talabat and Mastercard to Launch a new Credit Card Tailored to the Digital Generation in Egypt" />
             <Card2p Card2p="CIB, Egypt’s leading and largest private sector bank, has partnered with talabat, the leading technology platform in the field of e-commerce in the Middle East and North Africa, to launch the co-branded credit card for the digital generation, powered..." />

            </div>
        </div>

        <div className='card3Cont'>

            <Card2Img Card2Img={img6} />

            <div className='card3Data'>

             <Card2p Card2p="23/10/2025 - Commercial International Bank (CIB) Has Partnered with New Giza Sports Club to Sponsor the 2025 CIB New Giza Premier Padel Championship in Celebration of the Bank’s 50th Anniversary" />
             <Card1Title card1Title="Commercial International Bank (CIB) Has Partnered with New Giza Sports Club to Sponsor the 2025 CIB New Giza Premier Padel Championship in Celebration of the Bank’s 50th Anniversary" />
             <Card2p Card2p="CIB, Egypt’s leading and largest private-sector bank, has partnered with New Giza Club to sponsor the 2025 CIB New Giza Premier Padel Championship." />

            </div>
        </div>
        
        
        
        </>


        
     );
}
 
export default Card3