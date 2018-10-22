# components

Shared component library

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

---

## Development

To get up and running, just run `yarn start` and visit http://localhost:9001.

### Jest/Enzyme

TODO

### ESLint

TODO

### Prettier

To enforce a standard code style, a 🐶 [Husky](https://github.com/typicode/husky) pre-commit hook runs [Lint-Staged](https://github.com/okonet/lint-staged) to automatically format our code using ✨ [Prettier](https://prettier.io/docs/en/index.html).

### PR Requirements

Please refer to the [PR template](pull_request_template.md)

---

## Publishing

TODO

---

## Usage

### Normalize

If you want everything to appear correctly in all browsers, make sure to include our Normalize.css file at the root of your project:

```
import '@thewing/components/dist/css/normalize.css';
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
