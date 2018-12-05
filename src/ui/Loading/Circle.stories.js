import React from 'react';
import { storiesOf } from '@storybook/react';
import Circle from 'ui/Loading/Circle';

storiesOf('Loading: Circle', module).add('width: 105, height: 105', () => (
  <Circle style={{ width: 105, height: 105 }} />
));
