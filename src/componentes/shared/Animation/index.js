import React from 'react';
import Lottie from "react-lottie";
import PropTypes from 'prop-types';

const Animation = ({ name, size, loop, paused, stopped, autoplay, slice, style }) => {
  return (
    <Lottie
      isClickToPauseDisabled
      options={{
        loop: loop,
        autoplay: autoplay,
        animationData: require(`../../../shared/Lotties/${name}.json`),
        rendererSettings: {
          preserveAspectRatio: slice ? 'xMidYMid slice' : ''
        }
      }}
      isStopped={stopped}
      isPaused={paused}
      height={size}
      width={size}
      style={style}
    />
  );
}

Animation.propTypes = {
  name: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  loop: PropTypes.bool,
  autoplay: PropTypes.bool,
  paused: PropTypes.bool,
  stopped: PropTypes.bool
}

Animation.defaultProps = {
  name: 'confirm',
  loop: false,
  autoplay: true,
  paused: false,
  stopped: false,
}

export default Animation;