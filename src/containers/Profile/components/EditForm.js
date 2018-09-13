import React, { Fragment } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';

import { FormField, Input, Label, Select, TextArea, TypeAhead } from 'ui/Forms';
import Box from 'ui/Box/Box';
import EmptyStateButton from './EmptyStateButton';

const positions = [
  'Front End Developer',
  'Back End Developer',
  'Designer',
  'Photographer',
  'Musician',
  'DeeJay',
  'Producer',
  'Uber Driver',
];

const companies = [
  'The Hangar Interactive',
  'Prolific Interactive',
  'The Wing',
  'Facebook Inc.',
  'Amazon',
  'Uber',
];

const EditForm = ({ industryList, push, pop }) => (
  <Box column padding={{ horizontal: 2, top: 2, bottom: 290 / 16 }} color="white">
    <Field
      name="firstName"
      render={({ input, meta }) => (
        <FormField>
          <Label htmlFor={input.name} text="First Name (required)" />
          <Input id={input.name} {...input} error={meta.error} />
        </FormField>
      )}
    />
    <Field
      name="lastName"
      render={({ input, meta }) => (
        <FormField>
          <Label htmlFor={input.name} text="Last Name (required)" />
          <Input id={input.name} {...input} error={meta.error} />
        </FormField>
      )}
    />
    <Field
      name="headline"
      render={({ input, meta }) => (
        <FormField>
          <Label htmlFor={input.name} text="Headline (required)" />
          <Input id={input.name} {...input} error={meta.error} />
        </FormField>
      )}
    />
    <Field
      name="bio"
      render={({ input, meta }) => (
        <FormField>
          <Label htmlFor={input.name} text="Bio" />
          <TextArea
            id={input.name}
            {...input}
            currentLength={input.value.length}
            maxLength={200}
            error={meta.error}
          />
        </FormField>
      )}
    />
    <FieldArray name="occupations">
      {({ fields }) =>
        fields.map((name, index) => (
          <Fragment key={name}>
            <Field
              name={`${name}.position`}
              render={({ input, meta }) => (
                <FormField>
                  <TypeAhead options={positions} placeholder="Position (required)" {...input} />
                </FormField>
              )}
            />
            <Field
              name={`${name}.company`}
              render={({ input, meta }) => (
                <FormField>
                  <TypeAhead options={companies} placeholder="Company" {...input} />
                </FormField>
              )}
            />
            {fields.length > 1 &&
              index !== 0 && (
                <FormField>
                  <EmptyStateButton onClick={() => fields.remove(index)} text="Remove Occupation" />
                </FormField>
              )}
          </Fragment>
        ))
      }
    </FieldArray>
    <FormField>
      <EmptyStateButton onClick={() => push('occupations', undefined)} text="Add Occupation" />
    </FormField>

    <Field
      name="industry"
      render={({ input, meta }) => (
        <FormField>
          <Label htmlFor={input.name} text="Industry (required)" />
          <Select options={industryList} {...input} />
        </FormField>
      )}
    />
  </Box>
);

export default EditForm;
