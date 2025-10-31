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
import Card4 from '../components/common/Card4';
import Card5 from './../components/common/Card5';
import Card6 from '../components/common/Card6';





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
                    <Button btnTxt="Learn more" />
                </div>
            </div>

        </section>

        <section className='applySec'>

            <div className='titles'>
                <SmallTitle SmallTitle="SUSTAINABLE FINANCE" />
                <Title title="  Sustainability is an integral part of the way we work" />
            </div>

            <div className='cards1Sec'>
                <Card4 />
            </div>

            <Button btnTxt="Learn more" />

        </section>

        <section className='applySec2'>

            <div className='titles'>
                <SmallTitle SmallTitle="AWARDS" />
                <Title title=" CIB's integrity and quality are recognized internationally" />
            </div>

            <div className='cards1Sec'>
                <Card5 />
            </div>

            <Button btnTxt="See all our awards" />
            
        </section>

        <section className='applySec'>

            <div className='titles'>
                <SmallTitle SmallTitle="We care" />
                <Title title=" Our dedicated team is committed to meeting your needs" />
            </div>

            <div className='cards1Sec'>
                <Card6 />
            </div>
        </section>

        </>

     );
}
 
export default Home;