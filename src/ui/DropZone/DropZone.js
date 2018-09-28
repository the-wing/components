import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { default as ReactDropZone } from 'react-dropzone';
import { ErrorMessage } from 'ui/Forms';

const StyledReactDropZone = styled(ReactDropZone)`
  display: flex;
  flex-flow: column;
  align-items: center;
  border: 0;

  &:hover {
    cursor: pointer;
  }
`;

const bytesToSize = bytes => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return 'n/a';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  if (i === 0) return `${bytes} ${sizes[i]}`;
  return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
};

class DropZone extends PureComponent {
  state = {
    error: '',
  };

  onError = message => {
    this.setState(() => ({ error: message }));
  };

  validateImageWidth = fileAsDataURL => {
    const { maxWidth, minWidth } = this.props;

    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = fileAsDataURL;

      image.onload = () => {
        const width = image.width;

        if (minWidth && width < minWidth) {
          return resolve(`Please insert a photo that is at least ${minWidth} pixels wide.`);
        }

        if (maxWidth && width > maxWidth) {
          return resolve(`Please insert a photo that is no larger than ${maxWidth} pixels wide.`);
        }

        return resolve(undefined);
      };
    });
  };

  onValidate = async fileAsDataURL => {
    const { onDrop } = this.props;

    const errorMessage = await this.validateImageWidth(fileAsDataURL);

    if (errorMessage) {
      return this.onError(errorMessage);
    }

    this.setState(() => ({ error: '' }));

    if (onDrop) {
      return onDrop(fileAsDataURL);
    }
  };

  onDrop = (acceptedFiles, rejectedFiles) => {
    const { maxSize, onDrop } = this.props;

    // If accepted, validate min/max width (in pixels)
    acceptedFiles.forEach(file => {
      const reader = new FileReader();

      reader.onload = () => {
        const fileAsDataURL = reader.result;
        this.onValidate(fileAsDataURL);

        return fileAsDataURL;
      };

      reader.onabort = () => this.onError('File reading was aborted.');
      reader.onerror = () => this.onError('File reading errored.');

      reader.readAsDataURL(file);
    });

    // If rejected due to dropzone's validations (maxSize - file size), display error
    rejectedFiles.forEach(file => {
      if (file.size > maxSize) {
        return this.onError(`Please insert a photo that is no larger than ${bytesToSize(maxSize)}`);
      }

      return false;
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
        {this.state.error.length > 0 && <ErrorMessage text={this.state.error} />}
      </StyledReactDropZone>
    );
  }
}

DropZone.propTypes = {
  // For now, accepting all images only:
  accept: PropTypes.arrayOf(PropTypes.oneOf(['image/*', 'image/jpg', 'image/png'])),
  children: PropTypes.node,
  maxSize: PropTypes.number,
  maxWidth: PropTypes.number,
  minWidth: PropTypes.number,
  multiple: PropTypes.bool,
  onDrop: PropTypes.func,
  onError: PropTypes.func,
};

DropZone.defaultProps = {
  accept: ['image/*'],
  children: null,
  maxSize: 4000000,
  maxWidth: null,
  minWidth: 0,
  multiple: false,
  onDrop: null,
};

export default DropZone;
