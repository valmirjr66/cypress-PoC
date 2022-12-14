import styled from 'styled-components';

export const Wrapper = styled.div`
`;

export const SkeletonWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SkeletonContainer = styled.div`
    width: ${props => props.fluid ? '100%' : '75vw'};

    @media only screen and (max-device-width: 650px) {
        width: 100vw;
    }

    margin-bottom: 32px;
    align-self: center;
`;

export const OuterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* width: 100%; */
`;

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Image = styled.img`
    align-self: center;
`;