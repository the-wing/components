import React from 'react';
import { storiesOf } from '@storybook/react';
import { Addon, FormField, Input, InputGroup, Label } from 'ui/Forms';
import SocialIcon from 'ui/SocialIcon/SocialIcon';

storiesOf('UI/Forms/Addon', module)
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
