// @flow
import fetch from 'isomorphic-unfetch';

const getJson = response => response.json();

const headers = {
  'Content-Type': 'application/json',
  credentials: 'include',
};

export const get = (
  url: string,
): Promise<Object> => fetch(
  url,
  {
    method: 'GET',
    headers,
  },
).then(getJson);

export const post = (
  url: string,
  body: Object = {},
): Promise<Object> => fetch(url, {
  method: 'POST',
  headers,
  body: JSON.stringify(body),
}).then(getJson);
