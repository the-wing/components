import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import styled from 'styled-components';
import Carousel from 'ui/Carousel/Carousel';

const Page = styled.div`
  background: ${props => props.theme.colors.linen.main};
  height: 100vh;
  padding: 2em 0;
`;

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;

const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 150px;
  background: white;
  border: 1px solid #d28c0e;
`;

storiesOf('Carousel', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('default', () => (
    <Page>
      <Container>
        <Carousel>
          <Slide>Slide 1 </Slide>
          <Slide>Slide 2 </Slide>
          <Slide>Slide 3</Slide>
          <Slide>Slide 4</Slide>
        </Carousel>
      </Container>
    </Page>
  ));
