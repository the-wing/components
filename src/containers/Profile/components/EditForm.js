import React, { Fragment } from 'react';
import get from 'lodash/get';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Field, FormSpy } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';
import { getDaysPerMonth } from 'utils';
import {
  isEmail,
  isFacebookUrl,
  isInstagramHandle,
  isTwitterHandle,
  isWebsite,
  maxLength,
  required,
} from './validation';

import {
  Addon,
  ErrorMessage,
  FormField,
  Input,
  InputGroup,
  Label,
  Select,
  TextArea,
} from 'ui/Forms';

import Box from 'ui/Box/Box';
import Chip from 'ui/Chip/Chip';
import Collapsible from 'ui/Collapsible/Collapsible';
import DropZone from 'ui/DropZone/DropZone';
import Image from 'ui/Image/Image';
import Section from 'ui/Section/Section';
import SocialIcon from 'ui/SocialIcon/SocialIcon';

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

const getBirthdayDays = days =>
  [
    {
      value: '32',
      label: '-',
    },
  ].concat(
    Array.apply(0, Array(days)).map((_, i) => ({
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

const EditForm = ({
  data,
  onSearchAsks,
  onSearchCompanies,
  onSearchInterests,
  onSearchOffers,
  onSearchNeighborhoods,
  onSearchPositions,
  push,
  pop,
}) => (
  <Box column padding={{ horizontal: 1, bottom: 1 }} color="white">
    <Box hAlignContent="center" padding={{ top: 6 / 16, bottom: 36 / 16 }}>
      <Field
        name="avatarUrl"
        render={({ input, meta }) => {
          const { onBlur, onChange, onFocus } = input;

          const onDrop = value => {
            onFocus();
            onChange(value);
            onBlur();
          };

          return (
            <DropZone minWidth={125} onDrop={onDrop}>
              <Image width={125} height={125} url={input.value} hoverText="Edit" circle />
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
          <FormField fullWidth>
            <Label
              htmlFor={input.name}
              text="First Name (required)"
              error={meta.touched && get(meta, 'error.length', 0) > 0}
            />
            <Input
              id={input.name}
              {...input}
              error={meta.touched && get(meta, 'error.length', 0) > 0}
            />
            {meta.touched && meta.error && <ErrorMessage text={meta.error} />}
          </FormField>
        )}
      />
      <Field
        name="lastName"
        validate={required}
        render={({ input, meta }) => (
          <FormField fullWidth>
            <Label
              htmlFor={input.name}
              text="Last Name (required)"
              error={meta.touched && get(meta, 'error.length', 0) > 0}
            />
            <Input
              id={input.name}
              {...input}
              error={meta.touched && get(meta, 'error.length', 0) > 0}
            />
            {meta.touched && meta.error && <ErrorMessage text={meta.error} />}
          </FormField>
        )}
      />
      <Field
        name="headline"
        validate={required}
        render={({ input, meta }) => (
          <FormField fullWidth>
            <Label
              htmlFor={input.name}
              text="Headline (required)"
              error={meta.touched && get(meta, 'error.length', 0) > 0}
            />
            <Input
              id={input.name}
              {...input}
              error={meta.touched && get(meta, 'error.length', 0) > 0}
            />
            {meta.touched && meta.error && <ErrorMessage text={meta.error} />}
          </FormField>
        )}
      />
      <Field
        name="bio"
        validate={maxLength(200)}
        render={({ input, meta }) => (
          <FormField fullWidth>
            <Label
              htmlFor={input.name}
              text="Bio"
              error={meta.touched && get(meta, 'error.length', 0) > 0}
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
      <FieldArray name="occupations" subscription={{ pristine: true, touched: true, error: true }}>
        {({ fields }) =>
          fields.map((name, index) => (
            <Fragment key={name}>
              <Field
                name={`${name}.position`}
                validate={required}
                render={({ input, meta }) => (
                  <FormField fullWidth>
                    <Select
                      id={input.name}
                      loadOptions={onSearchPositions}
                      options={data.positions}
                      placeholder="Position (required)"
                      error={meta.touched && meta.error ? meta.error : ''}
                      {...input}
                      maxLength={30}
                      canCreateOptions
                    />
                  </FormField>
                )}
              />
              <Field
                name={`${name}.company`}
                render={({ input, meta }) => (
                  <FormField fullWidth>
                    <Select
                      id={input.name}
                      loadOptions={onSearchCompanies}
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
                <FormField fullWidth>
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
      <FormField fullWidth>
        <EmptyStateButton onClick={() => push('occupations', undefined)} text="Add Occupation" />
      </FormField>
      <Field
        name="industry"
        validate={required}
        render={({ input, meta }) => (
          <FormField fullWidth>
            <Label
              htmlFor={input.name}
              text="Industry (required)"
              error={meta.touched && get(meta, 'error.length', 0) > 0}
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
        render={({ input, meta }) => (
          <Fragment>
            <InputGroup gutter="0px">
              <FormField noMargin={meta.touched && get(meta, 'error.length', 0) > 0}>
                <Addon
                  active={meta.active}
                  gutter="16px"
                  error={meta.touched && get(meta, 'error.length', 0) > 0}
                >
                  <SocialIcon name="web" size={13} />
                </Addon>
              </FormField>
              <FormField noMargin={meta.touched && get(meta, 'error.length', 0) > 0} fullWidth>
                <Label
                  htmlFor={input.name}
                  text="Website"
                  error={meta.touched && get(meta, 'error.length', 0) > 0}
                />
                <Input
                  active={meta.active}
                  id={input.name}
                  {...input}
                  placeholder="your-website.com"
                  prependedValue="http://"
                  error={meta.touched && get(meta, 'error.length', 0) > 0}
                />
              </FormField>
            </InputGroup>
            {meta.touched && meta.error && <ErrorMessage text={meta.error} />}
          </Fragment>
        )}
      />
      <Field
        name="social.instagram"
        validate={isInstagramHandle}
        render={({ input, meta }) => (
          <Fragment>
            <InputGroup gutter="0px">
              <FormField noMargin={meta.touched && get(meta, 'error.length', 0) > 0}>
                <Addon
                  active={meta.active}
                  gutter="16px"
                  error={meta.touched && get(meta, 'error.length', 0) > 0}
                >
                  <SocialIcon name="instagram" size={13} />
                </Addon>
              </FormField>
              <FormField noMargin={meta.touched && get(meta, 'error.length', 0) > 0} fullWidth>
                <Label
                  htmlFor={input.name}
                  text="Instagram"
                  error={meta.touched && get(meta, 'error.length', 0) > 0}
                />
                <Input
                  active={meta.active}
                  id={input.name}
                  {...input}
                  placeholder="username"
                  prependedValue="@"
                  error={meta.touched && get(meta, 'error.length', 0) > 0}
                />
              </FormField>
            </InputGroup>
            {meta.touched && meta.error && <ErrorMessage text={meta.error} />}
          </Fragment>
        )}
      />
      <Field
        name="social.facebook"
        validate={isFacebookUrl}
        render={({ input, meta }) => (
          <Fragment>
            <InputGroup gutter="0px">
              <FormField noMargin={meta.touched && get(meta, 'error.length', 0) > 0}>
                <Addon
                  active={meta.active}
                  gutter="16px"
                  error={meta.touched && get(meta, 'error.length', 0) > 0}
                >
                  <SocialIcon name="facebook" size={13} />
                </Addon>
              </FormField>
              <FormField noMargin={meta.touched && get(meta, 'error.length', 0) > 0} fullWidth>
                <Label
                  htmlFor={input.name}
                  text="Facebook"
                  error={meta.touched && get(meta, 'error.length', 0) > 0}
                />
                <Input
                  active={meta.active}
                  id={input.name}
                  {...input}
                  placeholder="you"
                  prependedValue="https://facebook.com/"
                  error={meta.touched && get(meta, 'error.length', 0) > 0}
                />
              </FormField>
            </InputGroup>
            {meta.touched && meta.error && <ErrorMessage text={meta.error} />}
          </Fragment>
        )}
      />

      <Field
        name="social.twitter"
        validate={isTwitterHandle}
        render={({ input, meta }) => (
          <Fragment>
            <InputGroup gutter="0px">
              <FormField noMargin={meta.touched && get(meta, 'error.length', 0) > 0}>
                <Addon
                  active={meta.active}
                  gutter="16px"
                  error={meta.touched && get(meta, 'error.length', 0) > 0}
                >
                  <SocialIcon name="twitter" size={13} />
                </Addon>
              </FormField>
              <FormField noMargin={meta.touched && get(meta, 'error.length', 0) > 0} fullWidth>
                <Label
                  htmlFor={input.name}
                  text="Twitter"
                  error={meta.touched && get(meta, 'error.length', 0) > 0}
                />
                <Input
                  active={meta.active}
                  id={input.name}
                  {...input}
                  placeholder="username"
                  prependedValue="@"
                  error={meta.touched && get(meta, 'error.length', 0) > 0}
                />
              </FormField>
            </InputGroup>
            {meta.touched && meta.error && <ErrorMessage text={meta.error} />}
          </Fragment>
        )}
      />
    </Section>

    <Section title="Offers">
      <Box grow wrap>
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
      <FormSpy subscription={{ values: true }}>
        {({ values: { offers } }) => {
          return (
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
                    name={`offers[${offers.length + 1}]`}
                    render={({ input, meta }) => {
                      const { onChange, ...rest } = input;
                      const customOnChange = event => {
                        toggle();
                        onChange(event);
                      };
                      const inputProps = { onChange: customOnChange, ...rest };

                      return (
                        <FormField fullWidth>
                          <Select
                            loadOptions={onSearchOffers}
                            maxLength={30}
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
          );
        }}
      </FormSpy>
    </Section>

    <Section title="Asks">
      <Box grow wrap>
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
      <FormSpy subscription={{ values: true }}>
        {({ values: { asks } }) => {
          return (
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
                    name={`asks[${asks.length + 1}]`}
                    render={({ input, meta }) => {
                      const { onChange, ...rest } = input;
                      const customOnChange = event => {
                        toggle();
                        onChange(event);
                      };
                      const inputProps = { onChange: customOnChange, ...rest };

                      return (
                        <FormField fullWidth>
                          <Select
                            loadOptions={onSearchAsks}
                            maxLength={30}
                            options={data.asks}
                            placeholder="Add Asks"
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
          );
        }}
      </FormSpy>
    </Section>

    <Section title="Interests">
      <Box grow wrap>
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
      <FormSpy subscription={{ values: true }}>
        {({ values: { interests } }) => {
          return (
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
                    name={`interests[${interests.length + 1}]`}
                    render={({ input, meta }) => {
                      const { onChange, ...rest } = input;
                      const customOnChange = event => {
                        toggle();
                        onChange(event);
                      };
                      const inputProps = { onChange: customOnChange, ...rest };

                      return (
                        <FormField fullWidth>
                          <Select
                            loadOptions={onSearchInterests}
                            maxLength={30}
                            options={data.interests}
                            placeholder="Add Interests"
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
          );
        }}
      </FormSpy>
    </Section>

    <Field
      name="neighborhood"
      render={({ input, meta }) => (
        <FormField fullWidth>
          <Label
            htmlFor={input.name}
            text="Neighborhood"
            error={meta.touched && get(meta, 'error.length', 0) > 0}
          />
          <Select
            id={input.name}
            loadOptions={onSearchNeighborhoods}
            options={data.neighborhoods}
            placeholder="Neighborhood"
            {...input}
            canCreateOptions
          />
        </FormField>
      )}
    />

    <FormSpy subscription={{ values: true }}>
      {({ values: { birthday } }) => {
        const month = get(birthday, 'month.value');
        const daysPerMonth = getDaysPerMonth(month);
        const birthdayDays = getBirthdayDays(daysPerMonth);
        return (
          <InputGroup>
            <Field
              name="birthday.month"
              render={({ input, meta }) => (
                <FormField fullWidth>
                  <Label
                    htmlFor={input.name}
                    text="Birthday (month)"
                    error={meta.touched && get(meta, 'error.length', 0) > 0}
                  />
                  <Select id={input.name} options={birthdayMonths} {...input} />
                </FormField>
              )}
            />
            <Field
              name="birthday.day"
              render={({ input, meta }) => (
                <FormField fullWidth>
                  <Label
                    htmlFor={input.name}
                    text="Birthday (day)"
                    error={meta.touched && get(meta, 'error.length', 0) > 0}
                  />
                  <Select id={input.name} options={birthdayDays} {...input} />
                </FormField>
              )}
            />
          </InputGroup>
        );
      }}
    </FormSpy>

    <Field
      name="starSign"
      render={({ input, meta }) => (
        <FormField fullWidth>
          <Label
            htmlFor={input.name}
            text="Star Sign"
            error={meta.touched && get(meta, 'error.length', 0) > 0}
          />
          <Select id={input.name} options={starSigns} placeholder="Star Sign" {...input} />
        </FormField>
      )}
    />

    <Field
      name="contactEmail"
      validate={isEmail}
      render={({ input, meta }) => (
        <FormField fullWidth>
          <Label
            htmlFor={input.name}
            text="Email"
            error={meta.touched && get(meta, 'error.length', 0) > 0}
          />
          <Input
            id={input.name}
            {...input}
            placeholder="you@email.com"
            error={meta.touched && get(meta, 'error.length', 0) > 0}
          />
        </FormField>
      )}
    />
  </Box>
);

EditForm.propTypes = {
  data: PropTypes.shape({
    asks: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      })
    ),
    companies: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      })
    ),
    industries: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      })
    ),
    interests: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      })
    ),
    neighborhoods: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      })
    ),
    offers: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      })
    ),
    positions: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      })
    ),
  }),
  onSearchAsks: PropTypes.func,
  onSearchCompanies: PropTypes.func,
  onSearchInterests: PropTypes.func,
  onSearchOffers: PropTypes.func,
  onSearchNeighborhoods: PropTypes.func,
  onSearchPositions: PropTypes.func,
  push: PropTypes.func.isRequired,
  pop: PropTypes.func.isRequired,
};

export default EditForm;
