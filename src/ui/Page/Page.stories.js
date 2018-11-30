import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Page from 'ui/Page/Page';
import { Media } from 'react-breakpoints';
import styled from 'styled-components';
import { rem } from 'polished';

const Content = styled.div`
  margin: 0 auto;
  padding: 2em 0;
  text-align: center;
`;

const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;
  height: ${rem('48px')}
  background: white;
  border-bottom: 1px solid ${props => props.theme.colors.pink.main};
  box-shadow: 0 2px 8px 0 rgba(195,186,170,0.14);

  @media ${props => props.theme.queries.tablet} {
    height: ${rem('85px')};
  }
`;

const props = {
  title: 'Hey Everybody',
  subtitle: 'Guess what?',
  description: "I'm about to explain something on this page. Get ready.",
};

storiesOf('Page', module)
  .add('default', () => (
    <Page>
      <Content>Gender is an illusion</Content>
    </Page>
  ))
  .add('with title', () => (
    <Page title={props.title}>
      <Content>Gender is an illusion</Content>
    </Page>
  ))
  .add('with title and subtitle', () => (
    <Page title={props.title} subtitle={props.subtitle}>
      <Content>Gender is an illusion</Content>
    </Page>
  ))
  .add('with title and description', () => (
    <Page title={props.title} description="Member since 2018">
      <Content>Gender is an illusion</Content>
    </Page>
  ))
  .add('with title and subtitle and description', () => (
    <Page title={props.title} subtitle={props.subtitle} description={props.description}>
      <Content>Gender is an illusion</Content>
    </Page>
  ))
  .add('with navMargin', () => (
    <Media>
      {({ breakpoints, currentBreakpoint }) => (
        <Fragment>
          <Nav>Pretend there is a nav bar here.</Nav>
          <Page
            title={props.title}
            subtitle={props.subtitle}
            navMargin={breakpoints[currentBreakpoint] >= breakpoints.tablet ? 85 : 48}
          >
            <Content>Gender is an illusion</Content>
          </Page>
        </Fragment>
      )}
    </Media>
  ));
