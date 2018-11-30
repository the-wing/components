import React from 'react';
import { storiesOf } from '@storybook/react';
import Counter from 'ui/Counter/Counter';

storiesOf('Counter', module)
  .add('default', () => <Counter currentLength={10} maxLength={100} />)
  .add('error', () => <Counter currentLength={10} maxLength={100} error />)
  .add('currentLength > maxLength', () => <Counter currentLength={200} maxLength={100} />);
