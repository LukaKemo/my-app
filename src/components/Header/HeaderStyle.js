import styled from 'styled-components';

import { 
    colors,
    breakpoints,
    transitionEase
} from '../../lib/style/theme';
import {Link, NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header `
        background-color: ${colors.white}};
        width: 100%;
        height: 80px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
`;

export const Inner = styled.div`
        height: 100%;
        padding: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media screen and (${breakpoints.tablet}) {
            padding: 15px 25px;
        }
        
        @media screen and (${breakpoints.desktop}) {
            padding: 15px 0;
            max-width: 993px;
            margin: 0 auto;
        }

        @media screen and (${breakpoints.desktopLarge}) {
            max-width: 1280px;
        } 
`;

export const Logo = styled.img `
        width: 125%;
        height: 125%;
        object - fit: contain;
`;

export const LogoContainer = styled(Link) `
        display: block;
        width: 50px;

        @media screen and (${breakpoints.desktopLarge}) {
            width: 60px;
    }
`;

export const Nav = styled.nav `
        display: none;

        @media screen and (${breakpoints.desktop}) {
            display: block;
        }
`;

export const NavItem = styled(NavLink) `
    &:hover {
        color: ${colors.red};
    }
    
    &:last-child {
        margin-right: 0;
    }

    &.active {
        color: ${colors.red};
    }

    @media screen and (${breakpoints.desktop}) {
        display: inline-block;
        text-decoration: none;
        color: ${colors.black};
        line-height: 50px;
        font-weight: 600;
        font-size: 16px;
        margin: 15px 0;
        margin-right: 60px;
        transition: ${transitionEase}; 
    }

    @media screen and (${breakpoints.desktopLarge}) {
        font-size: 18 px;
    }
`;

export const NavHamburger = styled.div `
    width: 25px;
    cursor: pointer;
    border: none;
    z-index: 10;
    display: inline-block;

    @media screen and (${breakpoints.desktop}) {
        display: none;
    }
`;

export const NavHamburgerLine = styled.div `
    width: 100%;
    height: 2px;
    border-radius: 10px;
    background-color: ${colors.darkGrey};
    margin-bottom: 6px; 
    transition: ${transitionEase};
    overflow-y: scroll;
    overflow: hidden;

    &:last-child {
      margin-bottom: 0;
    }
`;

export const menuNav = styled.ul `
    &:showMenu {
        width: 100%;
    }
`;

