import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const List = ({ children }) => <StyledList>{children}</StyledList>;

List.propTypes = {
  children: PropTypes.node.isRequired,
};

export default List;
