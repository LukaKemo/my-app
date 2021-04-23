//scss
import './Header.scss';
//route
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
//import
import Logo from '../../assets/images/logo.png';

//links
const links = {
    home: 'Home',
    events: 'Events',
}

//structure Header
const Header = () => {
    return (
        <header className="Header">
            <div className="Header-Inner">
                <Link to="/home" className="Header-LogoContainer">
                    <img src={Logo} className="Header-Logo"/>
                </Link>
                <div className="Header-NavHamburger">
                    <div className="Header-NavHamburgerLine"></div>
                    <div className="Header-NavHamburgerLine"></div>
                    <div className="Header-NavHamburgerLine"></div>
                </div>
                <nav className="Header-Nav">
                    <NavLink className="Header-NavItem" exact={true} to="/home">{links.home}</NavLink>
                    <NavLink className="Header-NavItem" exact={true} to="/events">{links.events}</NavLink>
                </nav>
            </div>

        </header>
    );
}

export default Header;