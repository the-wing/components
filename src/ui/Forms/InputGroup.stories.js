import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { FormField, Input, InputGroup, Label } from 'ui/Forms';
import Box from 'ui/Box/Box';
import SocialIcon from 'ui/SocialIcon/SocialIcon';

storiesOf('InputGroup', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('default', () => (
    <InputGroup>
      <FormField>
        <Label htmlFor="id1" text="Label 1" />
        <Input id="id1" />
      </FormField>
      <FormField>
        <Label htmlFor="id1" text="Label 1" />
        <Input id="id1" />
      </FormField>
    </InputGroup>
  ));
