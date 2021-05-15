import styled from 'styled-components';

import { 
    colors,
    breakpoints,
    transitionEase
} from '../../lib/style/theme';

export const SearchBarContainer = styled.div `
    max-width:400px;
    padding: 0;
    @media screen and (${breakpoints.mobileLarge}) {
    
    }
`;

export const SearchBar = styled.input `
    display: block;
    margin-left: auto;
    margin-right: auto;    
    text-align:left;
    @media screen and (${breakpoints.mobileLarge}) {
        padding: 0 15px 0 15px;
        margin-bottom: 40px;
    }
`;