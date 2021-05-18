import styled from 'styled-components';
import {NavLink} from 'react-router-dom'
import { 
    colors,
    breakpoints,
    transitionEase
} from '../../lib/style/theme';

export const Grid = styled.div `
    display: grid;
    row-gap: 32px;

    @media screen and (${breakpoints.mobileLarge}) {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 32px;
    }

    @media screen and (${breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    ${props => props.columns === 3 &&
        'padding: 0 32px'}
    }

    @media screen and (${breakpoints.desktopLarge}) {
        grid-template-columns: repeat(4, 1fr);
            ${props => props.columns === 3 &&
                'padding: 0 84px'}
    }
`;

export const ButtonDefault = styled.div `
    display: block;
    text-decoration: none;
    width: 100%;
    line-height: 40px;
    text-align: center;
    border: 1px solid ${colors.red};
    border-radius: 6px;
    background: ${colors.red};
    color: ${colors.white};
    transition: ${transitionEase};
    font-size: 16px;
    font-family: "Montserrat", sans-serif;

    &:hover {
    cursor: pointer;
    border-color: ${colors.yellow};
    background: ${colors.yellow};
    }

    &:focus {
    outline: none;
    }
`;

export const ButtonRegular = styled(NavLink) `
    ${ButtonDefault}
`;

export const RegisterButton = styled.button `
    ${ButtonDefault}
`;

export const Form = styled.form `
    width:100%;
    padding: 0;
    margin: 0 auto;
    @media screen and (${breakpoints.tablet}) {
        width:400px;      
    }
`;

export const FormRow = styled.div `
    margin-bottom:32px;
    padding: 0;
    &:last-child {
        bottom-margin:none;
    }
`;

export const CheckBoxWrapper = styled.div `
    display:flex;
    padding: 0;
`;

export const InputLabel = styled.h2 `
    font-size:14px;
    &:last-child {
        bottom-margin:none;
    }
    @media screen and (${breakpoints.desktop}) {
        font-size:16px;
        font-weight: 600;
        margin-bottom:4px;

    }
`;

export const InputText = styled.input `
    border: 1px solid ${colors.lightGrey};
    border-radius: 6px;
    width:100%;
    line-height: 40px;
    padding: 0 10px;
    outline: none;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    &:focus {
        border-color: ${colors.yellow}
    }
    @media screen and (${breakpoints.desktop}){
        font-size:16px;
    }
`;

export const TextArea = styled.textarea `
    border: 1px solid ${colors.lightGrey};
    border-radius: 6px;
    width:100%;
    line-height: 150%;
    padding: 10px;
    outline: none;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    min-width: 100%;
    &:focus {
        border-color: ${colors.yellow}
    }
    @media screen and (${breakpoints.desktop}){
        font-size:16px;
    }
`;

export const InputCheckbox = styled.input `
    margin-right:12px;
    width:18px;
    height:18px;
`;

export const InputError = styled.p `
    font-size: 14px;
    color: ${colors.red};
    padding-top: 8px;
`;

export const LoaderBox = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:center;
    align-items:center;
`;


