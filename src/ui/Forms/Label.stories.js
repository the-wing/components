import React from 'react';
import { storiesOf } from '@storybook/react';
import { Label } from 'ui/Forms';

storiesOf('Label', module)
  .add('default', () => <Label htmlFor="something" text="Something" />)
  .add('error', () => <Label htmlFor="error" text="Error State" error />);
