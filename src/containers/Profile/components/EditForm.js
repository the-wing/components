import React, { Fragment } from 'react';
import _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';
import { Transition } from 'react-spring';
import theme from 'theme';
import { required } from './validation';

import { ErrorMessage, FormField, Input, InputGroup, Label, Select, TextArea } from 'ui/Forms';
import Box from 'ui/Box/Box';
import Chip from 'ui/Chip/Chip';
import Collapsible from 'ui/Collapsible/Collapsible';
import DropZone from 'ui/DropZone/DropZone';
import Image from 'ui/Image/Image';
import Section from 'ui/Section/Section';
import Text from 'ui/Text/Text';

import EmptyStateButton from './EmptyStateButton';

const birthdayMonths = [
  {
    value: '13',
    label: '—',
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

const EditForm = ({ data, push, pop, values }) => (
  <Box column padding={{ horizontal: 1, bottom: 1 }} color="white">
    <Box hAlignContent="center" padding={{ top: 6 / 16, bottom: 36 / 16 }}>
      <Field
        name="avatarUrl"
        render={({ input, meta }) => (
          <DropZone onDrop={input.onChange}>
            <Image
              width={125}
              height={125}
              url={input.value || theme.defaultAvatar}
              hoverText="Edit"
              circle
            />
          </DropZone>
        )}
      />
    </Box>
    <Section title="The Basics">
      <Field
        name="firstName"
        validate={required}
        render={({ input, meta }) => (
          <FormField>
            <Label
              htmlFor={input.name}
              text="First Name (required)"
              error={meta.error && meta.touched}
            />
            <Input id={input.name} {...input} error={meta.error && meta.touched} />
            {meta.error && meta.touched && <ErrorMessage text={meta.error} />}
          </FormField>
        )}
      />
      <Field
        name="lastName"
        validate={required}
        render={({ input, meta }) => (
          <FormField>
            <Label
              htmlFor={input.name}
              text="Last Name (required)"
              error={meta.error && meta.touched}
            />
            <Input id={input.name} {...input} error={meta.error && meta.touched} />
            {meta.error && meta.touched && <ErrorMessage text={meta.error} />}
          </FormField>
        )}
      />
      <Field
        name="headline"
        validate={required}
        render={({ input, meta }) => (
          <FormField>
            <Label
              htmlFor={input.name}
              text="Headline (required)"
              error={meta.error && meta.touched}
            />
            <Input id={input.name} {...input} error={meta.error && meta.touched} />
            {meta.error && meta.touched && <ErrorMessage text={meta.error} />}
          </FormField>
        )}
      />
      <Field
        name="bio"
        validate={value => maxLength(value, 200)}
        render={({ input, meta }) => (
          <FormField>
            <Label htmlFor={input.name} text="Bio" />
            <TextArea
              id={input.name}
              {...input}
              currentLength={input.value.length}
              maxLength={200}
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
                validate={required}
                render={({ input, meta }) => (
                  <FormField>
                    <Select
                      options={data.positions}
                      placeholder="Position (required)"
                      error={meta.error && meta.touched}
                      {...input}
                      canCreateOptions
                    />
                    {meta.error && meta.touched && <ErrorMessage text={meta.error} />}
                  </FormField>
                )}
              />
              <Field
                name={`${name}.company`}
                render={({ input, meta }) => (
                  <FormField>
                    <Select
                      options={data.companies}
                      placeholder="Company"
                      {...input}
                      maxLength={30}
                      canCreateOptions
                    />
                  </FormField>
                )}
              />
              {fields.length > 1 && (
                <FormField>
                  <EmptyStateButton
                    onClick={() => fields.remove(index)}
                    text="Remove Occupation"
                    noIcon
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
        validate={required}
        render={({ input, meta }) => (
          <FormField>
            <Label
              htmlFor={input.name}
              text="Industry (required)"
              error={meta.error && meta.touched}
            />
            <Select error={meta.error && meta.touched} options={data.industries} {...input} />
            {meta.error && meta.touched && <ErrorMessage text={meta.error} />}
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

    <Section title="Offers">
      <Box grow>
        <FieldArray name="offers">
          {({ fields }) =>
            fields.map((name, index) => (
              <Field
                key={name}
                name={name}
                render={({ input }) => {
                  if (!input.value.label) {
                    return false;
                  }

                  return (
                    <Chip
                      key={input.value.value}
                      onRemove={() => fields.remove(index)}
                      text={input.value.label}
                      color="pink"
                    />
                  );
                }}
              />
            ))
          }
        </FieldArray>
      </Box>
      <Collapsible
        trigger={({ isOpen, toggle }) => {
          if (isOpen) return false;

          return <EmptyStateButton onClick={toggle} text="Add offers" />;
        }}
      >
        {({ isOpen, toggle }) => {
          if (!isOpen) return false;

          return (
            <Field
              name={`offers[${values.offers.length + 1}]`}
              render={({ input, meta }) => {
                const { onChange, ...rest } = input;
                const customOnChange = event => {
                  toggle();
                  onChange(event);
                };
                const inputProps = { onChange: customOnChange, ...rest };

                return (
                  <FormField>
                    <Select
                      options={data.offers}
                      placeholder="Add Offer"
                      {...inputProps}
                      canCreateOptions
                    />
                  </FormField>
                );
              }}
            />
          );
        }}
      </Collapsible>
    </Section>

    <Section title="Asks">
      <Box grow>
        <FieldArray name="asks">
          {({ fields }) =>
            fields.map((name, index) => (
              <Field
                key={name}
                name={name}
                render={({ input }) => {
                  if (!input.value.label) {
                    return false;
                  }

                  return (
                    <Chip
                      key={input.value.value}
                      onRemove={() => fields.remove(index)}
                      text={input.value.label}
                      color="panache"
                    />
                  );
                }}
              />
            ))
          }
        </FieldArray>
      </Box>
      <Collapsible
        trigger={({ isOpen, toggle }) => {
          if (isOpen) return false;

          return <EmptyStateButton onClick={toggle} text="Add asks" />;
        }}
      >
        {({ isOpen, toggle }) => {
          if (!isOpen) return false;

          return (
            <Field
              name={`asks[${values.asks.length + 1}]`}
              render={({ input, meta }) => {
                const { onChange, ...rest } = input;
                const customOnChange = event => {
                  toggle();
                  onChange(event);
                };
                const inputProps = { onChange: customOnChange, ...rest };

                return (
                  <FormField>
                    <Select
                      options={data.asks}
                      placeholder="Add Ask"
                      {...inputProps}
                      canCreateOptions
                    />
                  </FormField>
                );
              }}
            />
          );
        }}
      </Collapsible>
    </Section>

    <Section title="Interests">
      <Box grow>
        <FieldArray name="interests">
          {({ fields }) =>
            fields.map((name, index) => (
              <Field
                key={name}
                name={name}
                render={({ input }) => {
                  if (!input.value.label) {
                    return false;
                  }

                  return (
                    <Chip
                      key={input.value.value}
                      onRemove={() => fields.remove(index)}
                      text={input.value.label}
                      color="concrete"
                    />
                  );
                }}
              />
            ))
          }
        </FieldArray>
      </Box>
      <Collapsible
        trigger={({ isOpen, toggle }) => {
          if (isOpen) return false;

          return <EmptyStateButton onClick={toggle} text="Add interests" />;
        }}
      >
        {({ isOpen, toggle }) => {
          if (!isOpen) return false;

          return (
            <Field
              name={`interests[${values.interests.length + 1}]`}
              render={({ input, meta }) => {
                const { onChange, ...rest } = input;
                const customOnChange = event => {
                  toggle();
                  onChange(event);
                };
                const inputProps = { onChange: customOnChange, ...rest };

                return (
                  <FormField>
                    <Select
                      options={data.interests}
                      placeholder="Add Interest"
                      {...inputProps}
                      canCreateOptions
                    />
                  </FormField>
                );
              }}
            />
          );
        }}
      </Collapsible>
    </Section>

    <Field
      name="neighborhood"
      render={({ input, meta }) => (
        <FormField>
          <Label htmlFor={input.name} text="Neighborhood" error={meta.error} />
          <Select
            options={data.neighborhoods}
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
            <Select options={birthdayMonths} {...input} />
          </FormField>
        )}
      />
      <Field
        name="birthday.day"
        render={({ input, meta }) => (
          <FormField>
            <Label htmlFor={input.name} text="Birthday (day)" error={meta.error} />
            <Select options={birthdayDays} {...input} />
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
