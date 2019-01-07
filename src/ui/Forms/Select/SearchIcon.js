import styled from 'styled-components';
import { rem } from 'polished';
import searchIcon from 'assets/img/search.svg';

// prettier-ignore
const SearchIcon = styled.div`
  display: inline-block;
  content: "";
  width: ${rem('14px')};
  height: ${rem('14px')};
  background: url(${searchIcon}) no-repeat;
  margin-right: ${rem('16px')};
  margin-left: ${rem('16px')};
`;

export default SearchIcon;
