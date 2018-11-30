import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Addon, ErrorMessage, FormField, Input, InputGroup, Label } from 'ui/Forms';
import SocialIcon from 'ui/SocialIcon/SocialIcon';
import Text from 'ui/Text/Text';

storiesOf('InputGroup', module)
  .add('default', () => (
    <InputGroup>
      <FormField fullWidth>
        <Label htmlFor="id1" text="Label 1" />
        <Input id="id1" />
      </FormField>
      <FormField fullWidth>
        <Label htmlFor="id1" text="Label 1" />
        <Input id="id1" />
      </FormField>
    </InputGroup>
  ))
  .add('gutter: 0', () => (
    <InputGroup gutter="0px">
      <FormField fullWidth>
        <Label htmlFor="id1" text="Label 1" />
        <Input id="id1" />
      </FormField>
      <FormField fullWidth>
        <Label htmlFor="id1" text="Label 1" />
        <Input id="id1" />
      </FormField>
    </InputGroup>
  ))
  .add('with addon', () => (
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
  ))
  .add('with addon and prependedValue on Input', () => (
    <Fragment>
      <InputGroup gutter="0px">
        <FormField>
          <Addon gutter="16px">
            <SocialIcon name="facebook" size={13} />
          </Addon>
        </FormField>
        <FormField fullWidth>
          <Label htmlFor="id1" text="Label 1" />
          <Input id="id1" prependedValue="https://facebook.com/" placeholder="you" />
        </FormField>
      </InputGroup>
    </Fragment>
  ))
  .add('with addon and error', () => (
    <Fragment>
      <InputGroup gutter="0px">
        <FormField noMargin>
          <Addon gutter="16px" error>
            <SocialIcon name="facebook" size={13} />
          </Addon>
        </FormField>
        <FormField fullWidth noMargin>
          <Label htmlFor="id1" text="Label 1" error />
          <Input id="id1" error />
        </FormField>
      </InputGroup>
      <ErrorMessage text="I have an error" />
    </Fragment>
  ));
