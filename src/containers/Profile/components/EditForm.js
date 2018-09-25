import React, { Fragment } from 'react';
import _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';
import { Transition } from 'react-spring';
import {
  isEmail,
  isFacebookUrl,
  isInstagramHandle,
  isTwitterHandle,
  isWebsite,
  maxLength,
  required,
  validateAvatar,
} from './validation';

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

const prepopulateSocialField = (name, change) => {
  if (name === 'social.web') {
    change(name, 'http://');
  }

  if (name === 'social.instagram' || 'social.twitter') {
    change(name, '@');
  }

  if (name === 'social.facebook') {
    change(name, 'https://facebook.com/');
  }
};

const EditForm = ({ change, data, push, pop, setFieldData, values }) => (
  <Box column padding={{ horizontal: 1, bottom: 1 }} color="white">
    <Box hAlignContent="center" padding={{ top: 6 / 16, bottom: 36 / 16 }}>
      <Field
        name="avatarUrl"
        validate={validateAvatar}
        render={({ input, meta }) => {
          const { onBlur, onChange, onFocus, ...rest } = input;

          const onDrop = value => {
            onFocus();
            onChange(value);
            onBlur();
          };

          return (
            <DropZone onDrop={onDrop}>
              <Image width={125} height={125} url={input.value} hoverText="Edit" circle />
              {meta.touched && meta.error && <ErrorMessage text={meta.error} />}
            </DropZone>
          );
        }}
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
              error={meta.touched && meta.error && meta.error.length > 0}
            />
            <Input
              id={input.name}
              {...input}
              error={meta.touched && meta.error ? meta.error : ''}
            />
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
              error={meta.touched && meta.error && meta.error.length > 0}
            />
            <Input
              id={input.name}
              {...input}
              error={meta.touched && meta.error ? meta.error : ''}
            />
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
              error={meta.touched && meta.error && meta.error.length > 0}
            />
            <Input
              id={input.name}
              {...input}
              error={meta.touched && meta.error ? meta.error : ''}
            />
          </FormField>
        )}
      />
      <Field
        name="bio"
        validate={maxLength(200)}
        render={({ input, meta }) => (
          <FormField>
            <Label
              htmlFor={input.name}
              text="Bio"
              error={meta.touched && meta.error && meta.error.length > 0}
            />
            <TextArea
              id={input.name}
              {...input}
              currentLength={input.value.length}
              maxLength={200}
              error={meta.touched && meta.error ? meta.error : ''}
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
                      id={input.name}
                      options={data.positions}
                      placeholder="Position (required)"
                      error={meta.touched && meta.error ? meta.error : ''}
                      {...input}
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
                      id={input.name}
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
              error={meta.touched && meta.error && meta.error.length > 0}
            />
            <Select
              id={input.name}
              error={meta.touched && meta.error ? meta.error : ''}
              options={data.industries}
              {...input}
            />
          </FormField>
        )}
      />
    </Section>

    <Section title="Social">
      <Field
        name="social.web"
        validate={isWebsite}
        render={({ input, meta }) => {
          const { onFocus, ...rest } = input;
          const customOnFocus = event => {
            const value = event.target.value;

            if (!value) {
              prepopulateSocialField(input.name, change);
            }

            return onFocus(event);
          };

          const inputProps = { onFocus: customOnFocus, ...rest };

          return (
            <FormField>
              <Label
                htmlFor={input.name}
                text="Website"
                error={meta.touched && meta.error && meta.error.length > 0}
              />
              <Input
                id={input.name}
                {...inputProps}
                placeholder="http://your-website.com"
                error={meta.touched && meta.error ? meta.error : ''}
              />
            </FormField>
          );
        }}
      />
      <Field
        name="social.instagram"
        validate={isInstagramHandle}
        render={({ input, meta }) => {
          const { onFocus, ...rest } = input;
          const customOnFocus = event => {
            const value = event.target.value;

            if (!value) {
              prepopulateSocialField(input.name, change);
            }

            return onFocus(event);
          };

          const inputProps = { onFocus: customOnFocus, ...rest };

          return (
            <FormField>
              <Label
                htmlFor={input.name}
                text="Instagram"
                error={meta.touched && meta.error && meta.error.length > 0}
              />
              <Input
                id={input.name}
                {...inputProps}
                placeholder="@username"
                error={meta.touched && meta.error ? meta.error : ''}
              />
            </FormField>
          );
        }}
      />
      <Field
        name="social.facebook"
        validate={isFacebookUrl}
        render={({ input, meta }) => {
          const { onFocus, ...rest } = input;
          const customOnFocus = event => {
            const value = event.target.value;

            if (!value) {
              prepopulateSocialField(input.name, change);
            }

            return onFocus(event);
          };

          const inputProps = { onFocus: customOnFocus, ...rest };

          return (
            <FormField>
              <Label
                htmlFor={input.name}
                text="Facebook"
                error={meta.touched && meta.error && meta.error.length > 0}
              />
              <Input
                id={input.name}
                {...inputProps}
                placeholder="https://facebook.com/you"
                error={meta.touched && meta.error ? meta.error : ''}
              />
            </FormField>
          );
        }}
      />

      <Field
        name="social.twitter"
        validate={isTwitterHandle}
        render={({ input, meta }) => {
          const { onFocus, ...rest } = input;
          const customOnFocus = event => {
            const value = event.target.value;

            if (!value) {
              prepopulateSocialField(input.name, change);
            }

            return onFocus(event);
          };

          const inputProps = { onFocus: customOnFocus, ...rest };

          return (
            <FormField>
              <Label
                htmlFor={input.name}
                text="Twitter"
                error={meta.touched && meta.error && meta.error.length > 0}
              />
              <Input
                id={input.name}
                {...inputProps}
                placeholder="@username"
                error={meta.touched && meta.error ? meta.error : ''}
              />
            </FormField>
          );
        }}
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
                      id={input.name}
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
                      id={input.name}
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
          <Label
            htmlFor={input.name}
            text="Neighborhood"
            error={meta.touched && meta.error && meta.error.length > 0}
          />
          <Select
            id={input.name}
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
            <Label
              htmlFor={input.name}
              text="Birthday (month)"
              error={meta.touched && meta.error && meta.error.length > 0}
            />
            <Select id={input.name} options={birthdayMonths} {...input} />
          </FormField>
        )}
      />
      <Field
        name="birthday.day"
        render={({ input, meta }) => (
          <FormField>
            <Label
              htmlFor={input.name}
              text="Birthday (day)"
              error={meta.touched && meta.error && meta.error.length > 0}
            />
            <Select id={input.name} options={birthdayDays} {...input} />
          </FormField>
        )}
      />
    </InputGroup>

    <Field
      name="starSign"
      render={({ input, meta }) => (
        <FormField>
          <Label
            htmlFor={input.name}
            text="Star Sign"
            error={meta.touched && meta.error && meta.error.length > 0}
          />
          <Select id={input.name} options={starSigns} placeholder="Star Sign" {...input} />
        </FormField>
      )}
    />

    <Field
      name="contactEmail"
      validate={isEmail}
      render={({ input, meta }) => (
        <FormField>
          <Label
            htmlFor={input.name}
            text="Email"
            error={meta.touched && meta.error && meta.error.length > 0}
          />
          <Input
            id={input.name}
            {...input}
            placeholder="you@email.com"
            error={meta.touched && meta.error ? meta.error : ''}
          />
        </FormField>
      )}
    />
  </Box>
);

export default EditForm;
