import React from 'react';
import { Popup as DefaultPopup } from 'semantic-ui-react';

const Popup = ({ trigger, on, pinned, children }) => (
    <DefaultPopup
        position='top center'
        content={children}
        trigger={trigger}
        on={on}
        pinned={pinned}
    />
);

export default Popup;