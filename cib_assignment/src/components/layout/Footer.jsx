import React, { Component } from 'react';
import './Footer.css';

import Footp from '../common/Footp';

import logo from '../../assets/logo.png';
import google from '../../assets/google.svg';
import apple from '../../assets/apple.svg';
import face from '../../assets/face.svg';
import insta from '../../assets/insta.svg';
import linked from '../../assets/linked.svg';
import youtube from '../../assets/youtube.svg';
import xx from '../../assets/xx.svg';
import whats from '../../assets/whats.svg';


const Footer = () => {
    return ( 
        <footer>

            <div className='footTopSec'>

                <div className='TopSecCont'>

                    <div className='innetTop'>

                        <img className='logo' src={logo} alt="" />

                        <div className='footLinkCont'>

                            <div className='linkCol'>

                                 <Footp Footp="FAQs" />
                                 <Footp Footp="Learning Center" />
                                 <Footp Footp="Fees & Charges" />
                                 <Footp Footp="Terms & Conditions" />

                            </div>

                            <div className='linkCol'>

                                <Footp Footp="Local" />
                                <Footp Footp="Abroad" />
                                <Footp Footp="Business" />
                                <Footp Footp="Corporate" />

                            </div>

                            <div className='linkCol'>

                                <Footp Footp="Careers" />
                                <Footp Footp="Why CIB" />
                                <Footp Footp="Email us" />
                                <Footp Footp="System Status" />

                            </div>

                        </div>

                        <div className='download'>
                            <img src={google} alt="" />
                            <img src={apple} alt="" />
                        </div>

                    </div>

                    <div className='innerBot'>

                       <div className='linkRow'>

                            <Footp Footp="CBE Approvals" />
                            <Footp Footp="Cookie Policy" />
                            <Footp Footp="Privacy Policy" />
                            <Footp Footp="User Agreements" />

                       </div>

                       <div className='linkRow'>
                         <img src={face} alt="" />
                         <img src={insta} alt="" />
                         <img src={linked} alt="" />
                         <img src={youtube} alt="" />
                         <img src={xx} alt="" />
                         <img src={whats} alt="" />
                       </div>

                    </div>

                </div>

            </div>

            <div className='footBotSec'>
                <p className='copy'>Copyright © 2025 Commercial International Bank</p>
            </div>

        </footer>
     );
}
 
export default Footer;
