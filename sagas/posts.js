// @flow
/* eslint-disable import/prefer-default-export */

import { call, put } from 'redux-saga/effects'
import type { Saga } from 'redux-saga'
import { getPosts } from '../api/inClient'
import { Action } from '../declare/reducers'

export function* handleGetPosts(action: Action): Saga<any> {
  try {
    const res = yield call(getPosts, action.payload)
    const payload = yield res.json()
    yield put({
      type: 'SET_POSTS',
      payload,
    })
  } catch (e) {
    console.error(e)
  }
}
