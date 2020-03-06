import constants from '../../config/constants'
import {SIGNIN_DONE_SUCCESSFULY, SIGNIN_FAILED} from "./signin-actions";

const credentials = {
    user: {},
    loggedIn: false
};

export const signin_reducer = (cState=credentials,action) => {
    switch (action.type) {
        case SIGNIN_DONE_SUCCESSFULY:
            localStorage.setItem(constants.authLocalStorageKey,action.payload.data);
            return {...cState,user: action.payload,loggedIn: true};

        case SIGNIN_FAILED:
            return {...cState,user: null,loggedIn: false};

        default:
            return cState
    }
}