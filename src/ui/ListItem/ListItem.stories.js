import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import ListItem from 'ui/ListItem/ListItem';

const Content = styled.span`
  display: flex;
  justify-content: space-between;
`;

storiesOf('ListItem', module)
  .add('default', () => <ListItem>List Item</ListItem>)
  .add('with icon', () => <ListItem icon="location">List Item</ListItem>)
  .add('with underline', () => <ListItem underline>List Item</ListItem>)
  .add('with icon and underline', () => (
    <ListItem icon="location" underline>
      List Item
    </ListItem>
  ))
  .add('with element as child', () => (
    <ListItem underline>
      <Content>
        <div>To the left</div>
        <div>To the right</div>
      </Content>
    </ListItem>
  ));
