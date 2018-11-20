import React from 'react';
import PropTypes from 'prop-types';
import chunk from 'lodash/chunk';
import styled from 'styled-components';

import Image from 'ui/Image/Image';
import Text from 'ui/Text/Text';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Cell = styled.div`
  display: flex;
  flex-direction: column;
`;

const AsksAndOfferings = styled(Cell)`
  border-left: 1px solid ${props => props.theme.colors.brandyPunch.main};
`;

const Member = ({ asksAndOfferings, imageUrl, industry, location, name, position }) => (
  <Container>
    <Image title={name} url={imageUrl} width="102" height="102" circle />
    <Cell>
      {name && (
        <Text size={22 / 16} lineHeight="28" weight={600}>
          {name}
        </Text>
      )}
      {position && (
        <Text color="solitude" size={18 / 16} lineHeight="23">
          {position}
        </Text>
      )}
      {industry && (
        <Text
          color="brandyPunch"
          size={14 / 16}
          letterSpacing={0.19}
          lineHeight="18"
          variant="secondary"
          weight={600}
          uppercase
        >
          {industry}
        </Text>
      )}
      {location && (
        <Text color="solitude" size={15 / 16} letterSpacing={0.2} lineHeight="21">
          {location}
        </Text>
      )}
    </Cell>
    {asksAndOfferings.length > 0 && (
      <AsksAndOfferings>
        {asksAndOfferings.map(item => {
          if (!item.values || item.values.length < 1) {
            return null;
          }

          // ie) list = [['Yoga', 'Yoga classes', 'Yoga retreats'], ['Yoga teaching']]
          const list = chunk(item.values, 3);
          const listValuesToDisplay = list[0];

          return (
            <div>
              {item.title && <Text>{item.title}:</Text>}
              <Text>{listValuesToDisplay.join(', ')}</Text>
              {list.length > 1 && list[1].length > 0 && <Text>+{list[1].length} More</Text>}
            </div>
          );
        })}
      </AsksAndOfferings>
    )}
  </Container>
);

Member.defaultProps = {
  asksAndOfferings: [],
  imageUrl: 'assets/img/defaultAvatar.png',
  industry: null,
  location: null,
  name: null,
  position: null,
};

Member.propTypes = {
  asksAndOfferings: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      values: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  imageUrl: PropTypes.string,
  industry: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
};

export default Member;
