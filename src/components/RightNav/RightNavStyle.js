import styled from 'styled-components';
import { 
    colors,
    breakpoints,
    transitionEase
} from '../../lib/style/theme';
import { NavLink } from 'react-router-dom';

export const Ul = styled.ul`
    text-align:center;
    display: flex;
    flex-flow: column nowrap;
    background-color: ${colors.white};
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    padding-top: 45px;
    transition: ${transitionEase};
    font-weight:bold;

  @media screen and (${breakpoints.desktop}) {
    display: none;
  }
`;

export const Item = styled(NavLink)`
    font-size: 28px;
    clear:both;
    color: ${colors.black};
    padding: 18px 10px;
    &:hover {
        color: ${colors.red};
    }
`;
