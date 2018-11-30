import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Transition } from 'react-spring';
import Box from 'ui/Box/Box';
import Chip from 'ui/Chip/Chip';

const listOfChips = ['Doritos', 'Dirty River', 'Lays', 'Pringles'];

storiesOf('Chip', module)
  .add('default', () => <Chip text="Doritos" onRemove={action('onRemove')} />)
  .add('readonly', () => <Chip text="Dirty River" readonly />)
  .add('color', () => <Chip text="Lays" color="panache" readonly />)
  .add('list of chips', () => listOfChips.map(chip => <Chip key={chip} text={chip} readonly />));
