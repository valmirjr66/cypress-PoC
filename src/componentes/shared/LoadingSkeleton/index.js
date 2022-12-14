import PropTypes from 'prop-types';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingSkeleton = ({ height }) => {
    return <Skeleton height={height} />;
}

LoadingSkeleton.propTypes = {
    height: PropTypes.number.isRequired
}

export default LoadingSkeleton;