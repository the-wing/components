import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spring, animated } from 'react-spring';
import Icon from 'ui/Icon/Icon';

const Container = styled.div`
  border-bottom: 0.5px solid ${props => props.theme.colors.terracota.main};
`;

const Header = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 62px;
`;

const Checkbox = styled.div`
  align-items: center;
  background-color: ${props => (props.active ? props.theme.colors.bunting.main : 'transparent')};
  border: 1px solid ${props => props.theme.colors.bunting.main};
  display: flex;
  height: 20px;
  justify-content: center;
  margin-right: 12px;
  width: 20px;
`;

const OptionsContainer = styled(animated.div)`
  overflow: hidden;
  transition-timing-function: linear;
`;

const Option = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  margin-bottom: 24px;

  @media ${props => props.theme.queries.desktop} {
    &:hover ${Checkbox} {
      background-color: ${props => props.theme.colors.bunting.main};
    }
  )};
`;

const Caret = styled.div`
  margin-left: 16px;
  margin-right: 10px;
  transform: rotate(${props => (props.active ? '180deg' : '0deg')});
  transition: transform 1s ease;
`;

const Counter = styled.span`
  background-color: ${props => props.theme.colors.terracota.main};
  border-radius: 50%;
  box-sizing: border-box;
  display: block;
  height: 20px;
  line-height: 20px;
  margin: 0 10px;
  margin-top: 1px;
  padding-top: 1px;
  text-align: center;
  vertical-align: middle;
  width: 20px;
  color: ${props => props.theme.colors.white.main};
  font-weight: 700;
  font-size: ${12/16}rem;
  font-family: ${props => props.theme.text.secondary};
  text-align: center
`;

const SpringContainer = styled.div`
  overflow-y: auto;
  max-height: none;
  
  @media ${props => props.theme.queries.desktopLarge} {
    max-height: 322px;
  }
`;

const OptionName = styled.span`
  color: ${props => props.theme.colors.bunting.main};
  line-height: 18px;
  margin-top 4px;
  font-size: ${14/16}rem;
`;

const FilterName = styled.span`
  color: ${props => props.theme.colors.terracota.main};
  line-height: 14px;
  margin-top 4px;
  font-size: ${12/16}rem;
  font-weight: 700;
  font-family: ${props => props.theme.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1.85px;
  flex: 1
`;

class FilterOption extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    name: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({})),
    active: PropTypes.arrayOf(PropTypes.string),
    onHeaderClick: PropTypes.func,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    isOpen: false,
    data: [],
    active: [],
    onHeaderClick: null,
    onChange: null,
  };

  _handleChange = option => {
    this.props.onChange(
      this.props.active.includes(option)
        ? this.props.active.filter(item => item !== option)
        : [...this.props.active, option]
    );
  };

  renderOptions = style => {
    const { data, active } = this.props;

    return (
      <OptionsContainer style={style}>
        {data.map(option => (
          <Option key={option._id} onClick={() => this._handleChange(option._id)}>
            <Checkbox active={active.includes(option._id)}>
              {active.includes(option._id) && <Icon name="check" color="white" size={13} />}
            </Checkbox>
            <OptionName>
              {option.name}
            </OptionName>
          </Option>
        ))}
      </OptionsContainer>
    );
  };

  render() {
    const { isOpen, name, active, onHeaderClick } = this.props;

    return (
      <Container>
        <Header onClick={onHeaderClick}>
          <FilterName
          >
            {name}
          </FilterName>{' '}
          {active.length ? (
            <Counter>
              {active.length}
            </Counter>
          ) : null}
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
            {this.renderOptions}
          </Spring>
        </SpringContainer>
      </Container>
    );
  }
}

export default FilterOption;
