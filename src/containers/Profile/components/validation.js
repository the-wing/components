import isEmpty from 'lodash/isEmpty';
import validator from 'validator';

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export const required = value => {
  const empty = !value || value.length < 1 || isEmpty(value);

  return empty ? 'Field is required.' : undefined;
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

  // URL does not start with http:// or https://
  // And has a valid TLD
  return !validator.matches(value, /^https?:\/\//) &&
    validator.isURL(value, { require_host: false, require_valid_protocol: false })
    ? undefined
    : 'Please enter a valid web address (without http:// or https://)';
};

export const isInstagramHandle = value => {
  if (!value) {
    return undefined;
  }

  // Handle is 1-30 characters and does not contain @ symbol
  return validator.matches(value, /^(\.|\w){1,30}$/)
    ? undefined
    : 'Please enter a valid Instagram handle (1-30 characters, without @ symbol)';
};

export const isTwitterHandle = value => {
  if (!value) {
    return undefined;
  }

  // Handle is 1-15 characters and does not contain @ symbol
  return validator.matches(value, /^(\w){1,15}$/)
    ? undefined
    : 'Please enter a valid Twitter handle (1-15 characters, without @ symbol)';
};

export const isFacebookUrl = value => {
  if (!value) {
    return undefined;
  }

  // Is not a URL
  // Handle is 5-50 characters
  return !validator.isURL(value, { require_host: false, require_valid_protocol: false }) &&
    validator.matches(value, /^[A-Za-z.0-9]{5,50}/)
    ? undefined
    : 'Please enter a valid Facebook user name (5-50 characters), and without Facebook URL';
};

export const isEmail = value => {
  if (!value) {
    return undefined;
  }

  return validator.isEmail(value) ? undefined : 'Please enter a valid email address.';
};

const validateImageWidth = value => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = value;

    image.onload = () => {
      const width = image.width;

      if (width < 98) {
        return resolve('Please insert a photo that is at least 125 pixels wide.');
      }

      return resolve(undefined);
    };
  });
};

export const validateAvatar = async value => {
  const errorMessage = await validateImageWidth(value);

  return errorMessage;
};
