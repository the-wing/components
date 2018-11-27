import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactPlaceholder from 'react-placeholder';
import { Transition } from 'react-spring';

import Box from 'ui/Box/Box';
import Button from 'ui/Button/Button';
import Icon from 'ui/Icon/Icon';

const Container = ({ children, style }) => (
  <Box column grow padding={{ horizontal: 2, top: 2, bottom: 22 / 16 }} style={style}>
    <Box grow margin={{ bottom: 22 / 16 }}>
      {children}
    </Box>
  </Box>
);

const ControlBar = ({
  invalid,
  isEditing,
  loading,
  onCancel,
  onClose,
  onEdit,
  pristine,
  readonly,
  reset,
}) => (
  <ReactPlaceholder
    ready={!loading}
    customPlaceholder={
      <Container>
        <Box>
          {onClose && (
            <Button onClick={onClose} lineHeight="22px" height="auto" transparent>
              <Icon name="close" size={19} color="terracota" />
            </Button>
          )}
        </Box>
        <Box marginLeft="auto" />
      </Container>
    }
  >
    <Transition native from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0 }}>
      {() => props => (
        <Container style={props}>
          {!readonly &&
            isEditing && (
              <Fragment>
                <Box>
                  <Button
                    height="auto"
                    onClick={event => {
                      reset();
                      onCancel(event);
                    }}
                    color="terracota"
                    transparent
                  >
                    Cancel
                  </Button>
                </Box>
                <Box marginLeft="auto">
                  <Button
                    disabled={pristine || invalid}
                    height="auto"
                    color="terracota"
                    transparent
                    type="submit"
                  >
                    Save
                  </Button>
                </Box>
              </Fragment>
            )}

          {(readonly || !isEditing) && (
            <Fragment>
              <Box>
                {onClose && (
                  <Button onClick={onClose} lineHeight="22px" height="auto" transparent>
                    <Icon name="close" size={19} color="terracota" />
                  </Button>
                )}
              </Box>
              <Box marginLeft="auto">
                {!readonly && (
                  <Button height="auto" onClick={onEdit} color="terracota" transparent>
                    Edit
                  </Button>
                )}
              </Box>
            </Fragment>
          )}
        </Container>
      )}
    </Transition>
  </ReactPlaceholder>
);

ControlBar.propTypes = {
  invalid: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  readonly: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
};

export default ControlBar;
