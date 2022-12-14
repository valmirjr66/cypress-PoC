import styled from 'styled-components';

export const AnimationWrapper = styled.div`
    height: 100vh;
`;

export const CreditsWrapper = styled.div`
    margin-right: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const CreditsTextWrapper = styled.div`
    text-align: center;
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
`;

export const RecommendationWrapper = styled.div`
    width: 900px;
    margin-top: 40px;

    @media only screen and (min-device-width: 1440px) {
        max-width: 500px;
    }
`;

export const Wrapper = styled.div`
`;

export const Container = styled.div`
    text-align: left;
    margin-top: 40px;
    border: 1px solid var(--cor-cinza-claro);
    padding: 16px;
    
    @media only screen and (min-device-width: 1440px) {
        margin-right: 40px;
    }

    @media only screen and (min-device-width: 900px) {
        padding: 40px;
        width: 900px;
    }
`;

export const CoverImage = styled.img`
    width: 100%;
`;

export const ProfilePicture = styled.img`
    border-radius: 50%;
    width: 80px;
    height: 80px;
`;

export const TitleWrapper = styled.span`
    line-height: 1;
    display: block;
    margin-bottom: 16px;
    font-weight: bold;
`;

export const HeadlineWrapper = styled.span`
    line-height: 1;
    display: block;
    margin-bottom: 32px;
    color: var(--cor-cinza-escuro);
`;

export const MetadataWrapper = styled.span`
    display: flex;
    justify-content: space-between;
    color: var(--cor-cinza-escuro);
    margin-bottom: 32px;
    flex-wrap: wrap;
`;

export const TextWrapper = styled.div`
    padding-top: 16px;
    text-align: justify;
    display: block;
    margin-bottom: 80px;
    border-top: 1px var(--cor-cinza-claro-transparente) solid;
`;