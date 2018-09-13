import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'lodash';

import Box from 'ui/Box/Box';
import List from 'ui/List/List';
import ListItem from 'ui/ListItem/ListItem';

import EmptyStateButton from './EmptyStateButton';

const AdditionalInfo = ({ birthday, location, neighborhood, onEdit, starSign, startDate }) => (
  <Box column padding={{ horizontal: 2, top: 2, bottom: 58 / 16 }}>
    <List>
      <ListItem icon="location" underline>
        {neighborhood ? (
          neighborhood
        ) : (
          <EmptyStateButton onClick={onEdit} text="Add your neighborhood" />
        )}
      </ListItem>
      <ListItem icon="homebase" underline>
        {location && location._id && location.name ? (
          location.name
        ) : (
          <EmptyStateButton onClick={onEdit} text="Add your location" />
        )}
      </ListItem>
      {startDate && (
        <ListItem icon="anniversary" underline>
          Joined: {moment(startDate).format('MMMM YYYY')}
        </ListItem>
      )}
      <ListItem icon="birthday" underline>
        {birthday && _.get(birthday, 'day._id', null) && parseInt(birthday.day._id, 10) < 32 ? (
          `${_.get(birthday, 'month.name', '')} ${_.get(birthday, 'day.name', '')}`
        ) : (
          <EmptyStateButton onClick={onEdit} text="Add your birthday" />
        )}
      </ListItem>
      <ListItem icon="starsign" underline>
        {starSign && starSign !== '1' ? (
          starSign
        ) : (
          <EmptyStateButton onClick={onEdit} text="Add your star sign" />
        )}
      </ListItem>
    </List>
  </Box>
);

AdditionalInfo.propTypes = {
  birthday: PropTypes.shape({
    month: PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
    }),
    day: PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
    }),
  }),
  location: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
  }),
  neighborhood: PropTypes.string,
  onEdit: PropTypes.func,
  starSign: PropTypes.string,
  startDate: PropTypes.string,
};

AdditionalInfo.defaultProps = {
  birthday: {
    month: null,
    day: null,
  },
  location: {
    _id: null,
    name: null,
  },
  neighborhood: null,
  onEdit: null,
  starSign: null,
  startDate: null,
};

export default AdditionalInfo;