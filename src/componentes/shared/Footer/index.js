import React from 'react';
import { Wrapper } from './index.style';

const Footer = ({ style }) => {
  return (
    <Wrapper className='fluid-text-small-1' style={style} data-cy="footer">
      This is a fake website.
    </Wrapper>
  );
}

export default Footer;