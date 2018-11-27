import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';

import { responsive } from 'utils';

const Button = styled.button`
  background-color: ${props =>
    props.outlined || !props.theme.colors[props.color] || props.transparent
      ? 'transparent'
      : props.theme.colors[props.color].main};
  border: ${props =>
    props.bordered || props.outlined
      ? `1px solid ${props.theme.colors[props.outlined ? props.color : 'black'].main}`
      : 'none'};
  color: ${props =>
    props.theme.colors[props.color]
      ? props.theme.colors[props.color][props.outlined || props.transparent ? 'main' : 'contrast']
      : 'inherit'};
  cursor: pointer;
  font-family: ${props =>
    props.variant ? props.theme.text[props.variant] : props.theme.text.secondary};
  ${props =>
    props.size
      ? responsive('font-size', 'size', value => `${value}px`)
      : 'font-size: calc(13 / 16 * 1rem)'};
  font-weight: ${props => (props.weight ? props.weight : 800)};
  letter-spacing: ${props => `${props.spacing ? rem(`${props.spacing}px`) : rem('2px')}`};
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
  lineHeight: PropTypes.string,
  uppercase: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  transparent: PropTypes.bool,
  type: PropTypes.string,
};

Button.defaultProps = {
  color: 'grannyApple',
  height: '47px',
  width: '100%',
  lineHeight: null,
  uppercase: true,
  size: null,
  transparent: false,
  type: 'button',
};

export default Button;
