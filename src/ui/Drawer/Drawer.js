import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { animated, Transition } from 'react-spring';
import { Easing } from 'react-spring/dist/addons';

import { responsive } from 'utils';

const drawerIPhoneSyles = height => `
  height: ${height}vh;

  > div {
    min-height: ${height}vh;
  }
`;

const Backdrop = styled.div`
  display: block;
  background: ${props => props.backdropBgColor || 'transparent'};
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  opacity: 1;
  z-index: 99;
`;

const StyledDrawer = styled(({ isOpen, left, width, ...rest }) => <animated.div {...rest} />)`
  background: white;
  box-shadow: rgba(196, 186, 170, 0.1) ${props => (props.left ? '3px' : '-3px')} 0px 10px 0px;
  left: auto;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  ${props => (props.left ? 'left' : 'right')}: 0;
  ${props => (props.width ? responsive('width', 'width') : 'width: 304px')};
  z-index: 100;

  > div {
    min-height: 100vh;
  }

  // iPhone 6
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
    ${drawerIPhoneSyles(90)};
  }

  // iPhone 6 Plus
  @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 3) {
    ${drawerIPhoneSyles(90)};
  }

  // iPhone X
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    ${drawerIPhoneSyles(85)};
  }
`;

const Drawer = ({ backdropBgColor, children, isOpen, left, width }) => (
  <Fragment>
    {isOpen && <Backdrop backdropBgColor={backdropBgColor} />}
    {isOpen && (
      <Transition
        native
        config={{
          ...{ tension: 280, friction: 60 },
          duration: 300,
          easing: Easing.inOut,
        }}
        from={{ transform: left ? 'translateX(-100%)' : 'translateX(100%)' }}
        enter={{ transform: 'translateX(0)' }}
        leave={{ transform: left ? 'translateX(-100%)' : 'translateX(100%)' }}
      >
        {style => (
          <StyledDrawer left={left} width={width} style={style}>
            {children}
          </StyledDrawer>
        )}
      </Transition>
    )}
  </Fragment>
);

Drawer.propTypes = {
  isOpen: PropTypes.bool,
  position: PropTypes.oneOf(['left', 'right']),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
};

Drawer.defaultProps = {
  isOpen: false,
  left: false,
  width: ['100%', '400px'],
};

export default Drawer;
