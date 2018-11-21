import React from 'react';
import PropTypes from 'prop-types';
import chunk from 'lodash/chunk';
import styled from 'styled-components';
import { rem, rgba } from 'polished';
import { queries } from 'breakpoints';

import Icon from 'ui/Icon/Icon';
import Image from 'ui/Image/Image';
import Message from 'ui/Message/Message';
import match from 'assets/img/match.svg';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const User = styled.div`
  display: flex;
  flex: 0 1 auto;
  padding: 0 ${rem('15px')};

  @media ${queries.tablet} {
    flex: 2 0 auto;
    max-width: ${rem('485px')};
    padding: 0;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;

  @media ${queries.tablet} {
    max-width: ${rem('332px')};
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  align-self: flex-start;
  width: ${rem('52px')};
  height: ${rem('52px')};
  margin-right: ${rem('18px')};

  @media ${queries.tablet} {
    flex: none;
    width: ${rem('102px')};
    height: ${rem('102px')};
    margin-right: ${rem('22px')};
  }
`;

const Name = styled.span`
  color: ${props => props.theme.colors.black.main};
  font-weight: 600;

  @media ${queries.tablet} {
    font-size: ${rem('22px')};
    line-height: ${rem('28px')};
  }
`;

const Position = styled.span`
  color: ${props => props.theme.colors.solitude.main};
  font-size: ${rem('13px')};
  line-height: ${rem('18px')};

  @media ${queries.tablet} {
    font-size: ${rem('18px')};
    line-height: ${rem('23px')};
  }
`;

const Industry = styled.span`
  font-family: ${props => props.theme.text.secondary};
  font-weight: 600;
  font-size: ${rem('11px')};
  color: ${props => props.theme.colors.brandyPunch.main};
  text-transform: uppercase;
  letter-spacing: ${rem('0.3px')};

  @media ${queries.tablet} {
    font-size: ${rem('14px')};
    letter-spacing: ${rem('0.19px')};
    line-height: ${rem('18px')};
    margin-top: ${rem('13px')};
  }
`;

const Location = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-top: ${rem('7px')};

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: ${rem('-15px')};
    width: ${rem('93px')};
    height: ${rem('1px')};
    background: ${props => props.theme.colors.brandyPunch.main};
  }

  @media ${queries.tablet} {
    margin-top: ${rem('15px')};

    &::after {
      display: none;
    }
  }
`;

const LocationText = styled.span`
  color: ${props => props.theme.colors.solitude.main};
  padding-left: ${rem('8px')};
  font-size: ${rem('13px')};
  line-height: ${rem('18px')};

  @media ${queries.tablet} {
    font-size: ${rem('15px')};
    line-height: ${rem('21px')};
    letter-spacing: ${rem('0.2px')};
  }
`;

const AsksAndOfferings = styled.ul`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  margin: 0;
  list-style-type: none;
  margin-top: ${rem('30px')};
  padding: 0 ${rem('15px')};

  @media ${queries.tablet} {
    flex: 1 0 0;
    border-left: 1px solid ${props => props.theme.colors.brandyPunch.main};
    padding-top: ${rem('5px')};
    padding-bottom: ${rem('5px')};
    padding-left: ${rem('23px')};
    padding-right: 0;
    margin-top: 0;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: ${rem('13px')};
  line-height: ${rem('21px')};

  @media ${queries.tablet} {
    display: inline-block;
    font-size: ${rem('16px')};
    line-height: ${rem('19px')};

    &:not(:last-of-type) {
      padding-bottom: ${rem('26px')};
    }
  }
`;

const AskAndOfferingsTitle = styled.span`
  display: block;
  font-family: ${props => props.theme.text.secondary};
  color: ${props => rgba(props.theme.colors.black.main, 0.3)};
  font-size: ${rem('11px')};
  font-weight: 600;
  letter-spacing: ${rem('0.8px')};
  line-height: ${rem('13px')};
  text-transform: uppercase;
  width: ${rem('61px')};
  text-align: right;
  padding-right: ${rem('18px')};

  @media ${queries.tablet} {
    width: auto;
    text-align: left;
    padding-right: 0;
  }
`;

const ListValues = styled.span`
  color: ${props => props.theme.colors.solitude.main};
`;

const More = styled.span`
  color: ${props => props.theme.colors.terracota.main};
  padding-left: ${rem('5px')};
`;

const StyledMessage = styled(Message)`
  margin-top: ${rem('10px')};

  @media ${queries.tablet} {
    margin-left: ${rem('124px')};
  }
`;

const MessageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const MatchIcon = styled.div`
  display: block;
  height: ${rem('10px')};
  width: ${rem('13px')};
  background: url(${match}) no-repeat;
  background-size: cover;

  @media ${queries.tablet} {
    height: ${rem('14px')};
    width: ${rem('19px')};
  }
`;

const MessageText = styled.span`
  color: ${props => props.theme.colors.blueDark.main}
  font-size: ${rem('12px')};
  line-height: ${rem('17px')};
  flex: 1;
  margin-left: ${rem('14px')};

  @media ${queries.tablet} {
    font-size: ${rem('16px')};
    letter-spacing: ${rem('-0.39px')};
    line-height: ${rem('19px')};
  }
`;

const Member = ({ asksAndOfferings, imageUrl, industry, location, message, name, position }) => (
  <Container>
    <User>
      <ImageContainer>
        <Image title={name} url={imageUrl} circle />
      </ImageContainer>
      <Info>
        {name && <Name>{name}</Name>}
        {position && <Position>{position}</Position>}
        {industry && <Industry>{industry}</Industry>}
        {location && (
          <Location>
            <Icon name="homebase" size={16} color="grayChateau" />
            <LocationText>{location}</LocationText>
          </Location>
        )}
      </Info>
    </User>
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
            <ListItem>
              {item.title && <AskAndOfferingsTitle>{item.title}:</AskAndOfferingsTitle>}
              <span>
                <ListValues>{listValuesToDisplay.join(', ')}</ListValues>
                {list.length > 1 && list[1].length > 0 && <More>+{list[1].length} More</More>}
              </span>
            </ListItem>
          );
        })}
      </AsksAndOfferings>
    )}
    {message && (
      <StyledMessage>
        <MessageContent>
          <MatchIcon />
          <MessageText>{message}</MessageText>
        </MessageContent>
      </StyledMessage>
    )}
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
