import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from 'ui/Box/Box';
import Button from 'ui/Button/Button';
import Icon from 'ui/Icon/Icon';

class ProfileContainer extends PureComponent {
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
    const { children, onClose } = this.props;

    return (
      <Box grow column color="linen">
        <Box column padding={{ horizontal: 2, top: 2 }}>
          <Box grow margin={{ bottom: 22 / 16 }}>
            <Box>
              <Button onClick={onClose} lineHeight="22px" height="auto" transparent>
                <Icon name="close" size={19} color="terracota" />
              </Button>
            </Box>
            <Box marginLeft="auto">
              <Button
                height="auto"
                onClick={this.state.isEditing ? this.onCancel : this.onEdit}
                color="terracota"
                transparent
              >
                {this.state.isEditing ? 'Cancel' : 'Edit'}
              </Button>
            </Box>
          </Box>
        </Box>

        {children({ isEditing: this.state.isEditing, onEdit: this.onEdit })}
      </Box>
    );
  }
}

ProfileContainer.propTypes = {
  children: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  onClose: PropTypes.func,
  onEdit: PropTypes.func,
};

ProfileContainer.defaultProps = {
  onCancel: null,
  onClose: null,
  onEdit: null,
};

export default ProfileContainer;
