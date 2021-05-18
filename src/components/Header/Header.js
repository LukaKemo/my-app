//route
import React from 'react';
import Icon from '../Icon/Icon';
//import logo
import LogoImage from '../../assets/images/logo.png';
//style
import {
    HeaderWrapper,
    Inner,
    Logo,
    LogoContainer,
    Nav,
    NavItem
}from './HeaderStyle';

//structure Header
const Header = () => {
    return (
        <HeaderWrapper>
            <Inner>
                <LogoContainer to="/">
                    <Logo src={LogoImage} alt="Logo" />
                </LogoContainer>
                <Icon></Icon>
                <Nav>
                    <NavItem exact to="/">Home</NavItem>
                    <NavItem to="/events">Events</NavItem>
                    <NavItem to="/login">Login</NavItem>
                    <NavItem to="/register">Register</NavItem>
                </Nav>
            </Inner>
        </HeaderWrapper>
    );
}

export default Header;