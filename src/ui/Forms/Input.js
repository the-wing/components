import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ErrorMessage from './ErrorMessage';

const Container = styled.span`
  display: flex;
  align-items: flex-end;
  background-color: transparent;
  color: ${props => props.theme.colors.solitude.main};
  flex: 1;
  font-family: ${props => props.theme.text.primary};
  font-size: calc((14 / 16) * 1rem);
  letter-spacing: 0.2px;
`;

const ContainerAsInput = Container.withComponent('input');

const StyledInput = styled(ContainerAsInput)`
  flex: 1;
  outline: none;
  resize: none;
  padding-bottom: 8px;
  padding-top: 8px;
  border: 0;
  border-bottom: ${props =>
    props.noBorder
      ? '0px solid transparent'
      : `1px solid ${props.theme.colors[props.error ? 'red' : 'grayChateau'].main}`};

  &:focus {
    border-bottom: ${props =>
      props.noBorder
        ? '0px solid transparent'
        : `1px solid ${props.theme.colors[props.error ? 'red' : 'solitude'].main}`};
    }
  }

  ::placeholder {
    color: ${props => props.theme.colors.grayChateau.main};
  }
`;

const PrependedValue = styled.div`
  font-family: ${props => props.theme.text.primary};
  font-size: calc((14 / 16) * 1rem);
  letter-spacing: 0.2px;
  color: ${props => props.theme.colors.grayChateau.main};
  padding-bottom: 8px;
  padding-top: 8px;
  border-bottom: ${props =>
    props.noBorder
      ? '0px solid transparent'
      : `1px solid ${
          props.theme.colors[props.error ? 'red' : props.active ? 'solitude' : 'grayChateau'].main
        }`};
  }
`;

const Input = ({ active, error, noBorder, placeholder, prependedValue, ...inputProps }) => {
  return (
    <Container>
      {prependedValue &&
        prependedValue.length > 0 && (
          <PrependedValue active={active} error={error} noBorder={noBorder}>
            {prependedValue}
          </PrependedValue>
        )}
      <StyledInput error={error} placeholder={placeholder} noBorder={noBorder} {...inputProps} />
    </Container>
  );
};

Input.propTypes = {
  active: PropTypes.bool,
  error: PropTypes.bool,
  noBorder: PropTypes.bool,
  placeholder: PropTypes.string,
  prependedValue: PropTypes.string,
};

Input.defaultProps = {
  active: false,
  error: false,
  noBorder: false,
  placeholder: null,
  prependedValue: null,
};

export default Input;
