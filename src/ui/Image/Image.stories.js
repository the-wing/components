import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import Image from 'ui/Image/Image';
import theme from 'theme';

storiesOf('Image', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('with url', () => <Image url={theme.defaultAvatar} />)
  .add('circle', () => <Image url={theme.defaultAvatar} circle />)
  .add('with different width and height', () => (
    <Image url={theme.defaultAvatar} circle width={125} height={125} />
  ))
  .add('circle, with different width and height, hover text', () => (
    <Image url={theme.defaultAvatar} hoverText="Edit" width={125} height={125} circle />
  ));
