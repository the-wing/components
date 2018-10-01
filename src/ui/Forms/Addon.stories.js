import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { Addon, FormField, Input, InputGroup, Label } from 'ui/Forms';
import SocialIcon from 'ui/SocialIcon/SocialIcon';

storiesOf('Addon', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('default', () => (
    <InputGroup gutter="0px">
      <FormField>
        <Addon>
          <SocialIcon name="facebook" size={13} />
        </Addon>
      </FormField>
      <FormField fullWidth>
        <Label htmlFor="id1" text="Label 1" />
        <Input id="id1" />
      </FormField>
    </InputGroup>
  ))
  .add('no border', () => (
    <InputGroup gutter="0px">
      <FormField>
        <Addon noBorder>
          <SocialIcon name="facebook" size={13} />
        </Addon>
      </FormField>
      <FormField fullWidth>
        <Label htmlFor="id1" text="Label 1" />
        <Input id="id1" />
      </FormField>
    </InputGroup>
  ))
  .add('gutter: 16px', () => (
    <InputGroup gutter="0px">
      <FormField>
        <Addon gutter="16px">
          <SocialIcon name="facebook" size={13} />
        </Addon>
      </FormField>
      <FormField fullWidth>
        <Label htmlFor="id1" text="Label 1" />
        <Input id="id1" />
      </FormField>
    </InputGroup>
  ));
