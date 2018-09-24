import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'lodash';
import ReactPlaceholder from 'react-placeholder';
import { Transition } from 'react-spring';

import Box from 'ui/Box/Box';
import List from 'ui/List/List';
import ListItem from 'ui/ListItem/ListItem';
import { Circle, TextRow } from 'ui/Loading';

import EmptyStateButton from '../EmptyStateButton';

const Container = ({ children }) => (
  <Box column padding={{ horizontal: 2, top: 2, bottom: 58 / 16 }}>
    {children}
  </Box>
);

const AdditionalInfo = ({
  birthday,
  contactEmail,
  loading,
  location,
  neighborhood,
  onEdit,
  readonly,
  starSign,
  startDate,
}) => {
  const neighborhoodLabel = _.get(neighborhood, 'label', null);
  const locationName = _.get(location, 'name', null);
  const birthdayDay = _.get(birthday, 'day.value', null);
  const starSignLabel = _.get(starSign, 'label', null);
  const starSignValue = _.get(starSign, 'value', 1);

  if (
    readonly &&
    !neighborhoodLabel &&
    !locationName &&
    !birthdayDay &&
    !starSignLabel &&
    starSignValue === 1
  ) {
    return null;
  }

  return (
    <ReactPlaceholder
      ready={!loading}
      customPlaceholder={
        <Container>
          <ListItem>
            <Box height={25}>
              <Box>
                <Circle style={{ width: 25, height: 25 }} />
              </Box>
              <Box padding={{ left: 1 }}>
                <TextRow style={{ width: 195, height: 16, margin: 5 }} />
              </Box>
            </Box>
          </ListItem>
          <ListItem>
            <Box height={25}>
              <Box>
                <Circle style={{ width: 25, height: 25 }} />
              </Box>
              <Box padding={{ left: 1 }}>
                <TextRow style={{ width: 195, height: 16, margin: 5 }} />
              </Box>
            </Box>
          </ListItem>
          <ListItem>
            <Box height={25}>
              <Box>
                <Circle style={{ width: 25, height: 25 }} />
              </Box>
              <Box padding={{ left: 1 }}>
                <TextRow style={{ width: 195, height: 16, margin: 5 }} />
              </Box>
            </Box>
          </ListItem>
          <ListItem>
            <Box height={25}>
              <Box>
                <Circle style={{ width: 25, height: 25 }} />
              </Box>
              <Box padding={{ left: 1 }}>
                <TextRow style={{ width: 195, height: 16, margin: 5 }} />
              </Box>
            </Box>
          </ListItem>
        </Container>
      }
    >
      <Transition native from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0 }}>
        {style => (
          <Container style={style}>
            <List>
              {/* Neighborhood */}
              {neighborhoodLabel && (
                <ListItem icon="location" underline>
                  {neighborhood.label}
                </ListItem>
              )}
              {!neighborhoodLabel &&
                !readonly && (
                  <ListItem icon="location" underline>
                    <EmptyStateButton onClick={onEdit} text="Add your neighborhood" />
                  </ListItem>
                )}

              {/* Location */}
              {locationName && (
                <ListItem icon="homebase" underline>
                  {location.name}
                </ListItem>
              )}
              {!locationName &&
                !readonly && (
                  <ListItem icon="homebase" underline>
                    <EmptyStateButton onClick={onEdit} text="Add your location" />
                  </ListItem>
                )}

              {/* Start Date */}
              {startDate && (
                <ListItem icon="anniversary" underline>
                  Joined: {moment(startDate).format('MMMM YYYY')}
                </ListItem>
              )}

              {/* Email */}
              {contactEmail && (
                <ListItem icon="mail" underline>
                  {contactEmail}
                </ListItem>
              )}
              {!contactEmail &&
                !readonly && (
                  <ListItem icon="mail" underline>
                    <EmptyStateButton onClick={onEdit} text="Add your email address" />
                  </ListItem>
                )}

              {/* Birthday */}
              {birthdayDay &&
                parseInt(birthdayDay, 10) < 32 && (
                  <ListItem icon="birthday" underline>{`${_.get(
                    birthday,
                    'month.label',
                    ''
                  )} ${_.get(birthday, 'day.label', '')}`}</ListItem>
                )}
              {(!birthdayDay || parseInt(birthdayDay, 10) >= 32) &&
                !readonly && (
                  <ListItem icon="birthday" underline>
                    <EmptyStateButton onClick={onEdit} text="Add your birthday" />
                  </ListItem>
                )}

              {/* Star Sign */}
              {starSignLabel &&
                starSignValue !== '1' && (
                  <ListItem icon="starsign" underline>
                    {starSign.label}
                  </ListItem>
                )}
              {(!starSignLabel || starSignValue === '1') &&
                !readonly && (
                  <ListItem icon="starsign" underline>
                    <EmptyStateButton onClick={onEdit} text="Add your star sign" />
                  </ListItem>
                )}
            </List>
          </Container>
        )}
      </Transition>
    </ReactPlaceholder>
  );
};

AdditionalInfo.propTypes = {
  birthday: PropTypes.shape({
    month: PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
    day: PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  }),
  loading: PropTypes.bool,
  location: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
  }),
  neighborhood: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  }),
  onEdit: PropTypes.func,
  readonly: PropTypes.bool,
  starSign: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  }),
  startDate: PropTypes.string,
};

AdditionalInfo.defaultProps = {
  birthday: null,
  loading: false,
  location: null,
  neighborhood: null,
  onEdit: null,
  readonly: false,
  starSign: null,
  startDate: null,
};

export default AdditionalInfo;
