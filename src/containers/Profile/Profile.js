import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';

import ProfileContainer from './ProfileContainer';
import AdditionalInfo from './components/AdditionalInfo';
import Head from './components/Head';
import Main from './components/Main';

const Profile = ({ customOnCancel, customOnEdit, initialValues, onSubmit }) => (
  <ProfileContainer onEdit={customOnEdit} onCancel={customOnCancel}>
    {({ isEditing, onEdit }) => (
      <Form onSubmit={onSubmit} initialValues={initialValues}>
        {({ form, handleSubmit }) => {
          const values = form.getState().values;

          return (
            <form onSubmit={handleSubmit}>
              <Head
                avatarUrl={values.avatarUrl}
                headline={values.headline}
                isEditing={isEditing}
                name={values.name}
                social={values.social}
              />
              <Main
                asks={values.asks}
                bio={values.bio}
                industry={values.industry}
                interests={values.interests}
                isEditing={isEditing}
                occupation={values.occupation}
                offers={values.offers}
                onEdit={onEdit}
                position={values.position}
              />
              <AdditionalInfo
                birthday={values.birthday}
                isEditing={isEditing}
                location={values.location}
                neighborhood={values.neighborhood}
                onEdit={onEdit}
                starSign={values.starSign}
                startDate={values.startDate}
              />
            </form>
          );
        }}
      </Form>
    )}
  </ProfileContainer>
);

Profile.propTypes = {
  initialValues: PropTypes.shape({
    asks: PropTypes.arrayOf(PropTypes.string),
    avatarUrl: PropTypes.string,
    bio: PropTypes.string,
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
    headline: PropTypes.string,
    industry: PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
    }),
    interests: PropTypes.arrayOf(PropTypes.string),
    location: PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
    }),
    name: PropTypes.string,
    neighborhood: PropTypes.string,
    occupation: PropTypes.shape({
      company: PropTypes.string,
      position: PropTypes.string,
    }),
    offers: PropTypes.arrayOf(PropTypes.string),
    social: PropTypes.shape({
      facebook: PropTypes.string,
      instagram: PropTypes.string,
      twitter: PropTypes.string,
      web: PropTypes.string,
    }),
    starSign: PropTypes.string,
    startDate: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  initialValues: {
    asks: [],
    bio: null,
    avatarUrl: null,
    birthday: {
      month: null,
      day: null,
    },
    headline: null,
    industry: {
      _id: null,
      name: null,
    },
    interests: [],
    location: {
      _id: null,
      name: null,
    },
    name: null,
    neighborhood: null,
    occupation: {
      company: null,
      position: null,
    },
    offers: [],
    social: {
      facebook: null,
      instagram: null,
      twitter: null,
      web: null,
    },
    starSign: null,
    startDate: null,
  },
};

export default Profile;
