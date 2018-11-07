import React from 'react';
import { storiesOf } from '@storybook/react';
import Menu from 'ui/Menu/Menu';

const options = [
  {
    name: 'Text',
  },
  {
    name: 'More Text',
    selected: true,
  },
  {
    name: 'Omg even more text',
  },
  {
    name: 'Seriously have we reached the limit yet',
  },
  {
    name: 'Nope not yet',
  },
  {
    name: 'Need more text',
  },
  {
    name: 'Huzzah',
  },
];

storiesOf('Menu', module).add('default', () => <Menu options={options} />);
