import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { TypeAhead } from 'ui/Forms';

const options = ['Cullen', 'Lina', 'Rae', 'Jamie'];

storiesOf('TypeAhead', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('default', () => <TypeAhead options={options} placeholder="Placeholder Text" />);
