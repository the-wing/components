# components

Shared component library

## DEV TODO

### For 9/20

- [x] Add Storybook
- [x] File structure decisions
- [x] Add Drawer component
- [x] Add !isEditing version of profile
- [x] Add isEditing version of profile
- [x] Add Collapsible component
- [x] Add form handling
- [x] Split form sections into seperate components in container
- [ ] Offers
- [ ] Asks
- [ ] Interests
- [ ] Add addons for icons on social inputs
- [ ] Fix occupations adding and removing
- [ ] Add form validation
- [ ] Add loading (react-placeholder) state for profile
- [ ] Add dropdown component
- [ ] Add transition around profile drawer

### To be able to launch:

- [ ] On Meteor and React sides, normalize data
- [ ] Export `fonts.scss` to public/fonts.css and `theme.js` to `public/theme.js` for use in all apps (update directions below)
- [ ] Lerna for publishing to npm

### For the future

- [ ] Add [a11y addon](https://github.com/storybooks/storybook/tree/master/addons/a11y)
- [ ] Configure Jest
- [ ] Linting
- [x] Prettier (oops, couldn't resist)

---

## Usage

### Theme

To use our theme, just import it and use it in a `ThemeProvider`:

```
import { ThemeProvider } from 'styled-components';
import '@the-wing/components/theme';

  <ThemeProvider theme={theme}>
    [...]
  </ThemeProvider>
```

### Fonts

_In progress...not available yet_

To enable our fonts in your project, just include the sass file either in your JS or in the `<head>` of your index file:

`import '@the-wing/components/fonts.css'`

or

`<link rel="stylesheet" type="text/css" href="node_modules/@the-wing/components/fonts.css">`
