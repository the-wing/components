import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import searchIcon from 'assets/img/search.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  height: ${rem('42px')};
  padding: ${rem('8px')} 0;
  align-self: baseline;
`;

// prettier-ignore
const Search = styled.div`
  display: inline-block;
  content: "";
  width: ${rem('14px')};
  height: ${rem('14px')};
  background: url(${searchIcon}) no-repeat;
  margin-right: ${rem('16px')};
  margin-left: ${rem('16px')};
`;

const SearchIcon = () => (
  <Container>
    <Search />
  </Container>
);

export default SearchIcon;
