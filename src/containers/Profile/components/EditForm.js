import React, { Fragment } from 'react';
import _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';

import { FormField, Input, InputGroup, Label, Select, TextArea } from 'ui/Forms';
import Box from 'ui/Box/Box';
import EmptyStateButton from './EmptyStateButton';

const positions = [
  { value: 'front-end-developer', label: 'Front End Developer' },
  { value: 'back-end-developer', label: 'Back End Developer' },
  { value: 'designer', label: 'Designer' },
  { value: 'photographer', label: 'Photographer' },
  { value: 'musician', label: 'Musician' },
  { value: 'deejay', label: 'DeeJay' },
  { value: 'producer', label: 'Producer' },
  { value: 'uber-driver', label: 'Uber Driver' },
];

const companies = [
  { value: 'the-hangar-interactive', label: 'The Hangar Interactive' },
  { value: 'prolific-interactive', label: 'Prolific Interactive' },
  { value: 'the-wing', label: 'The Wing' },
  { value: 'facebook', label: 'Facebook Inc.' },
  { value: 'amazon', label: 'Amazon' },
  { value: 'uber', label: 'Uber' },
];

const neighborhoods = [
  { value: 'williamsburg', label: 'Williamsburg' },
  { value: 'park-slope', label: 'Park Slope' },
  { value: 'dumbo', label: 'DUMBO' },
  { value: 'cobble-hill', label: 'Cobble Hill' },
  { value: 'flatbush', label: 'Flatbush' },
  { value: 'crown-heights', label: 'Crown Heights' },
  { value: 'bay-ridge', label: 'Bay Ridge' },
  { value: 'downtown-brooklyn', label: 'Downtown Brooklyn' },
];

const birthdayMonths = [
  {
    _id: '13',
    name: '—',
    value: '13',
    label: '—',
    noMonth: true,
  },
].concat(
  Array.apply(0, Array(12)).map((_, i) => ({
    value: i + 1 < 10 ? `0${i + 1}` : `${i + 1}`,
    label: moment()
      .month(i)
      .format('MMMM'),
  }))
);

const birthdayDays = [
  {
    value: '32',
    label: '-',
    noDay: true,
  },
].concat(
  Array.apply(0, Array(31)).map((_, i) => ({
    value: i + 1 < 10 ? `0${i + 1}` : `${i + 1}`,
    label: `${i + 1}`,
  }))
);

const starSigns = [
  0,
  'Aquarius',
  'Pisces',
  'Aries',
  'Taurus',
  'Gemini',
  'Cancer',
  'Leo',
  'Virgo',
  'Libra',
  'Scorpio',
  'Sagittarius',
  'Capricorn',
].map(sign => (sign === 0 ? { value: '1', label: '—' } : { value: sign, label: sign }));

const EditForm = ({ industryList, push, pop }) => (
  <Box column padding={{ horizontal: 2, vertical: 2 }} color="white">
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
                  <Select
                    options={positions}
                    placeholder="Position (required)"
                    {...input}
                    hiddenIndicator
                    isSearchable
                    canCreateOptions
                  />
                </FormField>
              )}
            />
            <Field
              name={`${name}.company`}
              render={({ input, meta }) => (
                <FormField>
                  <Select
                    options={companies}
                    placeholder="Company"
                    {...input}
                    hiddenIndicator
                    hiddenIndicator
                    isSearchable
                    canCreateOptions
                  />
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
          <Select id={input.name} options={industryList} {...input} />
        </FormField>
      )}
    />
    <Field
      name="social.web"
      render={({ input, meta }) => (
        <FormField>
          <Label htmlFor={input.name} text="Website" />
          <Input
            id={input.name}
            {...input}
            placeholder="http://your-website.com"
            error={meta.error}
          />
        </FormField>
      )}
    />
    <Field
      name="social.instagram"
      render={({ input, meta }) => (
        <FormField>
          <Label htmlFor={input.name} text="Instagram" />
          <Input id={input.name} {...input} placeholder="@username" error={meta.error} />
        </FormField>
      )}
    />
    <Field
      name="social.facebook"
      render={({ input, meta }) => (
        <FormField>
          <Label htmlFor={input.name} text="Facebook" />
          <Input
            id={input.name}
            {...input}
            placeholder="https://facebook.com/you"
            error={meta.error}
          />
        </FormField>
      )}
    />

    {/* TODO: OFFERS, ASKS, INTERESTED IN */}

    <Field
      name="neighborhood"
      render={({ input, meta }) => (
        <FormField>
          <Label htmlFor={input.name} text="Neighborhood" />
          <Select
            id={input.name}
            options={neighborhoods}
            placeholder="Neighborhood"
            {...input}
            hiddenIndicator
          />
        </FormField>
      )}
    />

    <InputGroup>
      <Field
        name="birthday.month"
        render={({ input, meta }) => (
          <FormField>
            <Label htmlFor={input.name} text="Birthday (month)" />
            <Select id={input.name} options={birthdayMonths} {...input} />
          </FormField>
        )}
      />
      <Field
        name="birthday.day"
        render={({ input, meta }) => (
          <FormField>
            <Label htmlFor={input.name} text="Birthday (day)" />
            <Select id={input.name} options={birthdayDays} {...input} />
          </FormField>
        )}
      />
    </InputGroup>

    <Field
      name="starSign"
      render={({ input, meta }) => (
        <FormField>
          <Label htmlFor={input.name} text="Star Sign" />
          <Select id={input.name} options={starSigns} placeholder="Star Sign" {...input} />
        </FormField>
      )}
    />
  </Box>
);

export default EditForm;
