import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import styled from 'styled-components';
import { Media } from 'react-breakpoints';
import Carousel from 'ui/Carousel/Carousel';
import Card from 'ui/Card/Card';

const Page = styled.div`
  background: ${props => props.theme.colors.linen.main};
  height: 100vh;
  padding: 2em 0;
`;

const Container = styled.div`
  width: ${props =>
    props.currentBreakpoint === 'mobile' || props.currentBreakpoint === 'tablet'
      ? '100%'
      : '400px'};
  margin: 0 auto;
`;

const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  background: white;
  border: 1px solid #d28c0e;
`;

storiesOf('Carousel', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('default', () => (
    <Page>
      <Media>
        {({ currentBreakpoint }) => (
          <Container currentBreakpoint={currentBreakpoint}>
            <Carousel>
              <Slide>Slide 1 </Slide>
              <Slide>Slide 2 </Slide>
              <Slide>Slide 3</Slide>
              <Slide>Slide 4</Slide>
            </Carousel>
          </Container>
        )}
      </Media>
    </Page>
  ))
  .add('with centerPadding', () => (
    <Page>
      <Media>
        {({ currentBreakpoint }) => (
          <Container currentBreakpoint={currentBreakpoint}>
            <Carousel centerPadding="100px">
              <Slide>Slide 1 </Slide>
              <Slide>Slide 2 </Slide>
              <Slide>Slide 3</Slide>
              <Slide>Slide 4</Slide>
            </Carousel>
          </Container>
        )}
      </Media>
    </Page>
  ))
  .add('with responsiveSettings', () => (
    <Page>
      <Media>
        {({ currentBreakpoint }) => (
          <Container currentBreakpoint={currentBreakpoint}>
            <Carousel
              responsiveSettings={{
                desktopLarge: { centerPadding: '20px' },
                desktop: { centerPadding: '25px' },
                tablet: { centerPadding: '200px' },
                mobile: { centerPadding: '20px' },
              }}
            >
              <Slide>Slide 1 </Slide>
              <Slide>Slide 2 </Slide>
              <Slide>Slide 3</Slide>
              <Slide>Slide 4</Slide>
            </Carousel>
          </Container>
        )}
      </Media>
    </Page>
  ))
  .add('one slide', () => (
    <Page>
      <Media>
        {({ currentBreakpoint }) => (
          <Container currentBreakpoint={currentBreakpoint}>
            <Carousel>
              <Slide>Slide 1 </Slide>
            </Carousel>
          </Container>
        )}
      </Media>
    </Page>
  ))
  .add('with cards', () => (
    <Page>
      <Media>
        {({ currentBreakpoint }) => (
          <Container currentBreakpoint={currentBreakpoint}>
            <Carousel>
              <Card scalloped>Card 1</Card>
              <Card scalloped>Card 2</Card>
              <Card scalloped>Card 3</Card>
              <Card scalloped>Card 4</Card>
            </Carousel>
            <div>Some other thing</div>
          </Container>
        )}
      </Media>
    </Page>
  ));
