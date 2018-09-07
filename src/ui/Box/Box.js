import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import FlexView from 'react-flexview';

import theme from 'theme';
import { responsive } from 'utils';

const getMeasure = (cssProp, direction, props) => {
  const measure =
    props[cssProp][direction] ||
    props[cssProp][direction === 'top' || direction === 'bottom' ? 'vertical' : 'horizontal'] ||
    Number(props[cssProp]) ||
    0;

  return typeof measure === 'number' ? `${measure}rem` : measure;
};

const getSpacing = cssProp => props => css`
  ${['top', 'right', 'bottom', 'left']
    .map(direction => `${cssProp}-${direction}: ${getMeasure(cssProp, direction, props)}`)
    .join('\n')};
`;

const Box = styled(FlexView)`
  background-color: ${props =>
    theme.colors[props.color] ? theme.colors[props.color].main : 'transparent'};
  ${props => props.margin && getSpacing('margin')};
  ${props => props.padding && getSpacing('padding')};
  ${props => (props.display ? responsive('display', 'display') : '')};
`;

const spacingPropType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.shape({
    bottom: PropTypes.number,
    horizontal: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
    top: PropTypes.number,
    vertical: PropTypes.number,
  }),
]);

Box.propTypes = {
  color: PropTypes.oneOf(Object.keys(theme.colors)),
  margin: spacingPropType,
  padding: spacingPropType,
};

Box.defaultProps = {
  display: null,
  color: null,
  margin: null,
  padding: null,
};

export default Box;
