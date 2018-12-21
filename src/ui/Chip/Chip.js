import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';
import theme from 'theme';

import Button from 'ui/Button/Button';
import Icon from 'ui/Icon/Icon';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.theme.colors[props.color] ? props.theme.colors[props.color].main : 'transparent'};
  border: ${props =>
    props.dark ? props.theme.colors[props.color].contrast : '1px solid rgba(7, 36, 79, 0.2)'};
  border-radius: ${rem('22px')};
  height: ${props => (props.small ? rem('29px') : rem('32px'))};
  margin-right: ${rem('5px')};
  margin-bottom: ${props => (props.noMarginBottom ? '0' : rem('11px'))};
`;

const Text = styled.span`
  display: flex;
  flex-grow: 1;
  padding: 0 ${rem('16px')};
  align-content: center;
  font-family: ${props => props.theme.text[props.variant || 'primary']};
  font-size: ${rem('13px')};
  color: ${props =>
    props.dark ? props.theme.colors[props.color].contrast : props.theme.colors.solitude.main};
`;

const IconContainer = styled.div`
  margin-right: ${rem('16px')};
`;

const StyledIcon = styled(Icon)`
  color: ${props =>
    props.dark ? props.theme.colors[props.color].contrast : props.theme.colors.solitude.main};
`;

const Chip = ({ dark, readonly, color, noMarginBottom, onRemove, small, style, text }) => (
  <Container
    dark={dark}
    key={text}
    color={color}
    noMarginBottom={noMarginBottom}
    style={style}
    small
  >
    <Text dark={dark} color={color}>
      {text}
    </Text>
    {!readonly && (
      <IconContainer>
        <Button onClick={onRemove} transparent>
          <StyledIcon
            color={color}
            dark={dark}
            size={10}
            name="close"
            style={{ marginTop: '2.7px' }}
            weight="800"
          />
        </Button>
      </IconContainer>
    )}
  </Container>
);
Chip.propTypes = {
  dark: PropTypes.bool,
  readonly: PropTypes.bool,
  color: PropTypes.oneOf(Object.keys(theme.colors)),
  noMarginBottom: PropTypes.bool,
  small: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onRemove: PropTypes.func,
};

Chip.defaultProps = {
  dark: false,
  readonly: false,
  color: 'pink',
  margin: null,
  noMarginBottom: false,
  onRemove: null,
  small: false,
};

export default Chip;
