import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spring, animated } from 'react-spring';
import { rem } from 'polished';
import Icon from 'ui/Icon/Icon';
import Option from './Option';

const Container = styled.div`
  border-bottom: ${rem('0.5px')} solid ${props => props.theme.colors.terracota.main};
`;

const Header = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: ${rem('62px')};
`;

const OptionsContainer = styled(animated.div)`
  overflow: hidden;
  transition-timing-function: linear;
`;


const Caret = styled.div`
  margin-left: ${rem('16px')}
  margin-right: ${rem('10px')}
  transform: rotate(${props => (props.active ? '180deg' : '0deg')});
  transition: transform 1s ease;
`;

const Counter = styled.span`
  background-color: ${props => props.theme.colors.terracota.main};
  border-radius: 50%;
  box-sizing: border-box;
  display: block;
  height: ${rem('20px')}
  line-height: ${rem('20px')}
  margin: 0 ${rem('10px')};
  margin-top: ${rem('1px')};
  padding-top: ${rem('1px')}
  text-align: center;
  vertical-align: middle;
  width: ${rem('20px')}
  color: ${props => props.theme.colors.white.main};
  font-weight: 700;
  font-size: ${rem('12px')};
  font-family: ${props => props.theme.text.secondary};
  text-align: center
`;

const SpringContainer = styled.div`
  overflow-y: auto;
  max-height: none;
  
  @media ${props => props.theme.queries.desktopLarge} {
    max-height: ${rem('322px')}
  }
`;

const FilterName = styled.span`
  color: ${props => props.theme.colors.terracota.main};
  line-height: ${rem('14px')}
  margin-top: ${rem('4px')};
  font-size: ${rem('12px')};
  font-weight: 700;
  font-family: ${props => props.theme.text.secondary};
  text-transform: uppercase;
  letter-spacing: ${rem('1.85px')};
  flex: 1
`;

class FilterOption extends PureComponent {
  state = {
    accessor: this.props.option.section,
  }

  onChange = (filter) => {
    const { accessor } = this.state;
    this.props.setFilter({ accessor, filter })
  }

  handleChange = _id => {
    const { activeFilters } = this.props;
    const { accessor } = this.state;
    const active = activeFilters[accessor] || [];
    this.onChange(
      active.includes(_id)
      ? active.filter(item => item !== _id)
      : [...active, _id]
    );
  };
  
  onHeaderClick = () => {
    const { accessor } = this.state;
    this.props.handleFilterTouch(accessor);
  }

  render() {
    const { isOpen, option, activeFilters } = this.props;
    const { accessor } = this.state;
    const active = activeFilters[accessor];
    return (
      <Container>
        <Header onClick={this.onHeaderClick}>
          <FilterName
          >
            {option.section}
          </FilterName>
          {active && active.length > 0 && <Counter>{active.length}</Counter>}
          <Caret active={isOpen}>
            <Icon name="caret" color="terracota" size={12} />
          </Caret>
        </Header>
        <SpringContainer>
          <Spring
            native
            from={{ height: 0, opacity: 0 }}
            to={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
            >
            {style => (
              <OptionsContainer style={style}>
                {option.filters.map(filter => (
                  <Option 
                    key={filter._id} 
                    filter={filter} 
                    active={active}
                    handleChange={this.handleChange}>
                    
                  </Option>
                ))}
              </OptionsContainer>
            )}
          </Spring>
        </SpringContainer>
      </Container>
    );
  }
}

FilterOption.propTypes = {
  isOpen: PropTypes.bool,
  activeFilters: PropTypes.arrayOf(PropTypes.string),
  setFilter: PropTypes.func,
  handleFilterTouch: PropTypes.func.isRequired,
  option: PropTypes.shape({
    section: PropTypes.string.isRequired,
    filters: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }))
  }).isRequired
};

FilterOption.defaultProps = {
  isOpen: false,
};
export default FilterOption;
