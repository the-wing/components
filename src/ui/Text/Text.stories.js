import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import Text from 'ui/Text/Text';

storiesOf('Text', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('default', () => <Text>Gender is an illusion.</Text>)
  .add('secondary', () => <Text variant="secondary">Gender is an illusion.</Text>)
  .add('title', () => <Text variant="title">Gender is an illusion.</Text>);
