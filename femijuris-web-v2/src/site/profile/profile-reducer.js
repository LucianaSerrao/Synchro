import { GET_LAWYER_FETCHING_SUCCESS, PROFILE_FETCHING, GET_LAWYER_FETCHING_FAIL } from "../../actions/lawyerDetailsActions"

const lawyer = {
    profile: null,
    loading: false,
    error: null
}

export const lawyer_detail_reducer = ( cState = lawyer, action ) => {
    switch ( action.type ) {
        case GET_LAWYER_FETCHING_SUCCESS:
            return { ...cState, profile: action.payload, loading: false, error: false }
        case PROFILE_FETCHING:
            return { ...cState, profile: null, loading: true, error: false }
        case GET_LAWYER_FETCHING_FAIL:
            return { ...cState, profile: null, loading: false, error: true }
        default:
            return cState
    }
}