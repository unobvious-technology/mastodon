import React from 'react';
import PropTypes from 'prop-types';

class Autocomplete extends React.Component {

  render () {
    return (
      <React.Fragment>
        Selected: {this.props.selected}
        Endpoint: {this.props.endpoint}
      </React.Fragment>
    );
  }

}

Autocomplete.propTypes = {
  selected: PropTypes.array,
  endpoint: PropTypes.string,
};

export default Autocomplete;
