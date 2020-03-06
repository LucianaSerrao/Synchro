import constants from "./config/constants";

export const GET_LOCAL_STORAGE_PAYLOAD = 'AUTH/GET_LOCALSTORAGE_PAYLOAD'
export const LOGOUT_ACTION = 'AUTH/LOGOUT'


export const getLoggedlUser = () => {
    return dispatch => {
            let parseJwt = (token) => {
                let base64Url = token.split('.')[1];
                let base64 = base64Url.replace('-', '+').replace('_', '/');
                return JSON.parse(window.atob(base64));
            };

            let item = localStorage.getItem(constants.authLocalStorageKey);

            dispatch({
                type: GET_LOCAL_STORAGE_PAYLOAD,
                payload: (item !== null) ? parseJwt(item):null
            })
    }
};

export const logout = () => {
    return dispatch => {
        localStorage.removeItem( constants.authLocalStorageKey );
        dispatch({
            type: LOGOUT_ACTION
        })
    }
};