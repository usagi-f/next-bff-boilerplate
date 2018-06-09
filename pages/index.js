// @flow

import React from 'react'
import { setStatic } from 'recompose'
import { END } from 'redux-saga'
import Layouts from '../layouts/index'
import Index from '../components/container/index'
import { sagaGetPosts } from '../actions/'

const IndexPages = ({ userId }) => (
  <Layouts title="Home">
    <Index userId={userId} />
  </Layouts>
)

export default setStatic(
  'getInitialProps',
  async ({ store, query, isServer }) => {
    // fetch to API
    store.dispatch(sagaGetPosts(query))
    store.dispatch(END)
    await store.sagaTask.done

    if (isServer) store.runSagaTask()
    return { userId: query.userId || 0 }
  }
)(IndexPages)
