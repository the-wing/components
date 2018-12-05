import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Button from 'ui/Button/Button';
import FilterOption from 'ui/Filters/FilterOption';
import { debounce } from 'lodash';

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
  width: 10%;
`;

const FiltersContainer = styled.div`
  padding-top: 17px;
  margin: '6px 16px 18px';
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
  @media ${props => props.theme.queries.desktopLarge} {
    &.mobile-open,
    &.mobile-closed {
      height: 100%;
      margin-top: 6px;
      opacity: 1;
    }
  }
  `;
  
class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.filterContainerRef = React.createRef();
  }
  
  state = {
    openFilter: null,
    isMobileView: false,
    isMobileFilterOpen: false,
    isClosing: false,
    isOpening: false,
    filtersContainerHeight: 'auto',
  };
  
  componentDidMount() {
    window.addEventListener('resize', (this.resize = debounce(this.resize.bind(this), 500)));
    this.resize();
  }
    
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
  

  resize() {
    const w = window;
    const d = document;
    const e = d.documentElement;
    const g = d.getElementsByTagName('body')[0];
    const windowWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    const filtersContainer = this.filterContainerRef;
    const heightFiltersContainer =
      (filtersContainer &&
        filtersContainer.current &&
        `${filtersContainer.current.clientHeight}px`) ||
      '235px';
    this.setState({
      filtersContainerHeight: heightFiltersContainer,
      isMobileView: windowWidth < 1200,
    });
  }

  _animationCloseCompleted = () => {
    this.setState({ isClosing: false });
  };

  _animationOpenCompleted = () => {
    this.setState({ isOpening: false }, () => this.resize());
  };

  _handleToggleMobileFilters = () => {
    this.setState(
      {
        isMobileFilterOpen: !this.state.isMobileFilterOpen,
        isClosing: this.state.isMobileFilterOpen === true,
        isOpening: this.state.isMobileFilterOpen === false,
      },
      () => {
        if (this.state.isOpening) {
          this.tmrOpeningAnimation = setTimeout(
            () => this._animationOpenCompleted(),
            animationsMillisecondsDuration * 0.9
          );
        }
        if (this.state.isClosing) {
          this.tmrClosingAnimation = setTimeout(
            () => this._animationCloseCompleted(),
            animationsMillisecondsDuration * 0.9
          );
        }
      }
    );
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

    const { isClosing, isOpening, isMobileFilterOpen, filtersContainerHeight } = this.state;
    return (
      <FiltersContainer
        ref={this.filterContainerRef}
        className={
          isMobileFilterOpen
            ? isOpening
              ? 'mobile-opening'
              : 'mobile-open'
            : isClosing
            ? 'mobile-closing'
            : 'mobile-closed'
        }
        animationHeight={filtersContainerHeight}
      >
        <Header>
          <Title>
            {title}
          </Title>
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
      </FiltersContainer>
    );
  }
}

Filters.FilterOption = FilterOption;

export default Filters;
