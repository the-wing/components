import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import Counter from 'ui/Counter/Counter';

storiesOf('Counter', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('default', () => <Counter currentLength={10} maxLength={100} />)
  .add('error', () => <Counter currentLength={10} maxLength={100} error />)
  .add('currentLength > maxLength', () => <Counter currentLength={200} maxLength={100} />);
