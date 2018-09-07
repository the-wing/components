# components
Shared component library


## DEV TODO

### For 9/20
- [x] Add Storybook
- [x] File structure decisions
- [ ] Add Drawer component
- [ ] Add components/profile + components/profileSidebar (?) (add transition around drawer)
- [ ] Container (?) component for Profile sidebar
- [ ] Export fonts.scss to public/fonts.css for use in all apps (update directions below)
- [ ] Lerna for publishing to npm

### For the future
- [ ] Add [a11y addon](https://github.com/storybooks/storybook/tree/master/addons/a11y)
- [ ] Configure Jest
- [ ] Linting/Prettier

---

## Usage

### Fonts

*In progress...not available yet*

To enable our fonts in your project, just include the sass file either in your JS or in the `<head>` of your index file:

  `import '@the-wing/components/fonts.css'`

  or

  `<link rel="stylesheet" type="text/css" href="node_modules/@the-wing/components/fonts.css">`