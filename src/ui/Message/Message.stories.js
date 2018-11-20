import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import Message from 'ui/Message/Message';

storiesOf('Message', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('default', () => <Message>Text is here. Text is there. Text is everywhere.</Message>);
