import React from 'react';
import { TagBody } from './index.style';

const Tag = ({ children, ...Props }) => (
    <TagBody {...Props}>{children}</TagBody>
);

export default Tag;