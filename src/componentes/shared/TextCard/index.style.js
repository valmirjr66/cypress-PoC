import styled from 'styled-components';

export const Wrapper = styled.div`
`;

export const Container = styled.div`
    color: var(--cor-preto);
    border: 1px solid var(--cor-cinza-claro-transparente);
    margin-bottom: 32px;
    cursor: pointer;
    transition: 0.25s;
    display: flex;
    flex-direction: row;
    width: ${props => props.fluid ? '100%' : '75vw'};
    box-shadow: 0px 5px 0px var(--cor-cinza-claro-transparente);

    @media only screen and (max-device-width: 649px) {
        width: 75vw;
    }
    
    @media only screen and (max-device-width: 450px) {
        width: 100vw;
        border: 0px;
    }

    :hover {
        color: var(--cor-preto);
        background-color: var(--cor-cinza-claro-transparente);
        box-shadow: 0px 5px 2px var(--cor-cinza-claro);
    }
`;

export const InnerContainer = styled.div`
    @media only screen and (min-device-width: 650px) {
        display: flex;
    }
`;

export const ImageBox = styled.div`
    @media only screen and (max-device-width: 649px) {
        width: 75vw;
        height: 50vw;
    }
    @media only screen and (max-device-width: 450px) {
        width: 100vw;
    }

    background-image: url(${props => props.src});
    background-position: center;
    background-size: 100%;

    min-width: 150px;
    height: 150px;
    align-self: center;
`;

export const TitleBox = styled.div`
    font-weight: bold;
    line-height: 1.5;
`;

export const SubtitleBox = styled.div`
`;