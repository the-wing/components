import React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import styled from 'styled-components';
import { rem, rgba } from 'polished';

import List from 'ui/List/List';
import ListItem, { StyledContent } from 'ui/ListItem/ListItem';
import Member from 'containers/Member/Member';
import { data as memberData } from 'containers/Member/Member.storyData';

const Page = styled.div`
  background: ${props => props.theme.colors.linen.main};
  height: 100%;
  padding: 2em 0;
`;

const Content = styled.div`
  margin: 0 auto;

  @media ${props => props.theme.queries.tablet} {
    width: 710px;
  }

  @media ${props => props.theme.queries.desktop} {
    width: 791px;
  }
`;

const StyledListItem = styled(ListItem)`
  ${StyledContent} {
    padding-top: ${rem('18px')};
    padding-bottom: 0;
    border-bottom: 1px solid ${props => rgba(props.theme.colors.black.main, 0.3)};

    @media ${props => props.theme.queries.tablet} {
      padding-top: ${rem('30px')};
      padding-bottom: ${rem('18px')};
      border-bottom: 1px solid ${props => props.theme.colors.brandyPunch.main};
    }
  }
`;

storiesOf('List', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('default', () => (
    <List>
      <ListItem>Some text</ListItem>
      <ListItem>Some more text</ListItem>
      <ListItem>Even more text</ListItem>
    </List>
  ))
  .add('with icons', () => (
    <List>
      <ListItem icon="location">Some text</ListItem>
      <ListItem icon="homebase">Some more text</ListItem>
      <ListItem icon="anniversary">Even more text</ListItem>
    </List>
  ))
  .add('with underlined items', () => (
    <List>
      <ListItem underline>Some text</ListItem>
      <ListItem underline>Some more text</ListItem>
      <ListItem underline>Even more text</ListItem>
    </List>
  ))
  .add('with underlined items and icons', () => (
    <List>
      <ListItem icon="location" underline>
        Some text
      </ListItem>
      <ListItem icon="homebase" underline>
        Some more text
      </ListItem>
      <ListItem icon="anniversary" underline>
        Even more text
      </ListItem>
    </List>
  ))
  .add('with Members', () => (
    <Page>
      <Content>
        <List>
          <StyledListItem underline>
            <Member {...memberData.leslieWithAsksAndOfferingsAndMessage} />
          </StyledListItem>
          <StyledListItem underline>
            <Member {...memberData.ronWithAsksAndOfferingsAndMessage} />
          </StyledListItem>
        </List>
      </Content>
    </Page>
  ));
