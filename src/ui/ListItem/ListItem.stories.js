import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import ListItem from 'ui/ListItem/ListItem';

storiesOf('ListItem', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('default', () => <ListItem>List Item</ListItem>)
  .add('with icon', () => <ListItem icon="location">List Item</ListItem>)
  .add('with underline', () => <ListItem underline>List Item</ListItem>)
  .add('with icon and underline', () => (
    <ListItem icon="location" underline>
      List Item
    </ListItem>
  ));
