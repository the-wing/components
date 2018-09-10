import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withConsole } from '@storybook/addon-console';
import { Transition } from 'react-spring';
import Box from 'ui/Box/Box';
import Chip from 'ui/Chip/Chip';

const listOfChips = ['Doritos', 'Dirty River', 'Lays', 'Pringles'];

storiesOf('Chip', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('default', () => <Chip text="Doritos" onRemove={action('onRemove')} />)
  .add('readonly', () => <Chip text="Dirty River" readonly />)
  .add('color', () => <Chip text="Lays" color="panache" readonly />)
  .add('list of chips', () => (
    <Box wrap>
      <Transition
        keys={listOfChips.map(chip => chip)}
        from={{ opacity: 0, transform: 'scale(0)' }}
        enter={{ opacity: 1, transform: 'scale(1)' }}
        leave={{ opacity: 0, transform: 'scale(0)' }}
      >
        {styles => {
          return listOfChips.map(chip => <Chip text={chip} styles={styles} readonly />);
        }}
      </Transition>
    </Box>
  ));
