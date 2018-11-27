import React from 'react';
import PropTypes from 'prop-types';
import compact from 'lodash/compact';
import get from 'lodash/get';
import ReactPlaceholder from 'react-placeholder';
import { Transition } from 'react-spring';

import Box from 'ui/Box/Box';

import Bio from './Bio';
import ChipList from './ChipList';
import Industry from './Industry';
import Occupations from './Occupations';

import EmptyStateButton from '../EmptyStateButton';

const Container = ({ children }) => (
  <Box column grow padding={{ horizontal: 2, vertical: 2 }} color="white">
    {children}
  </Box>
);

const Main = ({
  asks,
  bio,
  firstName,
  industry,
  interests,
  loading,
  occupations,
  offers,
  onEdit,
  readonly,
}) => (
  <ReactPlaceholder
    ready={!loading}
    customPlaceholder={
      <Container>
        <Bio loading />
        <Occupations loading />
        <Industry loading />
        <ChipList loading extraLoadingRow />
        <ChipList loading />
      </Container>
    }
  >
    <Transition native from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0 }}>
      {() => props => (
        <Container style={props}>
          <Bio firstName={firstName} onEdit={onEdit} readonly={readonly} text={bio} />
          <Occupations
            firstName={firstName}
            list={occupations}
            loading={loading}
            onEdit={onEdit}
            readonly={readonly}
          />
          <Industry
            firstName={firstName}
            industry={industry}
            loading={loading}
            onEdit={onEdit}
            readonly={readonly}
          />
          <ChipList
            editText="What skills or knowledge can you offer?"
            firstName={firstName}
            list={compact(offers)}
            loading={loading}
            onEdit={onEdit}
            readonly={readonly}
            title="Offers"
          />
          <ChipList
            color="panache"
            editText="What are you looking for help with?"
            firstName={firstName}
            list={compact(asks)}
            loading={loading}
            onEdit={onEdit}
            readonly={readonly}
            title="Asks"
          />
          <ChipList
            color="concrete"
            editText="What are you passionate or curious about?"
            firstName={firstName}
            list={compact(interests)}
            loading={loading}
            onEdit={onEdit}
            readonly={readonly}
            title="Interests"
          />
        </Container>
      )}
    </Transition>
  </ReactPlaceholder>
);

Main.propTypes = {
  asks: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  bio: PropTypes.string,
  firstName: PropTypes.string,
  industry: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
  }),
  interests: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  loading: PropTypes.bool,
  occupations: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      }),
      position: PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      }),
    })
  ),
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  onEdit: PropTypes.func,
  readonly: PropTypes.bool,
};

Main.defaultProps = {
  asks: [],
  bio: null,
  firstName: 'Member',
  industry: {
    _id: null,
    name: null,
  },
  interests: [],
  loading: false,
  occupations: [],
  offers: [],
  onEdit: null,
  readonly: false,
};

export default Main;
