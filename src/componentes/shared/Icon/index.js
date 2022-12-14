import PropTypes from 'prop-types';
import React from 'react';
import { Icon as DefaultIcon, Popup } from 'semantic-ui-react';

const Icon = ({ size, name, inverted, color, style, popupContent, popupPosition, ...Rest }) => {
    return (

        popupContent ? <Popup content={popupContent} position={popupPosition} trigger={
            <DefaultIcon
                {...Rest}
                name={name}
                inverted={inverted}
                style={Object.assign({ color: color, fontSize: size }, style)}
            />
        } /> : <DefaultIcon
            {...Rest}
            name={name}
            inverted={inverted}
            style={Object.assign({ color: color, fontSize: size }, style)}
        />

    );
}

Icon.propTypes = {
    size: PropTypes.number,
    name: PropTypes.string.isRequired,
    inverted: PropTypes.bool,
    color: PropTypes.string,
    popupContent: PropTypes.any,
    popupPosition: PropTypes.oneOf(
        ['top center', 'top right', 'top left', 'right center', 'left center', 'bottom center', 'bottom right', 'bottom left']
    )
}

Icon.defaultProps = {
    size: 14,
    color: 'var(--cor-preto)',
    style: {},
    popupPosition: 'top left'
}

export default Icon;