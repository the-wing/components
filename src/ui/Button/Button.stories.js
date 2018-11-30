import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Box from 'ui/Box/Box';
import Button from 'ui/Button/Button';
import Icon from 'ui/Icon/Icon';
import Text from 'ui/Text/Text';

storiesOf('Button', module)
  .add('default', () => <Button onClick={action('clicked')}>Default Button</Button>)
  .add('bordered', () => (
    <Button onClick={action('clicked')} bordered>
      Bordered Button
    </Button>
  ))
  .add('outlined', () => (
    <Button onClick={action('clicked')} outlined>
      Outlined Button
    </Button>
  ))
  .add('uppercase', () => (
    <Button onClick={action('clicked')} uppercase>
      Uppercase Button
    </Button>
  ))
  .add('disabled', () => (
    <Button onClick={action('clicked')} disabled>
      Disabled Button
    </Button>
  ))
  .add('transparent', () => (
    <Button onClick={action('clicked')} transparent>
      Transparent Button
    </Button>
  ))
  .add('with icon', () => (
    <Button onClick={action('clicked')} transparent>
      <Icon name="close" size={19} color="terracota" />
    </Button>
  ))
  .add('with icon and text', () => (
    <Button
      color="terracota"
      onClick={action('clicked')}
      height="auto"
      lineHeight="22px"
      transparent
    >
      <Box display="flex">
        <Icon name="add" size={10} color="terracota" />
        <Text color="terracota" size={13 / 16} style={{ marginLeft: '0.625rem' }}>
          Add occupation
        </Text>
      </Box>
    </Button>
  ));
