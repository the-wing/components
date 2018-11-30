import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { FormField, Label, Select } from 'ui/Forms';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const filterFlavors = (inputValue: string) =>
  options.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()));

const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    callback(filterFlavors(inputValue));
  }, 1000);
};

storiesOf('Select', module)
  .add('default', () => (
    <FormField>
      <Label htmlFor="select1" text="Default" />
      <Select id="select1" options={options} />
    </FormField>
  ))
  .add('error', () => (
    <FormField>
      <Label htmlFor="select1" text="Default" error="I have an error." />
      <Select
        id="select1"
        options={options}
        placeholder="Select a flavor"
        error="I have an error."
      />
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
        canCreateOptions
      />
    </FormField>
  ))
  .add('canCreateOptions with error', () => (
    <FormField>
      <Label htmlFor="select9" text="Can Create Options" error="I have an error." />
      <Select
        maxLength={30}
        id="select9"
        options={options}
        onChange={action('custom onChange')}
        placeholder="Can create options"
        error="I have an error."
        canCreateOptions
      />
    </FormField>
  ))
  .add('canCreateOptions w/ value already', () => (
    <FormField>
      <Label htmlFor="select9" text="Can Create Options" />
      <Select
        maxLength={30}
        id="select9"
        options={options}
        onChange={action('custom onChange')}
        placeholder="Can create options"
        value={options[0]}
        canCreateOptions
      />
    </FormField>
  ))
  .add('canCreateOptions w/ loadOptions (async function to search)', () => (
    <FormField>
      <Label htmlFor="select9" text="Can Create Options" />
      <Select
        maxLength={30}
        id="select9"
        loadOptions={loadOptions}
        options={options}
        onChange={action('custom onChange')}
        placeholder="Can create options"
        value={options[0]}
        canCreateOptions
      />
    </FormField>
  ))
  .add('Cannot create options & has loadOptions (async function to search)', () => (
    <FormField>
      <Label htmlFor="select9" text="Can Create Options" />
      <Select
        maxLength={30}
        id="select9"
        loadOptions={loadOptions}
        options={options}
        onChange={action('custom onChange')}
        placeholder="Cannot create options"
        isSearchable
      />
    </FormField>
  ));
