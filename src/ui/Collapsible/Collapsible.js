import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Collapsible extends PureComponent {
  state = {
    isOpen: false,
  };

  toggle = () => {
    const { onToggle } = this.props;

    this.setState(
      prevState => ({ isOpen: !prevState.isOpen }),
      () => {
        if (onToggle) {
          onToggle();
        }
      }
    );
  };

  render() {
    const { children, trigger } = this.props;

    return (
      <Fragment>
        {trigger({ isOpen: this.state.isOpen, toggle: this.toggle })}
        {children({ isOpen: this.state.isOpen })}
      </Fragment>
    );
  }
}

Collapsible.propTypes = {
  children: PropTypes.func.isRequired,
  trigger: PropTypes.func.isRequired,
};

export default Collapsible;
