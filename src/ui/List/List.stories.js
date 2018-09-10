import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import List from 'ui/List/List';
import ListItem from 'ui/ListItem/ListItem';

storiesOf('List', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('default', () => (
    <List>
      <ListItem>Some text</ListItem>
      <ListItem>Some more text</ListItem>
      <ListItem>Even more text</ListItem>
    </List>
  ))
  .add('with icons', () => (
    <List>
      <ListItem icon="location">Some text</ListItem>
      <ListItem icon="homebase">Some more text</ListItem>
      <ListItem icon="anniversary">Even more text</ListItem>
    </List>
  ))
  .add('with underlined items', () => (
    <List>
      <ListItem underline>Some text</ListItem>
      <ListItem underline>Some more text</ListItem>
      <ListItem underline>Even more text</ListItem>
    </List>
  ))
  .add('with underlined items and icons', () => (
    <List>
      <ListItem icon="location" underline>
        Some text
      </ListItem>
      <ListItem icon="homebase" underline>
        Some more text
      </ListItem>
      <ListItem icon="anniversary" underline>
        Even more text
      </ListItem>
    </List>
  ));
