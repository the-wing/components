import React from 'react';
import PropTypes from 'prop-types';
import chunk from 'lodash/chunk';
import styled from 'styled-components';
import { rem, rgba } from 'polished';

import Icon from 'ui/Icon/Icon';
import Image from 'ui/Image/Image';
import Message from 'ui/Message/Message';
import Text from 'ui/Text/Text';
import match from 'assets/img/match.svg';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Top = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: ${rem('10px')};
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${rem('332px')};
`;

const StyledImage = styled(Image)`
  margin-right: ${rem('22px')};
  align-self: flex-start;
`;

const IndustryText = styled(Text)`
  margin-top: ${rem('13px')};
`;

const Location = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-top: ${rem('15px')};
`;

const LocationText = styled(Text)`
  padding-left: ${rem('8px')};
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  list-style-type: none;
  border-left: 1px solid ${props => props.theme.colors.brandyPunch.main};
  padding-top: ${rem('5px')};
  padding-bottom: ${rem('5px')};
  padding-left: ${rem('23px')};
  margin-left: ${rem('23px')};

  > li:not(:last-of-type) {
    padding-bottom: ${rem('26px')};
  }
`;

const AskAndOfferingsTitle = styled.span`
  display: block;
  font-family: ${props => props.theme.text.secondary};
  color: ${props => rgba(props.theme.colors.black.main, 0.3)};
  font-size: ${rem('11px')};
  font-weight: 600;
  letter-spacing: 0.8px;
  line-height: ${rem('13px')};
  text-transform: uppercase;
`;

const MoreText = styled(Text)`
  padding-left: ${rem('5px')};
`;

const MessageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const MatchIcon = styled.div`
  display: block;
  height: ${rem('14px')};
  width: ${rem('19px')};
  background: url(${match}) no-repeat;
  background-size: cover;
`;

const MessageText = styled(Text)`
  flex: 1;
  margin-left: ${rem('14px')};
`;

const Member = ({ asksAndOfferings, imageUrl, industry, location, message, name, position }) => (
  <Container>
    <StyledImage title={name} url={imageUrl} width="102" height="102" circle />
    <Content>
      <Top>
        <Info>
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
            <IndustryText
              color="brandyPunch"
              size={14 / 16}
              letterSpacing={0.19}
              lineHeight="18"
              variant="secondary"
              weight={600}
              uppercase
            >
              {industry}
            </IndustryText>
          )}
          {location && (
            <Location>
              <Icon name="homebase" size={16} color="grayChateau" />
              <LocationText color="solitude" size={15 / 16} letterSpacing={0.2}>
                {location}
              </LocationText>
            </Location>
          )}
        </Info>

        {asksAndOfferings.length > 0 && (
          <List>
            {asksAndOfferings.map(item => {
              if (!item.values || item.values.length < 1) {
                return null;
              }

              // ie) list = [['Yoga', 'Yoga classes', 'Yoga retreats'], ['Yoga teaching']]
              const list = chunk(item.values, 3);
              const listValuesToDisplay = list[0];

              return (
                <li>
                  {item.title && <AskAndOfferingsTitle>{item.title}:</AskAndOfferingsTitle>}
                  <Text color="solitude" lineHeight="19">
                    {listValuesToDisplay.join(', ')}
                  </Text>
                  {list.length > 1 &&
                    list[1].length > 0 && (
                      <MoreText color="terracota" lineHeight="19">
                        +{list[1].length} More
                      </MoreText>
                    )}
                </li>
              );
            })}
          </List>
        )}
      </Top>
      {message && (
        <Message>
          <MessageContent>
            <MatchIcon />
            <MessageText color="blueDark" letterSpacing={-0.39} lineHeight="19">
              {message}
            </MessageText>
          </MessageContent>
        </Message>
      )}
    </Content>
  </Container>
);

Member.defaultProps = {
  asksAndOfferings: [],
  imageUrl: 'assets/img/defaultAvatar.png',
  industry: null,
  location: null,
  message: null,
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
  message: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
};

export default Member;
