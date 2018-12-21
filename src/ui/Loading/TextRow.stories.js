import React from 'react';
import { storiesOf } from '@storybook/react';
import TextRow from 'ui/Loading/TextRow';

storiesOf('UI/Loading: TextRow', module).add('width: 200, height: 20', () => (
  <TextRow style={{ width: 200, height: 20 }} />
));
