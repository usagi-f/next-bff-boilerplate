import { takeEvery } from 'redux-saga/effects'
import { handleGetPosts } from './posts'

function* mySaga() {
  yield takeEvery('SAGA_GET_POSTS', handleGetPosts)
}

export default mySaga
