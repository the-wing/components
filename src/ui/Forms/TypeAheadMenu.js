import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Menu from 'ui/Menu/Menu';

// Unfortunately, since ReactTypeahead uses refs for this,
// this can't be a functional component
class TypeAheadMenu extends PureComponent {
  onSelect = event => {
    const { onOptionSelected } = this.props;

    const value = event.target.textContent;

    onOptionSelected(value);
  };

  render() {
    const { onOptionSelected, options, selectionIndex } = this.props;

    const formattedOptions = options.map((option, i) => ({
      name: option,
      selected: selectionIndex === i,
      onClick: this.onSelect,
    }));

    return <Menu options={formattedOptions} />;
  }
}

export default TypeAheadMenu;
