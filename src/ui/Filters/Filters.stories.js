import React from 'react';
import { storiesOf } from '@storybook/react';
import { State, Store } from '@sambego/storybook-state';
import Filters from 'ui/Filters/Filters';
import styled from 'styled-components';

const Page = styled.div`
  background: ${props => props.theme.colors.linen.main};
  height: 100vh;
  padding: 2em;
`;

const store = new Store({
  initialFilters: {
    format: [],
    location: [],
    topic: [],
  },
  filterOptions: [
    {
      filters: [
        { _id: '0', name: 'Raspberry' },
        { _id: '1', name: 'Vanilla' },
        { _id: '2', name: 'Sea Salt & Vinegar' },
      ],
      section: 'topping',
    },
    {
      filters: [
        { _id: '3', name: 'Blue' },
        { _id: '4', name: 'Golden' },
        { _id: '5', name: 'My Favorite Color' },
      ],
      section: 'color',
    },
  ],
  clearFilters: () => store.set({ activeFilters: store.get('initialFilters') }),
  setFilter: ({ accessor, filter }) =>
    store.set({ activeFilters: { ...store.get('activeFilters'), [accessor]: filter } }),
});

storiesOf('UI/Filters', module).add('default', () => (
  <State store={store}>
    {state => {
      return (
        <Page>
          <Filters
            title="Filter By"
            filterOptions={store.get('filterOptions')}
            activeFilters={store.get('activeFilters')}
            clearFilters={store.get('clearFilters')}
            setFilter={store.get('setFilter')}
          />
        </Page>
      );
    }}
  </State>
));
