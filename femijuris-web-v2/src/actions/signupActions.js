
export const  CREATE_PROFILE_SUCCESS = "CREATE_NEW_PROFILE_SUCCESS"
            , PROFILE_CREATING = "PROFILE_CREATING"
            , CRETE_PROFILE_FAIL = "CRETE_PROFILE_FAIL";

export const createNewProfile = (profile) => (dispatch) => {
    dispatch({
        type: PROFILE_CREATING,
        payload: profile
    })
}