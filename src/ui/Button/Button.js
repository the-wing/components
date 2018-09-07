import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { responsive } from 'utils';
import theme from 'theme';

const Button = styled.button`
  background-color: ${props =>
    props.outlined || !theme.colors[props.color] ? 'transparent' : theme.colors[props.color].main};
  border: ${props =>
    props.bordered || props.outlined
      ? `1px solid ${theme.colors[props.outlined ? props.color : 'black'].main}`
      : 'none'};
  color: ${props =>
    theme.colors[props.color]
      ? theme.colors[props.color][props.outlined ? 'main' : 'contrast']
      : 'inherit'};
  cursor: pointer;
  font-family: ${props => theme.text.secondary};
  ${props =>
    props.size
      ? responsive('font-size', 'size', value => `${value}px`)
      : 'font-size: calc(13 / 16 * 1rem)'};
  font-weight: 800;
  letter-spacing: 2px;
  line-height: ${props => (props.lineHeight ? props.lineHeight : 'calc(17 / 16 * 1rem)')};
  outline: none;
  padding: 0;
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};
  ${responsive('height', 'height')};
  ${responsive('width', 'width')};

  :disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  :hover {
    opacity: 0.5;
  }

  :active {
    opacity: 0.75;
  }
`;

Button.propTypes = {
  bordered: PropTypes.bool,
  outlined: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  uppercase: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
};

Button.defaultProps = {
  color: 'grannyApple',
  height: '47px',
  width: '100%',
  uppercase: true,
  size: null,
};

export default Button;
