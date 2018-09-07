import { css } from 'styled-components';
import theme from 'theme';

export const responsive = (cssProp, prop, transform = null) => (props) => {
  const values = Array.isArray(props[prop]) ? props[prop] : [props[prop]];

  return css`
    ${cssProp}: ${transform ? transform(values[0]) : values[0]};

    ${values.map((value, i) => (value !== null ? value : values[i - 1])).map((value, i) => `
    @media (min-width: ${theme.breakpoints[i]}px) {
        ${cssProp}: ${transform ? transform(value) : value};
      }
    `)};
  `;
};

export default responsive;