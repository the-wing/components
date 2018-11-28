# components

Shared component library

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

---

## Development

To get up and running, just run `yarn start` and visit http://localhost:9001.

### PR Requirements

Please refer to the [PR template](pull_request_template.md)

## Workflow

1. Open a PR against `master` and fill out necessary fields in [PR template](pull_request_template.md).
2. Request a code review from at least one person.
3. After code has been approved, post link to deploy preview in Jira ticket for UAT.
4. After UAT approved, merge and ask [@cullenbmacdonald](https://github.com/cullenbmacdonald) or [@rfarine](https://github.com/rfarine) to publish your changes.
5. Update version of library in whichever branch you're working on in Members Portal or Meteor application.

### Jest/Enzyme

TODO: Coming soon!

### ESLint

TODO: Coming soon!

### Prettier

To enforce a standard code style, a 🐶 [Husky](https://github.com/typicode/husky) pre-commit hook runs [Lint-Staged](https://github.com/okonet/lint-staged) to automatically format our code using 💅 [Prettier](https://prettier.io/docs/en/index.html).

### Polished

For some useful CSS helpers, we use ✨ [Polished](https://polished.js.org/docs).

---

## Publishing

Bump the version on master and run `npm publish`. (Process TBD)

---

## Usage

### Normalize

If you want everything to appear correctly in all browsers, make sure to include our Normalize.css file at the root of your project:

```
import '@thewing/components/dist/css/normalize.css';
```

### Breakpoints

**Important**: We always design _mobile first_. In the following styled component, we style anything that is smaller than desktop with a red border. We then use the desktop media query to override these mobile and tablet styles.

For _styling within this library_ based on device size, you can do the following:

```
import styled from 'styled-components';
import { queries } from 'breakpoints';

const StyledDiv = styled.div`
  border: 1px solid red;

  @media ${queries.desktop} {
    border: none;
  }
`;
```

**ALSO IMPORTANT** Please refrain from using the `responsive` util going forward. That util is legacy and will be phased out in time.

For _showing/hiding different components in a component's layout_, we use [React Breakpoints](https://github.com/ehellman/react-breakpoints) to conditionally render components at different breakpoints. It is required to wrap your application with a `ReactBreakpoints` component like so:

```
import ReactBreakpoints from 'react-breakpoints';
import breakpoints from '@thewing/components/dist/breakpoints';

  <ReactBreakpoints breakpoints={breakpoints}>
    [...]
  </ReactBreakpoints>
```

When creating components, we do _not_ use the HoC `withBreakpoints`, but rather favor the [render props approach](https://github.com/ehellman/react-breakpoints#render-props):

```
import { Media } from 'react-breakpoints';

const Navigation = () => (
  {({ breakpoints, currentBreakpoint }) => {
    if (breakpoints[currentBreakpoint] < breakpoints.desktop) {
      return (<MobileNavIcon />);
    }

    return (<NavBar/>);
  }}
);

export default Navigation;
```

### Theme

To use our theme, just import it and use it in a `ThemeProvider`:

```
import { ThemeProvider } from 'styled-components';
import '@thewing/components/dist/theme';

  <ThemeProvider theme={theme}>
    [...]
  </ThemeProvider>
```

### Fonts

To enable our fonts in your project, just include the sass file either in your index JS or in the `<head>` of your index HTML. You'll also need to import the fonts (either by hosting them yourself or adding the folder `node_modules/@thewing/components/dist/assets/fonts` as a part of your build step.)

`import '@thewing/components/dist/css/fonts.css'`

---

## Roadmap

- [ ] [Changelog/versioning](https://github.com/conventional-changelog/standard-version)
- [ ] Possibly checkout [Bit](https://bitsrc.io/features) for publishing [several components](https://blog.bitsrc.io/building-a-shared-ui-component-library-350b297a53a8)
- [ ] Once all addons support Babel 7, switch to babel 7, add Webpack 4.
- [ ] PR checklist
- [ ] GreenKeeper
- [ ] Configure Jest
- [ ] Linting!!!
- [ ] Add styled-system for consistency in styling
- [ ] Add PropTypes to all the subfolders in Profile/components
- [ ] Refactor responsive util so that we're not passing unnecessary props to dom elements
- [ ] Add [a11y addon](https://github.com/storybooks/storybook/tree/master/addons/a11y)
- [x] Prettier
