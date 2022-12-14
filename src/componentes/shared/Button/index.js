import { ActionButton, PrimaryButton, PrimaryOutlinedButton, SecondaryButton, SuccessButton, CancelButton } from './index.style';
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, size, type, onClick, loading, children, ...Props }) => {
    const SelectedButton = ({ loading }) => {
        switch (type) {
            case 'action':
                return <ActionButton loading={loading} onClick={onClick} {...Props}>{children}</ActionButton>;
            case 'primary':
                return <PrimaryButton loading={loading} onClick={onClick} {...Props}>{children}</PrimaryButton>;
            case 'primary_outlined':
                return <PrimaryOutlinedButton loading={loading} onClick={onClick} {...Props}>{children}</PrimaryOutlinedButton>;
            case 'secondary':
                return <SecondaryButton loading={loading} onClick={onClick} {...Props}>{children}</SecondaryButton>;
            case 'success':
                return <SuccessButton loading={loading} onClick={onClick} {...Props}>{children}</SuccessButton>;
            case 'cancel':
                return <CancelButton loading={loading} onClick={onClick} {...Props}>{children}</CancelButton>;
            default:
                return <PrimaryButton loading={loading} onClick={onClick} {...Props}>{children}</PrimaryButton>;
        }
    }

    return (
        <SelectedButton loading={loading} style={{ width: '50%' }} size={size} />
    );
}

Button.propTypes = {
    size: PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']).isRequired,
    type: PropTypes.oneOf(['primary', 'primary_outlined', 'secondary', 'success', 'cancel']),
    onClick: PropTypes.func.isRequired
}

export default Button;