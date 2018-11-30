import React from 'react';
import { storiesOf } from '@storybook/react';
import ListItem from 'ui/ListItem/ListItem';

storiesOf('ListItem', module)
  .add('default', () => <ListItem>List Item</ListItem>)
  .add('with icon', () => <ListItem icon="location">List Item</ListItem>)
  .add('with underline', () => <ListItem underline>List Item</ListItem>)
  .add('with icon and underline', () => (
    <ListItem icon="location" underline>
      List Item
    </ListItem>
  ));
