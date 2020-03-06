import constant from "../config/constants"
import axios from 'axios'

export const EBOOK_FETCHED_SUCCESSFULY = 'EBOOK/FETCHED_SUCCESSFULY'
export const EBOOK_FETCH_FAILED = 'EBOOK/FETCH_FAILED'
export const EBOOK_FETCHING = 'EBOOK/FETCHING'
export const EBOOK_SECTION_FETCHING = 'EBOOK/SECTION_FETCH'
export const EBOOK_SECTION_SUCCESSFULY = 'EBOOK/SECTION_SUCCESSFULY'
export const EBOOK_SECTION_FAILED = 'EBOOK/SECTION_FAILED'
export const EBOOK_EMAIL_REGISTERED_SUCCESSFULY = 'EBOOK/EMAIL_REGISTERED_SUCCESSFULY'
export const EBOOK_EMAIL_REGISTERED_FAILED = 'EBOOK/EMAIL_REGISTERED_FAILED'
export const EBOOK_CLICKED_TO_REGISTER = 'EBOOK/EBOOK_CLICKED_TO_REGISTER'

export const fetchByUri = (uri) => {
    return dispatch => {
        dispatch({
            type: EBOOK_FETCHING,
            payload: null
        })

        axios
            .get(`${constant.api.fetchEbookByUrl[process.env.NODE_ENV]}?uri=${uri}`)
            .then((response) =>
                dispatch({
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
}

export const fetchSectionByUri = (uri,fileName) => {
    return dispatch => {
        dispatch({
            type: EBOOK_SECTION_FETCHING,
            payload: null
        })

        axios
            .get(fileName)
            .then((response) =>
                dispatch({
                    type: EBOOK_SECTION_SUCCESSFULY,
                    payload: {data: response.data, uri}
                })
            )
            .catch((error) =>
                dispatch({
                    type: EBOOK_SECTION_FAILED,
                    payload: error
                })
            )
    }
}

export const registerEmail = (email,canSendNews,ebook) => {
    return dispatch => {
        dispatch({
            type: EBOOK_CLICKED_TO_REGISTER
        })

        axios.post(
                constant.api.registerEmailForEbookUrl[process.env.NODE_ENV],
                {email,canSendNews,ebook}
            )
            .then((response) => {
                dispatch({
                    type: EBOOK_EMAIL_REGISTERED_SUCCESSFULY
                })
            })
            .catch((error) => {
                dispatch({
                    type: EBOOK_EMAIL_REGISTERED_FAILED,
                    payload: error
                })
            })
    }
}

