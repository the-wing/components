import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import DropZone from 'ui/DropZone/DropZone';

storiesOf('DropZone', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('default', () => <DropZone />)
  .add('children', () => <DropZone>Hello there. Please upload something!</DropZone>);
