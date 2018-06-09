// @flow
/* eslint-disable import/prefer-default-export */

import fetch from 'isomorphic-unfetch'
import qs from 'query-string'

const endpoint = 'http://127.0.0.1:3000/api'

export const getPosts = (payload: Object) => {
  const queryString = qs.stringify(payload)
  const url: string = `${endpoint}/posts?${queryString}`
  return fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
