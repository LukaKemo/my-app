//route
import React, { useContext } from 'react';
import Icon from '../Icon/Icon';
import {AuthContext} from '../Context/AuthContext';
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
    const { isAdmin } = useContext(AuthContext);
    const { isLoggedIn } = useContext(AuthContext);
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
                    {!isAdmin &&
                    <NavItem to="/login">Login</NavItem>}
                    <NavItem to="/register">Register</NavItem>
                    {isAdmin &&
                    <NavItem to="/admin">Admin</NavItem>}
                </Nav>
            </Inner>
        </HeaderWrapper>
    );
}

export default Header;