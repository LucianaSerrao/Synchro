import axios from "axios";
import constant from "../../config/constants";


export const EBOOK_FETCHED_SUCCESSFULY = 'HOME/FETCHED_SUCCESSFULY'
export const EBOOK_FETCH_FAILED = 'HOME/EBOOK_FETCH_FAILED'

export const fetchByUri = (uri) => {
    return dispatch => {
        axios
            .get(`${constant.api.fetchEbookByUrl[process.env.NODE_ENV]}?uri=${uri}`)
            .then((response) => dispatch({
                                    type: EBOOK_FETCHED_SUCCESSFULY,
                                    payload: response.data
                                })
            )
            .catch((error) =>
                dispatch({
                    type: EBOOK_FETCH_FAILED,
                    payload: error
                })
            )
    }
};