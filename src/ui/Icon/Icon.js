import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { responsive } from 'utils';

const IconText = styled.i`
  color: ${props =>
    props.theme.colors[props.color] ? props.theme.colors[props.color].main : 'inherit'};
  ${responsive('font-size', 'size', value => `${value}px`)};
  ${props => (props.display ? responsive('display', 'display') : '')};

  :before {
    font-weight: ${props => (props.weight ? `${props.weight} !important` : 'normal')};
  }
`;

const Icon = ({ name, color, size, className, ...props }) => (
  <IconText color={color} size={size} className={`icon-${name} ${className}`} {...props} />
);

Icon.propTypes = {
  display: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
};

Icon.defaultProps = {
  className: '',
  display: null,
  color: null,
  size: 30,
};

export default Icon;
