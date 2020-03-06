import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {admin_reducer} from './site/admin/admin-reducer'
import {ebook_reducer} from "./site/ebook/ebook-reducer"
import { lawyer_detail_reducer } from "./site/lawyer-detail/lawyer-detail-reducer";
import {  directory_reducer } from "./site/diretory/directory-reducer";
import { create_profile_reducer } from "./site/signup/signup-reducer";
import { lawyers_reducer, areas_reducer } from "./site/diretory/directory-reducer";
import {signin_reducer} from "./site/signin/signin-reducer";
import {GET_LOCAL_STORAGE_PAYLOAD,LOGOUT_ACTION} from '../src/root-action'
import {blog_reducer} from "./site/blog/blog-reducer"

let auth = {
    user: null,
    loggedIn: false
};

const auth_reducer = (cState=auth,action) => {
    switch (action.type) {
        case GET_LOCAL_STORAGE_PAYLOAD:
            if (action.payload === null)
                return {...cState,user: null,loggedIn: false};
            else
                return {...cState,user: action.payload,loggedIn: true};

        case LOGOUT_ACTION:
            return {...cState,user: null,loggedIn: false};

        default:
            return cState
    }
};

export default combineReducers({
    routing: routerReducer,
    ebook: ebook_reducer,
    admin: admin_reducer,
    lawyer: lawyer_detail_reducer,
    signup: create_profile_reducer,
    lawyers: lawyers_reducer,
    areas: areas_reducer,
    directory: directory_reducer,
    signin: signin_reducer,
    auth: auth_reducer,
    blog: blog_reducer
})

