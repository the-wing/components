import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import createDecorator from 'final-form-calculate';
import { getSign } from 'horoscope';
import { getDaysPerMonth } from 'utils';

import Box from 'ui/Box/Box';

import AdditionalInfo from './components/AdditionalInfo/AdditionalInfo';
import ControlBar from './components/ControlBar';
import EditForm from './components/EditForm';
import Head from './components/Head/Head';
import Main from './components/Main/Main';

const calculator = createDecorator({
  field: /birthday\.(day|month)/,
  updates: {
    starSign: (ignoredValue, allValues) => {
      const month = get(allValues.birthday, 'month.value', '13');
      const day = get(allValues.birthday, 'day.value', '32');
      const daysPerMonth = getDaysPerMonth(month);

      const sign =
        month === '13' || day === '32'
          ? '—'
          : getSign({
              month: parseInt(month, 10),
              day: (parseInt(day, 10) > daysPerMonth && daysPerMonth) || parseInt(day, 10),
            });

      return { value: sign === '—' ? 1 : sign, label: sign };
    },
  },
});

const getValidBirthdayDays = createDecorator({
  field: 'birthday.month',
  updates: {
    'birthday.day': (ignoredValue, allValues) => {
      const month = get(allValues.birthday, 'month.value', '13');
      const day = get(allValues.birthday, 'day.value', '32');
      const daysPerMonth = getDaysPerMonth(month);

      const fixedDay =
        ((month === '13' || day === '32') && '—') ||
        (parseInt(day, 10) > daysPerMonth && daysPerMonth) ||
        day;

      return { value: `${fixedDay}`, label: fixedDay !== '—' ? `${parseInt(fixedDay, 10)}` : '' };
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

  onSubmit = (values, form) => {
    const { onSubmit } = this.props;

    if (onSubmit) {
      onSubmit(values, form);
    }

    this.toggleEditing();
  };

  render() {
    const {
      data,
      initialValues,
      loading,
      onClose,
      onSearchAsks,
      onSearchCompanies,
      onSearchInterests,
      onSearchOffers,
      onSearchNeighborhoods,
      onSearchPositions,
      readonly,
    } = this.props;

    return (
      <Form
        mutators={{
          ...arrayMutators,
        }}
        decorators={[calculator, getValidBirthdayDays]}
        onSubmit={this.onSubmit}
        initialValues={initialValues}
        subscription={{ invalid: true, pristine: true, values: true }}
      >
        {({ form, handleSubmit, invalid, pristine }) => {
          const values = form.getState().values;
          const { pop, push } = form.mutators;

          return (
            <form onSubmit={handleSubmit}>
              <Box grow column color={this.state.isEditing ? 'white' : 'linen'}>
                <ControlBar
                  invalid={invalid}
                  isEditing={this.state.isEditing}
                  loading={loading}
                  onCancel={this.onCancel}
                  onClose={onClose}
                  onEdit={this.onEdit}
                  pristine={pristine}
                  readonly={readonly}
                  reset={form.reset}
                />

                {this.state.isEditing && (
                  <EditForm
                    data={data}
                    onSearchAsks={onSearchAsks}
                    onSearchCompanies={onSearchCompanies}
                    onSearchInterests={onSearchInterests}
                    onSearchOffers={onSearchOffers}
                    onSearchNeighborhoods={onSearchNeighborhoods}
                    onSearchPositions={onSearchPositions}
                    push={push}
                    pop={pop}
                  />
                )}

                {!this.state.isEditing && (
                  <Fragment>
                    <Head
                      avatarUrl={values.avatarUrl}
                      headline={values.headline}
                      firstName={values.firstName}
                      lastName={values.lastName}
                      loading={loading}
                      readonly={readonly}
                      social={values.social}
                    />
                    <Main
                      asks={values.asks}
                      bio={values.bio}
                      firstName={values.firstName}
                      industry={values.industry}
                      interests={values.interests}
                      loading={loading}
                      occupations={values.occupations}
                      offers={values.offers}
                      onEdit={this.onEdit}
                      position={values.position}
                      readonly={readonly}
                    />
                    <AdditionalInfo
                      birthday={values.birthday}
                      contactEmail={values.contactEmail}
                      loading={loading}
                      location={values.location}
                      neighborhood={values.neighborhood}
                      onEdit={this.onEdit}
                      readonly={readonly}
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
  data: PropTypes.shape({
    asks: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      })
    ),
    companies: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      })
    ),
    industries: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      })
    ),
    interests: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      })
    ),
    neighborhoods: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      })
    ),
    offers: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      })
    ),
    positions: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      })
    ),
  }),
  initialValues: PropTypes.shape({
    asks: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      })
    ),
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
    contactEmail: PropTypes.string,
    firstName: PropTypes.string,
    headline: PropTypes.string,
    industry: PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
    interests: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      })
    ),
    lastName: PropTypes.string,
    location: PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
    }),
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
    offers: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      })
    ),
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
  onSearchAsks: PropTypes.func,
  onSearchCompanies: PropTypes.func,
  onSearchInterests: PropTypes.func,
  onSearchOffers: PropTypes.func,
  onSearchNeighborhoods: PropTypes.func,
  onSearchPositions: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  readonly: PropTypes.bool,
};

Profile.defaultProps = {
  data: {
    asks: [],
    companies: [],
    industries: [],
    interests: [],
    neighborhoods: [],
    offers: [],
    positions: [],
  },
  initialValues: {
    asks: [],
    avatarUrl: 'assets/img/defaultAvatar.png',
    bio: null,
    birthday: {
      month: null,
      day: null,
    },
    contactEmail: null,
    firstName: null,
    headline: null,
    industry: null,
    interests: [],
    lastName: null,
    location: null,
    neighborhood: null,
    occupations: [],
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
  loading: false,
  onCancel: null,
  onClose: null,
  onSearchAsks: null,
  onSearchCompanies: null,
  onSearchInterests: null,
  onSearchOffers: null,
  onSearchNeighborhoods: null,
  onSearchPositions: null,
  onEdit: null,
  readonly: false,
};

export default Profile;
