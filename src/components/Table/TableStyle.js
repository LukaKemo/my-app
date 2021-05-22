import styled from 'styled-components';
import {
    colors,
    boxShadowHover,
    breakpoints,
    transitionEase
} from '../../lib/style/theme';

export const Structure = styled.div `
    padding: 12px 15px;
    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(6),
    &:nth-child(7) {
        display:none;
    }

    @media screen and(${breakpoints.mobileLarge}) {
        &:nth-child(3),
        &:nth-child(7) {
            display: table-cell;
        }
    }

    @media screen and(${breakpoints.tablet}) {
        &:nth-child(4),
        &:nth-child(5),
        &:nth-child(6){
            display: table-cell;
        }
    }
`;

export const TableTransition = styled.tr `
    transition: ${transitionEase};
`;

export const Table = styled.table `
    margin:0 auto;
    margin-top: 30px;
    width: 100%;
    font-size: 14px;
    text-align: left;
    border-radius: 6px;
    box-shadow:${boxShadowHover};
`;

export const TableHeader = styled.thead `
    background-color: ${colors.red};
    color: ${colors.white};
    font-weight: 600;
`;

export const TableBody = styled.tbody `
    font-weight: bold;
    &{Tr}:nth-child(even) {
        background-color: ${colors.lightGrey};
    }
    &{Tr}:hover {
        background-color: ${colors.darkGrey};
    }
`;

export const Icon = styled.div `
    &:hover {
        color: ${colors.red};
    }
`;

export const Empty = styled.p `
    margin-top: 40px;
    text-align: conter;
    font-style: Italic;
`;
