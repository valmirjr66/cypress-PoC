import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: var(--cor-primaria);
    font-family: fonte-psol;
    font-size: 40px;
    line-height: 1;

    :hover {
        color: var(--cor-vermelho);
    }
`;

export const InlineWrapper = styled.div`
    display: inline-block;
    width: 100%;
    text-align: center;
    background-color: var(--cor-amarelo);
`;
