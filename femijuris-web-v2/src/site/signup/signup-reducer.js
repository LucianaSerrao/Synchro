import { CREATE_PROFILE_SUCCESS, PROFILE_CREATING, CRETE_PROFILE_FAIL } from "../../actions/signupActions"

const lawyer = {
    profile: {},
    loading: null,
    error: null
}

export const create_profile_reducer = ( cState = lawyer, action ) => {
    switch ( action.type ) {
        case CREATE_PROFILE_SUCCESS:
            return { ...cState, profile: action.payload, error: false, loading: false }
        case PROFILE_CREATING:
            return { ...cState, profile: action.payload, error: false, loading: true }
        case CRETE_PROFILE_FAIL:
            return { ...cState, profile: action.payload, error: true, loading: false }
        default:
            return cState
    }
}