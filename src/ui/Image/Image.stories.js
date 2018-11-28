import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import Image from 'ui/Image/Image';

storiesOf('Image', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('with url', () => <Image url="assets/img/defaultAvatar.png" />)
  .add('circle', () => <Image url="assets/img/defaultAvatar.png" circle />)
  .add('with different width and height', () => (
    <Image url="assets/img/defaultAvatar.png" circle width={125} height={125} />
  ))
  .add('circle, with different width and height, hover text', () => (
    <Image url="assets/img/defaultAvatar.png" hoverText="Edit" width={125} height={125} circle />
  ));
