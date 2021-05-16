import styled from 'styled-components';
import { 
    colors,
    breakpoints
} from '../../lib/style/theme';

export const SearchBarContainer = styled.input `
    max-width:400px;
    padding: 0;
    @media screen and (${breakpoints.mobileLarge}) {
        border: 1px solid ${colors.lightGrey};
        border-radius: 6px;
        line-height: 40px;
        font-size: 14px;
        margin-top: 40px;
        padding: 0 15px;
        width: 100%;
    &:focus {
        outline-color: ${colors.yellow};
    }
    @media screen and (${breakpoints.desktop}) {
        font-size: 16px;
    }
    }
`;

export const SearchBarBox = styled.div `
    padding: 0 15px;
    @media screen and (${breakpoints.mobileLarge}) {
        max-width: 400px;
        margin: 0 auto;
        padding-bottom: 35px;
    }
`;