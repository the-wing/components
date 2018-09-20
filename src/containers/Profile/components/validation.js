import _ from 'lodash';

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export const required = value => {
  const isEmpty = !value || value.length < 1 || _.isEmpty(value);

  return isEmpty ? 'Field is required.' : undefined;
};

export const maxLength = (value, maxLength) => {
  return value.length > maxLength ? `Field must be less than ${maxLength} characters.` : undefined;
};
