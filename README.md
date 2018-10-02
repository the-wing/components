# components

Shared component library

---

## Development

TODO

### Jest/Enzyme

TODO

### ESLint

TODO

### Prettier

TODO

### PR Requirements

TODO

---

## Publishing

TODO

---

## Usage

### Theme

To use our theme, just import it and use it in a `ThemeProvider`:

```
import { ThemeProvider } from 'styled-components';
import '@thewing/components/theme';

  <ThemeProvider theme={theme}>
    [...]
  </ThemeProvider>
```

### Fonts

To enable our fonts in your project, just include the sass file either in your index JS or in the `<head>` of your index HTML. You'll also need to import the fonts (either by hosting them yourself or adding the folder `node_modules/@thewing/components/dist/assets/fonts` as a part of your build step.)

`import '@thewing/components/css/fonts.css'`

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
- [x] Add addons for icons on social inputs (alter validation)
- [x] Social spans for auto-filled values
- [x] Fix validation on image uploads! ugh
- [x] Add callbacks to search Selects that make async calls
- [x] Change text color of sections for readonly
- [x] New avatar image

### To be able to use:

- [x] onSubmit (format for sending back to react/meteor)
- [ ] On Meteor and React sides, normalize data (make sure to sanitize social -- remove `https://facebook.com`, remove @ symbols)
- [x] Export `fonts.scss` to public/fonts.css and `theme.js` to `public/theme.js` for use in all apps (update directions below)

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
