const fetch = require('isomorphic-unfetch')
const qs = require('query-string')

const endpoint = 'https://jsonplaceholder.typicode.com'

module.exports = {
  placeholderUserPosts: params => {
    const queryString = qs.stringify(params)
    const url = `${endpoint}/posts?${queryString}`
    console.log(url)
    return fetch(url, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
}
