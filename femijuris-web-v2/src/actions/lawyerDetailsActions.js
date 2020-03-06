import axios from "axios";
import constants from "../config/constants";

export const GET_LAWYER_FETCHING_SUCCESS = "GET_LAWYER_FETCHING_SUCCESS";
export const GET_LAWYER_FETCHING_FAIL = "GET_LAWYER_FETCHING_FAIL";
export const PROFILE_FETCHING = "PROFILE_FETCHING"

export const fetchLawyer = (lawyer) => (dispatch) => {
    dispatch({
        type: PROFILE_FETCHING,
        payload: null
    })
    axios
        .get(`${ constants.api.fetchLawyer[process.env.NODE_ENV] }?uri=${ lawyer }`)
        .then((response) => {
            let _profile = response.data.lawyer;
            _profile.address = {
                name:"",
                lat: _profile.office_lat,
                lng: _profile.office_lng
            }
            _profile.social = {
                linkedin: "precisa adicionar no back"
            }
            _profile.address.name = `${ _profile.addresses[0].city }, ${ _profile.addresses[0].state }`;
            dispatch({
                type: GET_LAWYER_FETCHING_SUCCESS,
                payload: _profile
            })
        })
        .catch((error) =>
            dispatch({
                type: GET_LAWYER_FETCHING_FAIL,
                payload: error
            })
        )
}