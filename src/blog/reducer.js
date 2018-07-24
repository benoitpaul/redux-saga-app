import { FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } from './constants';
import initialState from '../store/initialState';

export default function postsReducer(state = initialState.blog, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                posts: action.posts
            }
        case FETCH_POSTS_ERROR:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}