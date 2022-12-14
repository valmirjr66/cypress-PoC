import styled from 'styled-components';

export const TagBody = styled.a`
    display: inline-block;
    height: 24px;
    position: relative;
    padding: 0 12px 0 10px;
    background: #777;
    border-radius: 6px;
    color: var(--cor-branco);
    font-size: 12px;
    text-decoration: none;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    font-weight: bold;
    background-color: var(--cor-verde-escuro);
    margin-top: 8px;
    cursor: pointer;

    :hover {   
        background-color: var(--cor-vermelho-escuro);
        color: var(--cor-branco);
    }
`;
