import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import Icon from 'ui/Icon/Icon';

storiesOf('Icon', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('close', () => <Icon name="close" />);
