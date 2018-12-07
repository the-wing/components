import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Button from 'ui/Button/Button';
import FilterOption from 'ui/Filters/FilterOption';

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
    height: 0px;
    ${props.marginTopFrom && `margin-top: ${props.marginTopFrom};`}
    opacity: 0;
  }
  to {
    ${props.heightTo && `height: ${props.heightTo};`}
    opacity: 1;
    ${props.marginTopTo && `margin-top: ${props.marginTopTo};`}
  }
`;

const filtersAnimationClose = { marginTop: '-37px' };

const filtersAnimationOpen = {
  marginTopFrom: '-35px',
  marginTopTo: '6px',
  heightFrom: 0,
  heightTo: '222px',
};

const Header = styled.div`
  display: flex;
  border-bottom: 0.5px solid ${props => props.theme.colors.terracota.main};
  padding-bottom: 9px;
`;

const Title = styled.span`
  font-size: 1rem;
  line-height: 19px;
  opacity: 0.5;
  color: #040402;
  margin-top: 11px;
  width: 40%;

  @media ${props => props.theme.queries.desktop} {
    width: 20%;
  }
`;

const FiltersContainer = styled.div`
  padding-top: 17px;
  margin: 6px 16px 18px;
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
      height: 0px;
      margin-top: -35px;
      opacity: 0;
    }
    &.mobile-opening {
      animation-duration: ${animationsMillisecondsDuration}ms;
      animation-name: ${animationOpening(filtersAnimationOpen)};
    }
    &.mobile-open {
      height: 100%;
      margin-top: 6px;
      opacity: 1;
    }
  }
  @media ${props => props.theme.queries.desktop} {
    &.mobile-open,
    &.mobile-closed {
      height: 100%;
      margin-top: 6px;
      opacity: 1;
    }
  }
  `;

const ClearButton = styled(Button)`
  align-self: flex-end;
  margin-left: auto;
  text-align: right;
`;
  
class Filters extends React.Component {
  
  state = {
    openFilter: null,
  };
    
  static propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
    activeFilters: PropTypes.shape({}).isRequired,
    clearFilters: PropTypes.func.isRequired,
    setFilter: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    activeFilters: {},
  };

  _handleFilterTouch = (filter) => {
    this.setState(({ openFilter }) => ({
      openFilter: filter === openFilter ? null : filter,
      forceCollapse: false
    }));
  };

  _clearFilters = () => {
    this.setState({ forceCollapse: true }, () => {
      this.props.clearFilters();
    })
  }

  render() {
    const {
      title,
      options,
      activeFilters,
      setFilter,
      children,
    } = this.props;

    return (
      <FiltersContainer>
        <Header>
          <Title>
            {title}
          </Title>
          <ClearButton
            transparent
            color="terracota"
            variant="primary"
            uppercase={false}
            onClick={this._clearFilters}
            spacing="0"
            width={["70px", null,"200px", null]}
            height="20px"
          >
            Clear All
          </ClearButton>
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
            isOpen: this.state.openFilter === accessor && !this.state.forceCollapse,
            onHeaderClick: () => {
              this._handleFilterTouch(accessor);
            },
            onChange: (filter) => {
              setFilter({ accessor, filter });
            }
          });
        })}
      </FiltersContainer>
    );
  }
}

Filters.FilterOption = FilterOption;

export default Filters;
