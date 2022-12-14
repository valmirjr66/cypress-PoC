import styled from 'styled-components';

export const BlockWrapper = styled.div`
    font-size: 25px;
`;

export const FlexWrapper = styled.div`
    text-align: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    animation: 1.5s ease-out 0s 1 fading-in;
    background: linear-gradient(45deg, var(--cor-primaria), var(--cor-terciaria));
    color: var(--cor-branco);
`;