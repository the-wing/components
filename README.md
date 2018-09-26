# components

Shared component library

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

`import '@the-wing/components/css/fonts.css'`

or

`<link rel="stylesheet" type="text/css" href="node_modules/@the-wing/components/css/fonts.css">`

---

## DEV TODO

### For v1

- [x] Add Storybook
- [x] File structure decisions
- [x] Add Drawer component
- [x] Add !isEditing version of profile
- [x] Add isEditing version of profile
- [x] Add Collapsible component
- [x] Add Select component
- [x] Add form handling
- [x] Split form sections into seperate components in container
- [x] Offers
- [x] Asks
- [x] Interests
- [x] ReadOnly version (cannot edit)
- [x] Avatar uploader
- [x] Fix occupations adding and removing
- [x] positions, companies, neighborhoods should come back in data object
- [x] Add form validation
- [x] Add contact email field
- [x] Add loading (react-placeholder) state for profile
- [x] Add transition around drawer
- [ ] Add addons for icons on social inputs and spans for auto-filled values (alter validation)
- [ ] Fix validation on image uploads! ugh
- [ ] onSubmit, format social properly (add http:// if needed on website, remove @ on instagram, remove @ on twitter handle, etc)
- [ ] onSubmit, check if avatarUrl value is default avatar and if so, don't send over avatarUrl (also, do this: https://github.com/final-form/react-final-form/issues/92)
- [ ] Change text color of sections for readonly
- [ ] New avatar image (allow for inline SVGs)

### To be able to use:

- [ ] On Meteor and React sides, normalize data
- [ ] Export `fonts.scss` to public/fonts.css and `theme.js` to `public/theme.js` for use in all apps (update directions below)

### For the future

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
- [x] Prettier (oops, couldn't resist)
