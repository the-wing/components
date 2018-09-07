import React, { Fragment, PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { animated, Transition } from 'react-spring';

import { responsive } from 'utils';


const drawerIPhoneSyles = height => (`
  height: ${height}vh;

  > div {
    min-height: ${height}vh;
  }
`);

const Backdrop = styled.div`
  display: block;
  background: ${props => props.backdropBgColor || 'transparent'};
  height: 100vh;
  position: fixed;
  width: 100vw;
  opacity: 1;
  z-index: 99;
`;

const StyledDrawer = styled(({ isOpen, left, width, ...rest }) => <animated.div {...rest} />)`
  background: white;
  box-shadow: rgba(196, 186, 170, 0.1) ${props => props.left ? '3px' : '-3px'} 0px 10px 0px;
  left: auto;
  height: 100vh;
  overflow-y: scroll;
  position: fixed;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  ${props => (props.left ? 'left' : 'right')}: 0;
  ${props => (props.width ? responsive('width', 'width') : 'width: 304px')};
  z-index: 100;

  > div {
    min-height: 100vh;
  }

  // iPhone 6
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
   ${drawerIPhoneSyles(90)}
  }

  // iPhone 6 Plus
  @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 3) {
   ${drawerIPhoneSyles(90)}
  }

  // iPhone X
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
   ${drawerIPhoneSyles(85)}
  }
`;

class Drawer extends PureComponent {
  state = {
    isOpen: this.props.isOpen,
  };

  onClose = () => {
    const { onClose } = this.props;

    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }), () => {
      if (onClose) {
        onClose();
      }
    });
  }

  render() {
    const { backdropBgColor, children, left, onClose, width } = this.props;

    return (
      <Fragment>
        {this.state.isOpen && <Backdrop backdropBgColor={backdropBgColor} />}
        <StyledDrawer
          isOpen={this.state.isOpen}
          left={left}
          width={width}
        >
          {children({ onClose: this.onClose })}
        </StyledDrawer>
      </Fragment>
    );
  }
};

Drawer.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  position: PropTypes.oneOf(['left', 'right']),
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
};

Drawer.defaultProps = {
  isOpen: false,
  left: false,
  onClose: null,
  width: ['100%', '400px']
};

export default Drawer;