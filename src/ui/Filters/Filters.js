import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from 'ui/Text/Text';
import Button from 'ui/Button/Button';
import FilterOption from 'ui/Filters/FilterOption';

const Header = styled.div`
  display: flex;
  border-bottom: 0.5px solid ${props => props.theme.colors.terracota.main};
  padding-bottom: 9px;
`;

class Filters extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
    activeFilters: PropTypes.shape({}).isRequired,
    clearFilters: PropTypes.func.isRequired,
    setFilter: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    forceCollapse: PropTypes.bool
  };

  static defaultProps = {
    forceCollapse: false,
    activeFilters: {},
  };

  state = {
    openFilter: null
  };

  _handleFilterTouch = (filter) => {
    this.setState(({ openFilter }) => ({
      openFilter: filter === openFilter ? null : filter
    }));
  };

  render() {
    const {
      title,
      options,
      activeFilters,
      clearFilters,
      setFilter,
      children,
      forceCollapse
    } = this.props;
    return (
      <div>
        <Header>
          <Text size={1} lineHeight={19} style={{ flex: 1, color: '#040402', opacity: 0.5 }}>
            {title}
          </Text>
          <Button
            thin
            transparent
            color="terracota"
            font="primary"
            uppercase={false}
            onClick={clearFilters}
          >
            Clear All
          </Button>
        </Header>
        {React.Children.map(children, (child) => {
          const { accessor } = child.props;
          const active = activeFilters[accessor];
          const { filters: data } = options.find(option => option.section === accessor) || {};

          if (!data) {
            return <div>Filter with section: {accessor} not found.</div>;
          }

          return React.cloneElement(child, {
            active,
            data,
            isOpen: this.state.openFilter === accessor && !forceCollapse,
            onHeaderClick: () => {
              this._handleFilterTouch(accessor);
            },
            onChange: (filter) => {
              setFilter({ accessor, filter });
            }
          });
        })}
      </div>
    );
  }
}

Filters.FilterOption = FilterOption;

export default Filters;
