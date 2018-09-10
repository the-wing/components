import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { responsive } from 'utils';
import theme from 'theme';

const Text = styled.span`
  color: ${props =>
    props.theme.colors[props.color] ? props.theme.colors[props.color].main : 'inherit'};
  font-family: ${props => props.theme.text[props.variant || 'primary']};
  font-weight: ${props => props.weight};
  ${props => (props.margin ? responsive('margin', 'margin', value => `${value}rem`) : '')};
  ${props => props.align && responsive('text-align', 'align')};
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};

  ${props => (props.display ? responsive('display', 'display') : '')};
  ${props =>
    props.lineHeight ? responsive('line-height', 'lineHeight', value => `${value}px`) : ''};
  ${responsive('font-size', 'size', value => `${value}rem`)};
  ${responsive('letter-spacing', 'letterSpacing', value => (value && `${value}px`) || 'normal')};

  :hover {
    opacity: ${props => (props.onClick ? 0.3 : 1)};
  }
`;

Text.propTypes = {
  align: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.oneOf(['left', 'center', 'right'])),
  ]),
  color: PropTypes.oneOf(Object.keys(theme.colors)),
  letterSpacing: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  lineHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  variant: PropTypes.oneOf(['primary', 'secondary', 'title']),
  weight: PropTypes.number,
};

Text.defaultProps = {
  align: 'left',
  display: null,
  letterSpacing: 0,
  lineHeight: null,
  size: 1,
  variant: 'primary',
  weight: 400,
};

export default Text;
