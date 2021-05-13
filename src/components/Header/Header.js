//route
import React from 'react';
//import logo
import LogoImage from '../../assets/images/logo.png';
//style
import {
    HeaderWrapper,
    Inner,
    Logo,
    LogoContainer,
    Nav,
    NavItem,
    NavHamburger,
    NavHamburgerLine
}from './HeaderStyle';

//links
const links = {
    home: 'Home',
    events: 'Events',
}

//structure Header
const Header = () => {
    return (
        <HeaderWrapper>
            <Inner>
                <LogoContainer to="/">
                    <Logo src={LogoImage} alt="Logo" />
                </LogoContainer>
                <NavHamburger>
                    <NavHamburgerLine />
                    <NavHamburgerLine />
                    <NavHamburgerLine />
                </NavHamburger>
                <Nav>
                    <NavItem exact to="/">Home</NavItem>
                    <NavItem to="/events">Events</NavItem>
                </Nav>
            </Inner>
        </HeaderWrapper>
    );
}

export default Header;