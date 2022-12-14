import PropTypes from 'prop-types';
import React from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';
import { ItemWrapper } from './index.style';

const DrawerMenu = ({ items, visible, setVisible }) => {
    return (
        <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width='thin'
        >
            {
                items.map(item => (
                    <Menu.Item
                        as='a'
                        href={`/by-category?category=${item.value}`}
                        style={{ textTransform: 'uppercase' }}
                        key={item.value}
                    >
                        <ItemWrapper>
                            {item.label}
                        </ItemWrapper>
                    </Menu.Item>
                ))
            }
        </Sidebar>
    );
}

DrawerMenu.propTypes = {
    items: PropTypes.array.isRequired,
    visible: PropTypes.bool.isRequired,
    setVisible: PropTypes.func.isRequired
}

export default DrawerMenu;