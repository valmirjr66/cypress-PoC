import { Container } from './index.style';
import React from 'react';

const Box = ({ height, children, style }) => {
  return (
    <Container style={{ height: height, ...style }}>
      {children}
    </Container >
  );
}

export default Box;