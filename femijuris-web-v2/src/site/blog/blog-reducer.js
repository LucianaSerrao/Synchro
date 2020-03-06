import {posts} from '../../data'
import {BLOG_FIND_CHOOSEN_POST, CLEAR_CHOOSEN_POST, FETCH_POST_SUCCEEDED} from "./blog-actions";

const blog = {
    posts,
    shownPost: null,
    shownPostDelta: null
}

export const blog_reducer = (cState=blog,action) => {
    switch (action.type) {
        case BLOG_FIND_CHOOSEN_POST:
                return { ...cState,shownPost: cState.posts.find(it => it.url === action.payload.url) }

        case FETCH_POST_SUCCEEDED:
            return {...cState,shownPostDelta:action.payload}

        case CLEAR_CHOOSEN_POST:
            return {...cState,shownPostDelta:null,shownPost:null}

        default:
            return cState
    }
}