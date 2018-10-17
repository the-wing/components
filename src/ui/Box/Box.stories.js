import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import Box from 'ui/Box/Box';

storiesOf('Box', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('default', () => <Box>Box Default</Box>)
  .add('with color', () => <Box color="grannyApple">Box with color</Box>)
  .add('with margin set to number: 10', () => (
    <Box color="panache" margin={10}>
      Box with margin 10
    </Box>
  ))
  .add('with different margin values', () => (
    <Box color="roseFog" margin={{ top: 2, left: 5, bottom: 3, right: 8 }}>
      Box with different margin values
    </Box>
  ))
  .add('with padding set to number: 10', () => (
    <Box color="terracota" padding={10}>
      Box with padding 10
    </Box>
  ))
  .add('with different padding values', () => (
    <Box color="vermilion" padding={{ top: 2, left: 5, bottom: 7, right: 10 }}>
      Box with different padding values
    </Box>
  ))
  .add('with vertical padding values', () => (
    <Box color="vermilion" padding={{ vertical: 2 }}>
      Box with different padding values
    </Box>
  ))
  .add('with horizontal padding values', () => (
    <Box color="vermilion" padding={{ horizontal: 2 }}>
      Box with different padding values
    </Box>
  ))
  .add('with wrap', () => <Box wrap>Box with wrap</Box>);
