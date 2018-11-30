import React from 'react';
import { storiesOf } from '@storybook/react';
import { FormField, Input, Label } from 'ui/Forms';

storiesOf('Input', module)
  .add('default', () => (
    <FormField fullWidth>
      <Label htmlFor="id1" text="Label 1" />
      <Input id="id1" />
    </FormField>
  ))
  .add('prependedValue', () => (
    <FormField fullWidth>
      <Label htmlFor="id1" text="Label 1" />
      <Input id="id1" prependedValue="https://facebook.com/" />
    </FormField>
  ))
  .add('prependedValue active', () => (
    <FormField fullWidth>
      <Label htmlFor="id1" text="Label 1" />
      <Input id="id1" prependedValue="https://facebook.com/" active />
    </FormField>
  ))
  .add('with placeholder', () => (
    <FormField fullWidth>
      <Label htmlFor="id2" text="Label 2" />
      <Input id="id2" placeholder="Gender is an illusion, don't you agree?" />
    </FormField>
  ))
  .add('with no border', () => (
    <FormField fullWidth>
      <Label htmlFor="id2" text="Label 2" />
      <Input id="id2" placeholder="Gender is an illusion, don't you agree?" noBorder />
    </FormField>
  ))
  .add('error', () => (
    <FormField fullWidth>
      <Label htmlFor="id3" text="Label 3" error />
      <Input id="id3" error="I have an error" />
    </FormField>
  ));
