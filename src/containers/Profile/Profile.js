import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import createDecorator from 'final-form-calculate';
import { getSign } from 'horoscope';

import Box from 'ui/Box/Box';
import Button from 'ui/Button/Button';
import Icon from 'ui/Icon/Icon';

import AdditionalInfo from './components/AdditionalInfo';
import EditForm from './components/EditForm';
import Head from './components/Head';
import Main from './components/Main';

const calculator = createDecorator({
  field: /birthday\.(day|month)/,
  updates: {
    starSign: (ignoredValue, allValues) => {
      const month = _.get(allValues.birthday, 'month.value', '13');
      const day = _.get(allValues.birthday, 'day.value', '32');

      const sign =
        month === '13' || day === '32'
          ? '—'
          : getSign({
              month: parseInt(month, 10),
              day: parseInt(day, 10),
            });

      return { value: sign === '—' ? 1 : sign, label: sign };
    },
  },
});

class Profile extends PureComponent {
  state = {
    isEditing: false,
  };

  toggleEditing = () => {
    this.setState(prevProps => ({ isEditing: !prevProps.isEditing }));
  };

  onCancel = event => {
    const { onCancel } = this.props;

    event.preventDefault();

    if (onCancel) {
      onCancel();
    }

    this.toggleEditing();
  };

  onEdit = event => {
    const { onEdit } = this.props;

    event.preventDefault();

    if (onEdit) {
      onEdit();
    }

    this.toggleEditing();
  };

  onSubmit = values => {
    const { onSubmit } = this.props;

    if (onSubmit) {
      onSubmit(values);
    }

    this.toggleEditing();
  };

  render() {
    const { industryList, initialValues, loading, onClose } = this.props;

    return (
      <Form
        mutators={{
          ...arrayMutators,
        }}
        decorators={[calculator]}
        onSubmit={this.onSubmit}
        initialValues={initialValues}
      >
        {({ form, handleSubmit, invalid, pristine }) => {
          const values = form.getState().values;
          const { pop, push } = form.mutators;

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

                {this.state.isEditing && (
                  <EditForm industryList={industryList} push={push} pop={pop} />
                )}

                {!this.state.isEditing && (
                  <Fragment>
                    <Head
                      avatarUrl={values.avatarUrl}
                      headline={values.headline}
                      firstName={values.firstName}
                      lastName={values.lastName}
                      social={values.social}
                    />
                    <Main
                      asks={values.asks}
                      bio={values.bio}
                      industry={values.industry}
                      interests={values.interests}
                      occupations={values.occupations}
                      offers={values.offers}
                      onEdit={this.onEdit}
                      position={values.position}
                    />
                    <AdditionalInfo
                      birthday={values.birthday}
                      location={values.location}
                      neighborhood={values.neighborhood}
                      onEdit={this.onEdit}
                      starSign={values.starSign}
                      startDate={values.startDate}
                    />
                  </Fragment>
                )}
              </Box>
            </form>
          );
        }}
      </Form>
    );
  }
}

Profile.propTypes = {
  industryList: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  initialValues: PropTypes.shape({
    asks: PropTypes.arrayOf(PropTypes.string),
    avatarUrl: PropTypes.string,
    bio: PropTypes.string,
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
    headline: PropTypes.string,
    industry: PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
    interests: PropTypes.arrayOf(PropTypes.string),
    location: PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
    }),
    name: PropTypes.string,
    neighborhood: PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
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
    offers: PropTypes.arrayOf(PropTypes.string),
    social: PropTypes.shape({
      facebook: PropTypes.string,
      instagram: PropTypes.string,
      twitter: PropTypes.string,
      web: PropTypes.string,
    }),
    starSign: PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
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
    occupations: [
      {
        company: null,
        position: null,
      },
    ],
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
