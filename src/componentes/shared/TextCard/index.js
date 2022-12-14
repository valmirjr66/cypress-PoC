import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, ImageBox, InnerContainer, SubtitleBox, TitleBox, Wrapper } from './index.style';

const TextCard = ({ id, title, subtitle, coverImage, key, fluid }) => {
    return (
        <Container data-cy="item" key={key} as={Link} to={`/reading/${id}`} fluid={fluid}>
            <InnerContainer>
                <ImageBox src={coverImage} />
                <Wrapper style={{ padding: '10px 20px', minWidth: 300 }}>
                    <TitleBox className='fluid-text-medium-2'>{title}</TitleBox>
                    <SubtitleBox className='fluid-text-small-1'>{subtitle}</SubtitleBox>
                </Wrapper>
            </InnerContainer>
        </Container>
    );
}

TextCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    coverImage: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    fluid: PropTypes.bool
}

export default TextCard;