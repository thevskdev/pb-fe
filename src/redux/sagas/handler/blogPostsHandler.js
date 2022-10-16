import { put, call } from 'redux-saga/effects';
import blogPostActions from 'redux/actions/blogPosts.actions';
import blogRequests from 'redux/requests/blogRequests';

const { setBlogPostBlocks, setBlogPostLoading, setBlogPostError } = blogPostActions;
const { fetchAllPostsRequest } = blogRequests;

export function* handleFetchPostsData() {
    try {
        yield put(setBlogPostLoading(true));
        const response = yield call(fetchAllPostsRequest);
        const { data } = response;
        yield put(setBlogPostBlocks(data));
        yield put(setBlogPostLoading(false));
        yield put(setBlogPostError([]));
    } catch (err) {
        yield put(setBlogPostLoading(true));
        setBlogPostError(err);
        console.log(err);
        yield put(setBlogPostError(err));
        yield put(setBlogPostLoading(false));
    }
}

export default handleFetchPostsData;
