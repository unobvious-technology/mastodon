import ready from '../mastodon/ready';
import loadPolyfills from '../mastodon/load_polyfills';

import React from 'react';
import ReactDOM from 'react-dom';
import Autocomplete  from '../components/Autocomplete';
import initialState from '../mastodon/initial_state';

const main = () => {
  ready(() => {
    [].forEach.call(document.querySelectorAll('[data-component="Autocomplete"]'), (content) => {
      const props = JSON.parse(content.getAttribute('data-props'));

      ReactDOM.render((
        <Autocomplete {...props} access_token={initialState.meta.access_token} />
      ), content);
    });
  })
};

loadPolyfills().then(main).catch(error => {
  console.error(error);
});
