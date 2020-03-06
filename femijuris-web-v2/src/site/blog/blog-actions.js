import axios from "axios";

export const BLOG_FIND_CHOOSEN_POST = 'BLOG/FIND_CHOOSEN_POST'
export const FETCH_POST_SUCCEEDED = 'posts/FETCH_POST_SUCCEEDED'
export const FETCH_POST_FAILED = 'posts/FETCH_POST_FAILED'
export const FETCH_POST_LOADING = 'post/FETCH_POST_LOADING'
export const CLEAR_CHOOSEN_POST = 'post/CLEAR_CHOOSEN_POST'


export const fetchBlogPostByUri = (url) => {
    return dispatch => {
        dispatch({type: BLOG_FIND_CHOOSEN_POST, payload: {url:url} })
    }
};

export const clearShownPost = (url) => {
    return dispatch => {
        dispatch({type: CLEAR_CHOOSEN_POST, payload: {url:url} })
    }
};

export const fetchDeltaPost = (postUrl) => {
    return dispatch => {

        dispatch({type: FETCH_POST_LOADING})

        axios
            .get(postUrl)
            .then(function (response) {
                dispatch({
                    type: FETCH_POST_SUCCEEDED,
                    payload: response.data
                })
            })
            .catch(function (error) {
                dispatch({
                    type: FETCH_POST_FAILED,
                    payload: error
                })
            });

    }
}