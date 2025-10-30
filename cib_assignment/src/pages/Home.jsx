import React, { Component } from 'react';
import './Home.css';

import Navbar from '../components/layout/Navbar';

import logo from '../assets/logo.png';


const Home = () => {
    return ( 
        <div className='navSec'>
            <div className='navContainer'>

                <img src={logo} alt="logo" />
                
                <div className='navLinks'>
                    <Navbar navTxt="About us" />
                    <Navbar navTxt=" Investor Relations " />
                    <Navbar navTxt="Responsible Banking" />
                    <Navbar navTxt="Newsroom" />
                    <Navbar navTxt="Learning Center" />
                    <Navbar navTxt="Careers" />
                    <Navbar navTxt="Others" />
                </div>

            </div>
        </div>
     );
}
 
export default Home;