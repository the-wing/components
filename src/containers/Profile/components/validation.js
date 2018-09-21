import _ from 'lodash';
import validator from 'validator';

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export const required = value => {
  const isEmpty = !value || value.length < 1 || _.isEmpty(value);

  return isEmpty ? 'Field is required.' : undefined;
};

export const maxLength = max => value => {
  if (!value) {
    return undefined;
  }

  return value.length > max ? `Field must be less than ${max} characters.` : undefined;
};

export const isWebsite = value => {
  if (!value) {
    return undefined;
  }

  return validator.isURL(value, { require_host: false, require_valid_protocol: false })
    ? undefined
    : 'Please enter a valid web address.';
};

export const isInstagramHandle = value => {
  if (!value) {
    return undefined;
  }

  return validator.matches(value, /^@?(\.|\w){1,30}$/)
    ? undefined
    : 'Please enter a valid Instagram handle.';
};

export const isTwitterHandle = value => {
  if (!value) {
    return undefined;
  }

  return validator.matches(value, /^@?(\w){1,15}$/)
    ? undefined
    : 'Please enter a valid Twitter handle.';
};

export const isFacebookUrl = value => {
  if (!value) {
    return undefined;
  }

  return validator.matches(value, /^(?:https:\/\/)(?:www\.)?facebook\.com\/[A-Za-z.0-9]{5,50}/)
    ? undefined
    : 'Please enter a valid Facebook user name.';
};

export const isEmail = value => {
  if (!value) {
    return undefined;
  }

  return validator.isEmail(value) ? undefined : 'Please enter a valid email address.';
};
