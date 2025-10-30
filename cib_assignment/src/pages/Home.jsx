import React, { Component } from 'react';
import './Home.css';

import Navbar from '../components/layout/Navbar';
import Header from '../components/layout/Header';
import MenuTap from '../components/common/MenuTap';
import SmallTitle from '../components/common/SmallTitle';

import logo from '../assets/logo.png';


const Home = () => {
    return ( 

        <>
          
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

        <Header />

        <div className='menuSec'>
            <MenuTap menuTxt="Apply Online" />
            <MenuTap menuTxt="News" />
            <MenuTap menuTxt="Blog Articles" />
            <MenuTap menuTxt="CIB Internationals" />
            <MenuTap menuTxt="Sustainable Finance" />
            <MenuTap menuTxt="Awards" />
        </div>

        <section className='applySec'>
            <div className='titles'>
                <SmallTitle SmallTitle="APPLY ONLINE" />
            </div>
        </section>

        </>

     );
}
 
export default Home;