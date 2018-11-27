import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { rem } from 'polished';
import errorGear from 'assets/img/error-gear.svg';

const ErrorGearImage = styled.img`
  height: ${rem('78px')};
  margin-bottom: ${rem('32px')};
  margin-left: ${rem('12px')};
  margin-top: ${rem('28px')};
  width: ${rem('84px')};
`;

const MainText = styled.span`
  color: ${props => props.theme.colors.solitude.main};
  font-weight: 600;
  line-height: ${rem('24px')};
  font-size: ${rem('16px')};
`;

const OffText = styled.span`
  color: ${props => props.theme.colors.solitude.main};
  font-weight: 400;
  line-height: ${rem('22px')};
  font-size: ${rem('15px')};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListLoadingErrorState = ({ children, mainText }) => (
  <Container>
    <ErrorGearImage src={errorGear} />
    <MainText>{mainText}</MainText>
    <OffText>Refresh the page and try again.</OffText>
    {children}
  </Container>
);

ListLoadingErrorState.propTypes = {
  mainText: PropTypes.string.isRequired,
};

export default ListLoadingErrorState;
