import { takeLatest } from 'redux-saga/effects';
import { handleFetchPostsData } from './handler/blogPostsHandler';
import types from '../types';
// watcherSaga
export function* watcherSaga() {
    console.log('watcher');
    yield takeLatest(types.posts.GET_ALL_POSTS, handleFetchPostsData);
}

export default watcherSaga;
