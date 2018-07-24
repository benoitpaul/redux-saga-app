import { FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } from './constants';
import { put, takeEvery } from 'redux-saga/effects';
import { getPosts } from '../api';

function* fetchPosts(action) {
  try {
    const result = yield getPosts();
    yield put({ type: FETCH_POSTS_SUCCESS, posts: result.data });
  } catch (e) {
    yield put({ type: FETCH_POSTS_ERROR });
  }
}

function* blogSaga () {
  yield takeEvery(FETCH_POSTS, fetchPosts);
}

export default blogSaga;