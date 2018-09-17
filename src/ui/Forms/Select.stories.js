import React, { Fragment } from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { action } from '@storybook/addon-actions';
import { FormField, Label, Select, TextArea } from 'ui/Forms';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

storiesOf('Select', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('default', () => (
    <FormField>
      <Label htmlFor="select1" text="Default" />
      <Select id="select1" options={options} />
    </FormField>
  ))
  .add('with placeholder', () => (
    <FormField>
      <Label htmlFor="select4" text="With Placeholder" />
      <Select id="select4" options={options} placeholder="Select a flavor" />
    </FormField>
  ))
  .add('with custom onChange', () => (
    <FormField>
      <Label htmlFor="select5" text="With Custom OnChange" />
      <Select id="select5" onChange={action('custom onChange')} options={options} />
    </FormField>
  ))
  .add('with value', () => (
    <FormField>
      <Label htmlFor="select6" text="With Default Value" />
      <Select id="select6" options={options} value={options[0]} />
    </FormField>
  ))
  .add('isSearchable', () => (
    <FormField>
      <Label htmlFor="select7" text="Is Searchable" />
      <Select id="select7" options={options} isSearchable />
    </FormField>
  ))
  .add('hiddenIndicator', () => (
    <FormField>
      <Label htmlFor="select8" text="Hidden Indicator" />
      <Select id="select8" options={options} hiddenIndicator />
    </FormField>
  ))
  .add('canCreateOptions', () => (
    <FormField>
      <Label htmlFor="select9" text="Can Create Options" />
      <Select
        maxLength={30}
        id="select9"
        options={options}
        onChange={action('custom onChange')}
        placeholder="Can create options"
        hiddenIndicator
        isSearchable
        canCreateOptions
      />
    </FormField>
  ));
