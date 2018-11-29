import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';

const StyledPage = styled.div`
  background: ${props =>
    props.bgColor ? props.theme.colors[props.bgColor].main : props.theme.colors.pink.main};
  height: 100vh;
  margin-top: ${props => rem(`${props.navMargin}px`)};
`;

const Header = styled.div`
  background: ${props => props.theme.colors.white.main};
  text-align: center;

  @media ${props => props.theme.queries.desktop} {
    text-align: left;
  }
`;

const HeaderContent = styled.div`
  padding-left: ${rem('16px')};
  padding-right: ${rem('16px')};
  padding-top: ${rem('38px')};
  padding-bottom: ${rem('38px')};
  max-width: ${rem('1200px')};
  margin: 0 auto;

  @media ${props => props.theme.queries.desktop} {
    padding: 0 ${rem('25px')};
    padding-top: ${rem('63px')};
    padding-bottom: ${rem('30px')};
  }
`;

const Title = styled.h1`
  font-family: ${props => props.theme.text.title};
  color: ${props => props.theme.colors.blueDark.main};
  font-size: ${rem('36px')};
  line-height: ${rem('55px')};
  letter-spacing: ${rem('0.75px')};
  font-weight: 400;
  text-transform: uppercase;
  margin: 0;

  @media ${props => props.theme.queries.desktop} {
    font-size: ${rem('54px')};
    line-height: ${rem('65px')};
    letter-spacing: 0;
  }
`;

const Subtitle = styled.div`
  display: none;
  color: ${props => props.theme.colors.blueDark.main};

  @media ${props => props.theme.queries.desktop} {
    display: block;
    font-size: ${rem('18px')};
    line-height: ${rem('23px')};
  }
`;

const Description = styled.div`
  color: ${props => props.theme.colors.friarGray.main};
  font-size: ${rem('14px')};
  line-height: ${rem('18px')};
  margin-top: ${rem('4px')};

  @media ${props => props.theme.queries.desktop} {
    font-size: ${rem('16px')};
    line-height: ${rem('19px')};
    margin-top: ${rem('6px')};
  }
`;

const Page = ({ bgColor, children, description, navMargin, subtitle, title }) => (
  <StyledPage bgColor={bgColor} navMargin={navMargin}>
    {(title || subtitle || description) && (
      <Header>
        <HeaderContent>
          {title && <Title>{title}</Title>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
          {description && <Description>{description}</Description>}
        </HeaderContent>
      </Header>
    )}
    {children}
  </StyledPage>
);

Page.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  navMargin: PropTypes.number,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

Page.defaultProps = {
  bgColor: null,
  navMargin: 0,
  subtitle: null,
  title: null,
};

export default Page;
