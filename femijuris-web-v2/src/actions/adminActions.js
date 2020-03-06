import axios from 'axios'
import constant from "../config/constants"


export const ADMIN_LAWYERS_FETCHING_SUCCESS = 'ADMIN/LAWYERS_FETCHING_SUCCESS'
export const ADMIN_LAWYERS_FETCHING_FAIL = 'ADMIN/LAWYERS_FETCHING_FAIL'
export const ADMIN_LAWYERS_STATUS_CHANGED_SUCCESS = 'ADMIN/LAWYERS_STATUS_CHANGED_SUCCESS'
export const ADMIN_LAWYERS_STATUS_CHANGED_SUCCESS_FAIL = 'ADMIN/LAWYERS_STATUS_CHANGED_SUCCESS_FAIL'

export const changeLawyerPendingStatus = (id,pending,secret) =>
    (dispatch) => {
        axios
            .put(`${constant.api.adminUpdateLawyerPendingStatus[process.env.NODE_ENV]}`,{
                data:{id, pending, secret}
            })
            .then((response) => {
                dispatch({
                    type: ADMIN_LAWYERS_STATUS_CHANGED_SUCCESS,
                    payload: {
                        lawyerStatus: response.data.pending
                    }
                })
            })
            .catch((error) =>
                dispatch({
                    type: ADMIN_LAWYERS_STATUS_CHANGED_SUCCESS_FAIL,
                    payload: error
                })
            )
    }

export const fetchLawyers = (pending=true) =>
    (dispatch) => {
        axios
            .get(`${constant.api.adminFetchAllLawyers[process.env.NODE_ENV]}?pending=${pending}`)
            .then((response) => {
                console.log(response)
                dispatch({
                    type: ADMIN_LAWYERS_FETCHING_SUCCESS,
                    payload: response.data.lawyers
                })
            })
            .catch((error) =>
                dispatch({
                    type: ADMIN_LAWYERS_FETCHING_FAIL,
                    payload: error
                })
            )
    }