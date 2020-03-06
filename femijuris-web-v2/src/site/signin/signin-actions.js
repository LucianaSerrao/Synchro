import axios from "axios";
import constant from "../../config/constants";


export const SIGNIN_DONE_SUCCESSFULY = 'SIGN/DONE_SUCCESSFULY'
export const SIGNIN_FAILED = 'SIGN/FAILED'

export const doLogin = (email,password) => {
    return dispatch => {
        axios
            .post(`${constant.api.login[process.env.NODE_ENV]}`,{email,password})
            .then((response) => dispatch({
                    type: SIGNIN_DONE_SUCCESSFULY,
                    payload: response.data
                })
            )
            .catch((error) =>
                dispatch({
                    type: SIGNIN_FAILED,
                    payload: error
                })
            )
    }
};