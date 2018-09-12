import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';

import Box from 'ui/Box/Box';
import Button from 'ui/Button/Button';
import Icon from 'ui/Icon/Icon';

import AdditionalInfo from './components/AdditionalInfo';
import Head from './components/Head';
import Main from './components/Main';

class Profile extends PureComponent {
  state = {
    isEditing: false,
  };

  toggleEditing = () => {
    this.setState(prevProps => ({ isEditing: !prevProps.isEditing }));
  };

  onCancel = () => {
    const { onCancel } = this.props;

    if (onCancel) {
      onCancel();
    }

    this.toggleEditing();
  };

  onEdit = () => {
    const { onEdit } = this.props;

    if (onEdit) {
      onEdit();
    }

    this.toggleEditing();
  };

  render() {
    const { initialValues, loading, onClose, onSubmit } = this.props;

    return (
      <Form onSubmit={onSubmit} initialValues={initialValues}>
        {({ form, handleSubmit, invalid, pristine }) => {
          const values = form.getState().values;

          return (
            <form onSubmit={handleSubmit}>
              <Box grow column color={this.state.isEditing ? 'white' : 'linen'}>
                <Box column padding={{ horizontal: 2, top: 2 }}>
                  <Box grow margin={{ bottom: 22 / 16 }}>
                    {this.state.isEditing ? (
                      <Fragment>
                        <Box>
                          <Button
                            height="auto"
                            onClick={this.onCancel}
                            color="terracota"
                            transparent
                          >
                            Cancel
                          </Button>
                        </Box>
                        <Box marginLeft="auto">
                          <Button
                            disabled={pristine || invalid || loading}
                            height="auto"
                            color="terracota"
                            transparent
                            type="submit"
                          >
                            Save
                          </Button>
                        </Box>
                      </Fragment>
                    ) : (
                      <Fragment>
                        <Box>
                          <Button onClick={onClose} lineHeight="22px" height="auto" transparent>
                            <Icon name="close" size={19} color="terracota" />
                          </Button>
                        </Box>
                        <Box marginLeft="auto">
                          <Button height="auto" onClick={this.onEdit} color="terracota" transparent>
                            Edit
                          </Button>
                        </Box>
                      </Fragment>
                    )}
                  </Box>
                </Box>
                <Head
                  avatarUrl={values.avatarUrl}
                  headline={values.headline}
                  isEditing={this.state.isEditing}
                  name={values.name}
                  social={values.social}
                />
                <Main
                  asks={values.asks}
                  bio={values.bio}
                  industry={values.industry}
                  interests={values.interests}
                  isEditing={this.state.isEditing}
                  occupation={values.occupation}
                  offers={values.offers}
                  onEdit={this.onEdit}
                  position={values.position}
                />
                <AdditionalInfo
                  birthday={values.birthday}
                  isEditing={this.state.isEditing}
                  location={values.location}
                  neighborhood={values.neighborhood}
                  onEdit={this.onEdit}
                  starSign={values.starSign}
                  startDate={values.startDate}
                />
              </Box>
            </form>
          );
        }}
      </Form>
    );
  }
}

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
  onCancel: PropTypes.func,
  onClose: PropTypes.func,
  onEdit: PropTypes.func,
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
  onCancel: null,
  onClose: null,
  onEdit: null,
};

export default Profile;
