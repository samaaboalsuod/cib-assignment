import React, { Component } from 'react';
import './Home.css';

import logo from '../assets/logo.png';


import Navbar from '../components/layout/Navbar';
import Header from '../components/layout/Header';
import MenuTap from '../components/common/MenuTap';
import SmallTitle from '../components/common/SmallTitle';
import Title from '../components/common/Title';
import Card1 from './../components/common/Card1';
import SubTitle from '../components/common/SubTitle';
import Card2 from './../components/common/Card2';
import Button from '../components/common/Button';
import Card3 from '../components/common/Card3';
import Card2p from '../components/common/Card2p';





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
                <Title title=" Apply online now for cards and loans with ease!" />
            </div>

            <div className='cards1Sec'>
                <Card1 />
            </div>
        </section>

        <section className='learnSec'>

            <div className='titles'>
                <Title title="Learning Center" />
                <SubTitle SubTitle="Learn more about banking and your finances" />
            </div>

            <div className='cards1Sec'>
                <Card2 />
            </div>

            <Button btnTxt="View more" />

        </section>

        <section className='applySec'>

            <Title title="News" />

            <div className='newsSec'>
                <Card3 />
            </div>

            <Button btnTxt="View All News" />

        </section>

        <section className='photoSec'>

            <div className='photoCont'>
                <div className='whiteCard'>
                    <h3>CIB on an international scale</h3>
                    <Card2p Card2p="Learn more about CIB's presence outside of Egypt" />
                    <Button btnTxt="Learn More" />
                </div>
            </div>

        </section>

        </>

     );
}
 
export default Home;