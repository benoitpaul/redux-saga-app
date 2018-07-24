import { FETCH_POSTS } from './constants';

export function fetchPosts() {
    return {
        type: FETCH_POSTS
    };
}