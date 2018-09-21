import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { Label } from 'ui/Forms';

storiesOf('Label', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('default', () => <Label htmlFor="something" text="Something" />)
  .add('error', () => <Label htmlFor="error" text="Error State" error="I have an error" />);
