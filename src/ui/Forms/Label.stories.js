import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { Label } from 'ui/Forms';

storiesOf('Label', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('default', () => <Label htmlFor="something" text="Something" />);
