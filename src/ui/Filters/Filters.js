import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Button from 'ui/Button/Button';
import FilterOption from 'ui/Filters/FilterOption';
import { rem } from 'polished';

const animationsMillisecondsDuration = 400;

const animationClosing = props => keyframes`
  100% {
    height: 0;
    ${props.marginTop && `margin-top: ${props.marginTop};`}
    opacity: 0;
  }
`;

const animationOpening = props => keyframes`
  from {
    display: block;
    height: 0;
    ${props.marginTopFrom && `margin-top: ${props.marginTopFrom};`}
    opacity: 0;
  }
  to {
    ${props.heightTo && `height: ${props.heightTo};`}
    opacity: 1;
    ${props.marginTopTo && `margin-top: ${props.marginTopTo};`}
  }
`;

const filtersAnimationClose = { marginTop: -rem('37px') };

const filtersAnimationOpen = {
  marginTopFrom: -rem('35px'),
  marginTopTo: rem('6px'),
  heightFrom: 0,
  heightTo: rem('222px'),
};

const Header = styled.div`
  display: flex;
  border-bottom: ${rem('0.5px')} solid ${props => props.theme.colors.terracota.main};
  padding-bottom: ${rem('9px')};
`;

const Title = styled.span`
  font-size: 1rem;
  line-height: ${rem('19px')};
  opacity: 0.5;
  color: #040402;
  width: 50%;
`;

const FiltersContainer = styled.div`
  padding-top: ${rem('17px')};
  margin: ${rem('6px')} ${rem('16px')} ${rem('18px')};
  display: inherit;
  ${props => (props.animationHeight ? `height: ${props.animationHeight}` : '')};

  @media ${props => props.theme.queries.desktopLarge} {
    transition: all ${animationsMillisecondsDuration}ms ease;
    animation-timing-function: ease-in-out;
    margin: 0;
    display: 'block !important';
    &.mobile-closing {
      ${props => (props.animationHeight ? `height: calc(${props.animationHeight} - 22px)` : '')};
      animation-duration: ${animationsMillisecondsDuration}ms;
      animation-name: ${animationClosing(filtersAnimationClose)};
    }
    &.mobile-closed {
      display: none;
      height: 0;
      margin-top: -${rem('35px')};
      opacity: 0;
    }
    &.mobile-opening {
      animation-duration: ${animationsMillisecondsDuration}ms;
      animation-name: ${animationOpening(filtersAnimationOpen)};
    }
    &.mobile-open {
      height: 100%;
      margin-top: ${rem('6px')};
      opacity: 1;
    }
  }
  @media ${props => props.theme.queries.desktop} {
    &.mobile-open,
    &.mobile-closed {
      height: 100%;
      margin-top: ${rem('6px')};
      opacity: 1;
    }
  }
  `;

const ButtonContainer = styled.div`
  width: ${rem('70px')};
  align-self: flex-end;
  margin-left: auto;
  @media ${props => props.theme.queries.desktop} {
    width: ${rem('200px')};
  }
`;

const ClearButton = styled(Button)`
  text-align: right;
`;
  
class Filters extends PureComponent {
  state = {
    openFilter: null,
  };
  
  handleFilterTouch = (filter) => {
    this.setState(({ openFilter }) => ({
      openFilter: filter === openFilter ? null : filter,
      forceCollapse: false
    }));
  };
  
  handleClearFilters = () => {
    this.setState({ forceCollapse: true }, () => {
      this.props.clearFilters();
    })
  }
  
  render() {
    const {
      title,
      filterOptions,
      activeFilters,
      setFilter,
    } = this.props;
    
    return (
      <FiltersContainer>
        <Header>
          <Title>
            {title}
          </Title>
          <ButtonContainer>
            <ClearButton
              transparent
              color="terracota"
              variant="primary"
              uppercase={false}
              onClick={this.handleClearFilters}
              spacing="0"
              height={rem('20px')}
              weight="normal"
              >
              Clear All
            </ClearButton>
          </ButtonContainer>
        </Header>
        {filterOptions.map(option => (
          <FilterOption
            key={option.section}
            option={option}
            setFilter={setFilter}
            handleFilterTouch={this.handleFilterTouch}
            activeFilters={activeFilters}
            isOpen={this.state.openFilter === option.section && !this.state.forceCollapse}
          />
        ))}
      </FiltersContainer>
    );
  }
}

Filters.propTypes = {
  title: PropTypes.string.isRequired,
  filterOptions: PropTypes.arrayOf(PropTypes.shape({
    section: PropTypes.string.isRequired,
    filters: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }))
  }).isRequired).isRequired,
  activeFilters: PropTypes.shape({}).isRequired,
  clearFilters: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
};

Filters.defaultProps = {
  activeFilters: {},
};

export default Filters;
