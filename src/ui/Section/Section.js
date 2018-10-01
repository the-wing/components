import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from 'ui/Box/Box';
import Text from 'ui/Text/Text';

const SectionTitle = styled(Text)`
  margin-bottom: 10px;
  color: ${props =>
    props.noContent ? props.theme.colors.grayChateau.main : props.theme.colors.black.main};

  :after {
    background-color: ${props =>
      props.noContent ? props.theme.colors.grayChateau.main : props.theme.colors.gold.main};
    content: '';
    display: block;
    height: 2px;
    width: 51px;
  }
`;

const Section = ({ title, children, noContent, ...boxProps }) => (
  <Box column margin={{ bottom: 2 }} {...boxProps}>
    {title && (
      <SectionTitle
        as="h3"
        size={18 / 16}
        letterSpacing={-0.34}
        lineHeight={24}
        weight={700}
        noContent={noContent}
      >
        {title}
      </SectionTitle>
    )}
    <Box column>{children}</Box>
  </Box>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {
  title: null,
};

export default Section;
