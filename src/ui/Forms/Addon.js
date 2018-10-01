import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { StyledFormField, default as FormField } from './FormField';

const StyledAddon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding-right: ${props => props.gutter};
  border-bottom: ${props =>
    props.noBorder
      ? '0px solid transparent'
      : `1px solid ${props.theme.colors[props.error ? 'red' : 'grayChateau'].main}`};
`;

const Addon = ({ children, error, gutter, noBorder }) => (
  <StyledAddon error={error} noBorder={noBorder} gutter={gutter}>
    {children}
  </StyledAddon>
);

Addon.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.bool,
  gutter: PropTypes.string,
  noBorder: PropTypes.bool,
};

Addon.defaultProps = {
  error: false,
  gutter: '0px',
  noBorder: false,
};

export default Addon;
