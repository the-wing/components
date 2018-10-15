import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import styled from 'styled-components';
import Carousel from 'ui/Carousel/Carousel';
import theme from 'theme';

const Page = styled.div`
  background: ${props => props.theme.colors.linen.main};
  height: 100vh;
  padding: 2em 0;
`;

const Container = styled.div`
  width: 350px;
  margin: 0 auto;
`;

const Slide = () => <img src="https://via.placeholder.com/350x150" />;

storiesOf('Carousel', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('default', () => (
    <Page>
      <Container>
        <Carousel>
          <Slide />
          <Slide />
          <Slide />
        </Carousel>
      </Container>
    </Page>
  ))
  .add('infinite', () => (
    <Page>
      <Container>
        <Carousel infinite>
          <Slide />
          <Slide />
          <Slide />
        </Carousel>
      </Container>
    </Page>
  ))
  .add('dots', () => (
    <Page>
      <Container>
        <Carousel infinite dots>
          <Slide />
          <Slide />
          <Slide />
        </Carousel>
      </Container>
    </Page>
  ))
  .add('arrows', () => (
    <Page>
      <Container>
        <Carousel infinite dots arrows>
          <Slide />
          <Slide />
          <Slide />
        </Carousel>
      </Container>
    </Page>
  ));
