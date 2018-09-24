import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { default as ReactDropZone } from 'react-dropzone';

const StyledReactDropZone = styled(ReactDropZone)`
  display: flex;
  flex-flow: column;
  align-items: center;
  border: 0;

  &:hover {
    cursor: pointer;
  }
`;

class DropZone extends PureComponent {
  onDrop = (acceptedFiles, rejectedFiles) => {
    const { maxWidth, minWidth, onDrop } = this.props;

    acceptedFiles.forEach(file => {
      const reader = new FileReader();

      reader.onload = () => {
        const fileAsDataURL = reader.result;

        if (onDrop) {
          return onDrop(fileAsDataURL);
        }

        return fileAsDataURL;
      };

      reader.readAsDataURL(file);
    });
  };

  render() {
    const { accept, children, maxSize, multiple } = this.props;

    return (
      <StyledReactDropZone
        accept={accept}
        maxSize={maxSize}
        multiple={multiple}
        onDrop={this.onDrop}
      >
        {children}
      </StyledReactDropZone>
    );
  }
}

DropZone.propTypes = {
  // For now, accepting all images only:
  accept: PropTypes.arrayOf(PropTypes.oneOf(['image/*', 'image/jpg', 'image/png'])),
  children: PropTypes.node,
  maxSize: PropTypes.number,
  multiple: PropTypes.bool,
  onDrop: PropTypes.func,
};

DropZone.defaultProps = {
  accept: ['image/*'],
  children: null,
  maxSize: 4000000,
  multiple: false,
  onDrop: null,
};

export default DropZone;
