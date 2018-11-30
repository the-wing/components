import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { rem } from 'polished';
import { ErrorLoading } from 'ui/Errors';
import Button from 'ui/Button/Button';

const ButtonContainer = styled.div`
  margin-top: ${rem('26px')};
`;

storiesOf('ErrorLoading', module)
  .add('default', () => <ErrorLoading mainText="Default Error Loading Text" />)
  .add('attendees', () => <ErrorLoading mainText="The attendees list isn’t loading right now." />)
  .add('with button', () => (
    <ErrorLoading mainText="The attendees list isn’t loading right now.">
      <ButtonContainer>
        <Button
          bordered
          variant="primary"
          uppercase={false}
          height="42px"
          width="168px"
          spacing={1}
          weight={600}
          size={14}
          onClick={() => {
            console.log('fetch data');
          }}
        >
          Refresh
        </Button>
      </ButtonContainer>
    </ErrorLoading>
  ));
