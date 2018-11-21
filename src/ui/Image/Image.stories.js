import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import styled from 'styled-components';
import Image from 'ui/Image/Image';

const Container = styled.div`
  width: 32px;
  height: 32px;
`;

storiesOf('Image', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('with url', () => (
    <Container>
      <Image url="assets/img/defaultAvatar.png" />
    </Container>
  ))
  .add('circle', () => (
    <Container>
      <Image url="assets/img/defaultAvatar.png" circle />
    </Container>
  ))
  .add('with width and height', () => (
    <Image url="assets/img/defaultAvatar.png" circle width={125} height={125} />
  ))
  .add('circle, with width and height, hover text', () => (
    <Image url="assets/img/defaultAvatar.png" hoverText="Edit" width={125} height={125} circle />
  ));
