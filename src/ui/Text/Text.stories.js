import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from 'ui/Text/Text';

storiesOf('UI/Text', module)
  .add('default', () => <Text>Gender is an illusion.</Text>)
  .add('secondary', () => <Text variant="secondary">Gender is an illusion.</Text>)
  .add('title', () => <Text variant="title">Gender is an illusion.</Text>)
  .add('size', () => <Text size="5.5">Gender is an illusion.</Text>);
