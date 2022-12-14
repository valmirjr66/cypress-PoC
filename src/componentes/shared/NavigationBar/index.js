import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import MenuItems from '../../../shared/Enums/MenuItems';
import Categories from '../../../shared/Util/categories';
import DrawerMenu from '../../DrawerMenu';
import Icon from '../Icon';
import { InlineWrapper, TitleWrapper, Wrapper } from './index.style';

const NavigationBar = ({ activeItem }) => {
  const [visibleMenu, setVisibleMenu] = useState(false);

  const MenuItem = ({ id, onClick, to, fitted, children }) => {
    return (to ?
      <Link to={to}>
        <Menu.Item
          name={`${id}`}
          content={children}
          active={activeItem === id}
          fitted={fitted}
        />
      </Link>
      :
      <Menu.Item
        name={`${id}`}
        content={children}
        active={activeItem === id}
        onClick={onClick}
        fitted={fitted}
      />
    );
  };

  return (
    <>
      <DrawerMenu
        items={Categories}
        visible={visibleMenu}
        setVisible={setVisibleMenu}
      />
      <InlineWrapper>
        <Wrapper style={{ paddingTop: 32, paddingBottom: 8 }}>
          <TitleWrapper as='a' href='/home'>
            {"Fake Website"}
          </TitleWrapper>
        </Wrapper>
        <Menu tabular size='large' style={{ display: 'flex', justifyContent: 'flex-start' }} data-cy="menu-bar">
          <MenuItem fitted id={MenuItems.DrawerPusher} onClick={() => setVisibleMenu(true)}>
            <Icon
              name='sidebar'
              size={24}
              style={{ cursor: 'pointer' }}
            />
          </MenuItem>
          <MenuItem id={MenuItems.Home} to='/home'>Home</MenuItem>
          <MenuItem id={MenuItems.AboutUs} to='/about-us'>About Us</MenuItem>
          {
            activeItem === MenuItems.Reading ?
              <MenuItem id={MenuItems.Reading}>Reading</MenuItem> : null
          }
        </Menu>
      </InlineWrapper>
    </>
  );
}

export default NavigationBar;