import styled from 'styled-components';

export const EventElementInfo = styled.div ``;

export const EventElement = styled.div `
    padding: 0 15px 64px;
`;

export const Title = styled.h2 `
    text-align: center;
    margin-bottom: 30px;
`;

export const Figure = styled.figure `
    width: 100%;
    height: 230px;
    margin-bottom: 24px;
`;

export const Image = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Content = styled.div `
    margin-bottom: 15px;
`;

export const Row = styled.div `
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const Item = styled.div `
    &:last-child {
        text-align: right;
}`;

export const ItemTitle = styled.h3 `
    font-size: 14px;
    margin-bottom: 4px;
`;

export const ItemValue = styled.p `
    font-size: 14px;
`;

export const Description = styled.div `
    font-size: 16px;
    line-height: 150%;
`;