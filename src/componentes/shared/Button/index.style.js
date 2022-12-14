import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

export const ActionButton = styled(Button)`
    color: var(--cor-branco) !important;
    background: linear-gradient(45deg, var(--cor-primaria), var(--cor-secundaria)) !important;
    white-space: nowrap;

    :hover {
        background: unset !important;
        background-color: var(--cor-terciaria) !important;
    }

    :active {
        background-color: var(--cor-secundaria) !important;
    }
`;

export const PrimaryButton = styled(Button)`
    color: var(--cor-branco) !important;
    background-color: var(--cor-primaria) !important;
    white-space: nowrap;

    :hover {
        background-color: var(--cor-terciaria) !important;
    }

    :active {
        background-color: var(--cor-secundaria) !important;
    }
`;

export const PrimaryOutlinedButton = styled(Button)`
    color: var(--cor-primaria) !important;
    background-color: var(--cor-branco) !important;
    border: 1px solid var(--cor-primaria) !important;
    white-space: nowrap;

    :hover {
        background-color: var(--cor-complemento) !important;
    }

    :active {
        color: var(--cor-branco) !important;
        background-color: var(--cor-secundaria) !important;
    }
`;

export const SecondaryButton = styled(Button)`
    color: var(--cor-cinza-escuro) !important;
    border: 1px solid var(--cor-cinza-claro) !important;
    box-shadow: 0px 5px 5px 1px var(--cor-cinza-claro-transparente) !important;
    background-color: var(--cor-cinza-claro-transparente) !important;
    white-space: nowrap;

    :hover {
        background-color: var(--cor-cinza-claro) !important;
    }

    :active {
        background-color: var(--cor-branco) !important;
    }
`;

export const SuccessButton = styled(Button)`
    color: var(--cor-branco) !important;
    background-color: var(--cor-verde) !important;
    white-space: nowrap;

    :hover {
        background-color: var(--cor-verde-escuro) !important;
    }

    :active {
        background-color: var(--cor-verde-claro) !important;
    }
`;

export const CancelButton = styled(Button)`
    color: var(--cor-branco) !important;
    background-color: var(--cor-vermelho) !important;
    white-space: nowrap;

    :hover {
        background-color: var(--cor-vermelho-escuro) !important;
    }

    :active {
        background-color: var(--cor-vermelho-claro) !important;
    }
`;