import React from 'react';
import { Dropdown as DefaultDropdown } from 'semantic-ui-react';
import { Label, Wrapper } from './index.style';

const Dropdown = ({ label, placeholder, options }) => {
    return (
        <Wrapper>
            <Label>{label}</Label>
            <DefaultDropdown
                selection
                placeholder={placeholder}
                options={options}
            />
        </Wrapper>
    );
}

export default Dropdown;