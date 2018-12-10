import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';
import Icon from 'ui/Icon/Icon';

const Checkbox = styled.div`
  align-items: center;
  background-color: ${props => (props.active ? props.theme.colors.bunting.main : 'transparent')};
  border: 1px solid ${props => props.theme.colors.bunting.main};
  display: flex;
  height: ${rem('20px')};
  justify-content: center;
  margin-right: ${rem('12px')};
  width: ${rem('20px')};
`;

const StyledOptioncontainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  margin-bottom: ${rem('24px')}

  @media ${props => props.theme.queries.desktop} {
    &:hover ${Checkbox} {
      background-color: ${props => props.theme.colors.bunting.main};
    }
  )};
`;

const OptionName = styled.span`
  color: ${props => props.theme.colors.bunting.main};
  line-height: ${rem('18px')}
  margin-top: ${rem('4px')};
  font-size: ${rem('14px')};
`;

class Option extends PureComponent {
  handleClick = () => this.props.handleChange(this.props.filter._id);
  
  render () {
    const { active, filter } = this.props;
    
    return (
    <StyledOptioncontainer onClick={this.handleClick}>
      <Checkbox active={active.includes(filter._id)}>
      {active.includes(filter._id) && <Icon name="check" color="white" size={13} />}
      </Checkbox>
      <OptionName>
      {filter.name}
      </OptionName>
    </StyledOptioncontainer>
    )
  }
}

Option.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.shape({ 
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  active: PropTypes.arrayOf(PropTypes.string)
}

Option.defaultProps = {
  active: []
}

export default Option;