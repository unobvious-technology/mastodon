import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';

debugger;

class Autocomplete extends React.Component {

  // static propTypes = {
  //   selected: PropTypes.arrayOf(PropTypes.object({
  //     value: PropTypes.string.isRequired,
  //     label: PropTypes.string.isRequired,
  //   })).isRequired,
  //   endpoint: PropTypes.string.isRequired,
  // };

  render() {
    return (
      <div>
        {this.props.endpoint}<br/>
        {this.props.selected.map(tag => `#${tag.label}`).join(',')}
      </div>
    );
  }

}
