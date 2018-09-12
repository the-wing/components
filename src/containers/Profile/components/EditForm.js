import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

import { FormField, Input, Label, TextArea } from 'ui/Forms';
import Box from 'ui/Box/Box';

const EditForm = () => (
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
  </Box>
);

export default EditForm;
