import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Chip from 'ui/Chip/Chip';

const listOfChips = ['Doritos', 'Dirty River', 'Lays', 'Pringles'];

storiesOf('UI/Chip', module)
  .add('default', () => <Chip text="Doritos" onRemove={action('onRemove')} />)
  .add('readonly', () => <Chip text="Dirty River" readonly />)
  .add('color', () => <Chip text="Lays" color="panache" readonly />)
  .add('dark', () => <Chip text="Some other chip" color="terracota" dark />)
  .add('list of chips', () => (
    <Fragment>
      {listOfChips.map(chip => (
        <Chip key={chip} text={chip} readonly />
      ))}
    </Fragment>
  ));
