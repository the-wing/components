import React, { Fragment } from 'react';
import _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';
import { Transition } from 'react-spring';

import { FormField, Input, InputGroup, Label, Select, TextArea } from 'ui/Forms';
import Box from 'ui/Box/Box';
import Chip from 'ui/Chip/Chip';
import Collapsible from 'ui/Collapsible/Collapsible';
import Section from 'ui/Section/Section';
import Text from 'ui/Text/Text';

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

const EditForm = ({ data, push, pop }) => (
  <Box column padding={{ horizontal: 2, vertical: 2 }} color="white">
    <Section title="The Basics">
      <Field
        name="firstName"
        render={({ input, meta }) => (
          <FormField>
            <Label htmlFor={input.name} text="First Name (required)" error={meta.error} />
            <Input id={input.name} {...input} error={meta.error} />
          </FormField>
        )}
      />
      <Field
        name="lastName"
        render={({ input, meta }) => (
          <FormField>
            <Label htmlFor={input.name} text="Last Name (required)" error={meta.error} />
            <Input id={input.name} {...input} error={meta.error} />
          </FormField>
        )}
      />
      <Field
        name="headline"
        render={({ input, meta }) => (
          <FormField>
            <Label htmlFor={input.name} text="Headline (required)" error={meta.error} />
            <Input id={input.name} {...input} error={meta.error} />
          </FormField>
        )}
      />
      <Field
        name="bio"
        render={({ input, meta }) => (
          <FormField>
            <Label htmlFor={input.name} text="Bio" error={meta.error} />
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
    </Section>

    <Section title="Occupation">
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
                    <EmptyStateButton
                      onClick={() => fields.remove(index)}
                      text="Remove Occupation"
                    />
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
            <Label htmlFor={input.name} text="Industry (required)" error={meta.error} />
            <Select id={input.name} options={data.industries} {...input} />
          </FormField>
        )}
      />
    </Section>

    <Section title="Social">
      <Field
        name="social.web"
        render={({ input, meta }) => (
          <FormField>
            <Label htmlFor={input.name} text="Website" error={meta.error} />
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
            <Label htmlFor={input.name} text="Instagram" error={meta.error} />
            <Input id={input.name} {...input} placeholder="@username" error={meta.error} />
          </FormField>
        )}
      />
      <Field
        name="social.facebook"
        render={({ input, meta }) => (
          <FormField>
            <Label htmlFor={input.name} text="Facebook" error={meta.error} />
            <Input
              id={input.name}
              {...input}
              placeholder="https://facebook.com/you"
              error={meta.error}
            />
          </FormField>
        )}
      />
    </Section>

    {/* <Box wrap>
              <Transition
                keys={name.map(offer => name.value)}
                from={{ opacity: 0, transform: 'scale(0)' }}
                enter={{ opacity: 1, transform: 'scale(1)' }}
                leave={{ opacity: 0, transform: 'scale(0)' }}
              >
                {styles => {
                  return interests.map(interest => (
                    <Chip
                      key={interest.value}
                      text={interest.label}
                      color="concrete"
                      styles={styles}
                      readonly
                    />
                  ));
                }}
              </Transition>
            </Box> */}

    <Section title="Offers">
      <FieldArray name="offers">
        {({ fields }) =>
          fields.map((name, index) => {
            return (
              <Field
                name={`${name}.label`}
                render={({ input }) => (
                  <Chip key={input.value} text={input.value} color="concrete" readonly />
                )}
              />
            );
          })
        }
      </FieldArray>
    </Section>

    <Section title="Asks">
      <EmptyStateButton text="Add asks" />
    </Section>

    <Section title="Interests">
      <EmptyStateButton text="Add interests" />
    </Section>

    <Field
      name="neighborhood"
      render={({ input, meta }) => (
        <FormField>
          <Label htmlFor={input.name} text="Neighborhood" error={meta.error} />
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
            <Label htmlFor={input.name} text="Birthday (month)" error={meta.error} />
            <Select id={input.name} options={birthdayMonths} {...input} />
          </FormField>
        )}
      />
      <Field
        name="birthday.day"
        render={({ input, meta }) => (
          <FormField>
            <Label htmlFor={input.name} text="Birthday (day)" error={meta.error} />
            <Select id={input.name} options={birthdayDays} {...input} />
          </FormField>
        )}
      />
    </InputGroup>

    <Field
      name="starSign"
      render={({ input, meta }) => (
        <FormField>
          <Label htmlFor={input.name} text="Star Sign" error={meta.error} />
          <Select id={input.name} options={starSigns} placeholder="Star Sign" {...input} />
        </FormField>
      )}
    />
  </Box>
);

export default EditForm;
