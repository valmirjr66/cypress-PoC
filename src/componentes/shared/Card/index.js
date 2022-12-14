import React from 'react';
import PropTypes from 'prop-types';
import { Card as DefaultCard } from 'semantic-ui-react';

const Card = ({ imageUrl, header, meta, description }) => {
    return (
        <DefaultCard
            image={imageUrl}
            header={header}
            meta={meta}
            description={description}
        />
    );
}

Card.propTypes = {
    header: PropTypes.string.isRequired,
    meta: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Card;