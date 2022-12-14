import styled from 'styled-components';

export const Block = styled.div`
    text-align: left;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-x: hidden;
    overflow-y: hidden;
    margin: 0px;
`;

export const Wrapper = styled.div`
`;

export const Span = styled.h2`
    color: var(--cor-branco);
    line-height: 1.2;
    max-width: 1000px;
`;

export const PresentationLayer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
`;