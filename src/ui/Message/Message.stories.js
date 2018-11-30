import React from 'react';
import { storiesOf } from '@storybook/react';
import Message from 'ui/Message/Message';

storiesOf('Message', module).add('default', () => (
  <Message>Text is here. Text is there. Text is everywhere.</Message>
));
