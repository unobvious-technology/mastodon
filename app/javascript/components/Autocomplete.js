import React from 'react';
import PropTypes from 'prop-types';
import { request } from '../mastodon/api';

class Autocomplete extends React.Component {
  state = {
    query: '',
    results: [],
  }

  searchTags() {
    const { query } = this.state;

    if (!query) {
      this.setState({ results: [] });
      return;
    }

    request(this.props.access_token).post(this.props.endpoint, {
      q: query,
    }).then(response => {
      this.setState({ results: response.data });
    }).catch((e) => {
      console.error(e);
    });
  }

  handleChange = (event) => {
    this.setState({ query: event.target.value }, this.searchTags);
  }

  render () {
    return (
      <React.Fragment>
        Selected: {this.props.selected}<br />
        Endpoint: {this.props.endpoint}<br />
        Results: {JSON.stringify(this.state.results)}<br />
        <input type='text' value={this.state.query} onChange={this.handleChange} />
      </React.Fragment>
    );
  }

}

Autocomplete.propTypes = {
  selected: PropTypes.array,
  endpoint: PropTypes.string,
  access_token: PropTypes.string,
};

export default Autocomplete;
