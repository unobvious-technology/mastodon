import axios from 'axios';
import ready from './ready';
import LinkHeader from './link_header';

export const getLinks = response => {
  const value = response.headers.link;

  if (!value) {
    return { refs: [] };
  }

  return LinkHeader.parse(value);
};

let csrfHeader = {};
function setCSRFHeader() {
  const csrfToken = document.querySelector('meta[name=csrf-token]').content;
  csrfHeader['X-CSRF-Token'] = csrfToken;
}
ready(setCSRFHeader);

export const request = (access_token) => axios.create({
  headers: Object.assign(csrfHeader, access_token ? {
    'Authorization': `Bearer ${access_token}`,
  } : {}),

  transformResponse: [function (data) {
    try {
      return JSON.parse(data);
    } catch(Exception) {
      return data;
    }
  }],
});


export default getState => request(getState && getState().getIn(['meta', 'access_token'], ''));
