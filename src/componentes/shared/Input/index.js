import PropTypes from 'prop-types';
import React from 'react';
import { DateInput } from 'semantic-ui-calendar-react';
import { Input as DefaultInput } from 'semantic-ui-react';

const Input = ({ icon, mask, type, error, size, label, fluid, onChange, placeholder, value, loading, readOnly, maxLength, maxDate, inverted }) => {
    const defaultOnChangeFunction = (value) => {
        if (onChange)
            onChange(value);
    }

    switch (mask) {
        case 'date':
            return (
                <DateInput
                    animation='zoom'
                    hideMobileKeyboard
                    popupPosition='bottom left'
                    dateFormat='DD/MM/YYYY'
                    startMode='year'
                    iconPosition="left"
                    onChange={(event, { value }) => { defaultOnChangeFunction(value) }}
                    value={value}
                    loading={loading}
                    error={error}
                    inverted={inverted}
                    fluid={fluid}
                    size={size}
                    label={label}
                    readOnly={readOnly}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    closable
                    maxDate={maxDate}
                />
            );
        default:
            return (
                <DefaultInput
                    icon={icon}
                    fluid={fluid}
                    error={error}
                    inverted={inverted}
                    size={size}
                    label={label}
                    placeholder={placeholder}
                    value={value}
                    readOnly={readOnly}
                    loading={loading}
                    onChange={(e, { value }) => defaultOnChangeFunction(value)}
                    maxLength={maxLength}
                    type={type}
                />
            );
    }
}

Input.propTypes = {
    mask: PropTypes.oneOf(['date']),
    error: PropTypes.bool,
    size: PropTypes.oneOf(['mini', 'small', 'large', 'big', 'huge', 'massive']).isRequired,
    fluid: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    loading: PropTypes.bool,
    readOnly: PropTypes.bool,
    maxLength: PropTypes.number,
    maxDate: PropTypes.string,
    inverted: PropTypes.bool
}

Input.defaultProps = {
    onChange: () => { },
    placeholder: ''
}

export default Input;