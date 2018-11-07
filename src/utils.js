import { css } from 'styled-components';

export const responsive = (cssProp, prop, transform = null) => props => {
  const values = Array.isArray(props[prop]) ? props[prop] : [props[prop]];

  return css`
    ${cssProp}: ${transform ? transform(values[0]) : values[0]};

    ${values.map((value, i) => (value !== null ? value : values[i - 1])).map(
      (value, i) => `
    @media (min-width: ${props.theme.breakpoints[i]}px) {
        ${cssProp}: ${transform ? transform(value) : value};
      }
    `
    )};
  `;
};

export const getDaysPerMonth = month => {
  const monthsWith30days = ['04', '06', '09', '11'];
  return (month === '02' && 29) || (monthsWith30days.indexOf(month) > -1 && 30) || 31;
};
