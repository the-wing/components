import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from 'ui/Box/Box';
import Text from 'ui/Text/Text';

const SectionTitle = styled(Text)`
  margin-bottom: 10px;

  :after {
    background-color: ${props => props.theme.colors.gold.main};
    content: '';
    display: block;
    height: 1px;
    width: 50px;
  }
`;

const Section = ({ title, children, ...boxProps }) => (
  <Box column margin={{ top: 2 }} {...boxProps}>
    <SectionTitle as="h3" size={18 / 16} letterSpacing={-0.34} lineHeight={24} weight={700}>
      {title}
    </SectionTitle>
    <Box column>{children}</Box>
  </Box>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
