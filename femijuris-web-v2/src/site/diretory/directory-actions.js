import axios from 'axios'
import constant from "../../config/constants"

export const FETCH_ALL_LAWYERS_LOADING = 'directory/FETCH_ALL_LAWYERS_LOADING'
export const FETCH_ALL_LAWYERS_SUCCEEDED = 'lawyers/FETCH_ALL_LAWYERS_SUCCEEDED'
export const FETCH_ALL_LAWYERS_FAILED = 'lawyers/FETCH_ALL_LAWYERS_FAILED'
export const SEND_MSG_TO_LAWYER_SUCCESS = 'lawyers/SEND_MSG_TO_LAWYER_SUCCESS'
export const SEND_MSG_TO_LAWYER_FAIL = 'lawyers/SEND_MSG_TO_LAWYER_FAIL'

export const fetchAllLawyers = (cities=[],specialties=[],page=0,size=400) => {

    let citiesUrl = JSON.stringify(cities);
    let specialtiesUrl = JSON.stringify(specialties);
    let url = `${constant.api.getAllLawyersFunction[process.env.NODE_ENV]}?cities=${citiesUrl}&specialties=${specialtiesUrl}&page=${page}&size=${size}`;

    return dispatch => {
        dispatch({type: FETCH_ALL_LAWYERS_LOADING});

        axios
            .get(url)
            .then(function (response) {
                dispatch({
                    type: FETCH_ALL_LAWYERS_SUCCEEDED,
                    payload: response.data.lawyers
                })
            })
            .catch(function (error) {
                dispatch({type: SEND_MSG_TO_LAWYER_FAIL});
            });
    }
};

export const sendMsgToLawyer = (msgObj) => {
    return dispatch => {

        axios.post(constant.api.sendMsgToLawyerUrl[process.env.NODE_ENV],{data:msgObj})
            .then(function (response) {
                dispatch({
                    type: SEND_MSG_TO_LAWYER_SUCCESS,
                    payload: response.data
                })
            })
            .catch(function (error) {
                dispatch({type: SEND_MSG_TO_LAWYER_FAIL})
            });

    }
}