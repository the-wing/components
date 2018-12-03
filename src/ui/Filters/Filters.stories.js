import React, { PureComponent } from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import Filters from 'ui/Filters/Filters';
import styled from 'styled-components';

const Page = styled.div`
  background: ${props => props.theme.colors.linen.main};
  height: 100vh;
  padding: 2em;
`;

const initialFilters = {
  format: [],
  location: [],
  topic: [],
};

const filterOptions = [{
  filters: [{ _id: "0", name: "Raspberry" }, { _id: "1", name: "Vanilla" }, { _id: "2", name: "Sea Salt & Vinegar"}],
  section: "topping",
},{
  filters: [{ _id: "3", name: "Blue" }, { _id: "4", name: "Golden" }, { _id: "5", name: "My Favorite Color"}],
  section: "color",
}];

class FilterContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeFilters: initialFilters,
      filterOptions: filterOptions,
    }
  }

  clearFilters = () => this.setState({ activeFilters: initialFilters});
  setFilter = ({ accessor, filter }) => this.setState({ activeFilters: { ...this.state.activeFilters, [accessor]: filter }});

  render() {
    const { filterOptions, activeFilters } = this.state;

    return (
      <Filters
        title="Filter By"
        options={filterOptions}
        activeFilters={activeFilters}
        clearFilters={this.clearFilters}
        setFilter={this.setFilter}
      >
        <Filters.FilterOption name="Topping" accessor="topping" />
        <Filters.FilterOption name="Color" accessor="color" />
      </Filters>
    )
  }
}


storiesOf('Filters', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('default', () => (
    <Page>
      <FilterContainer/>
    </Page>
  ));

