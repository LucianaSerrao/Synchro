import {ADMIN_LAWYERS_FETCHING_SUCCESS, ADMIN_LAWYERS_STATUS_CHANGED_SUCCESS} from "../../actions/adminActions"

const admin = {
    lawyers: [],
    statusChangeSuccess: false
}

export const admin_reducer = (cState=admin.lawyers, action) => {
    switch (action.type) {
        case ADMIN_LAWYERS_FETCHING_SUCCESS:
            return {...cState, statusChangeSuccess: false,lawyers: action.payload}

        case ADMIN_LAWYERS_STATUS_CHANGED_SUCCESS:
            return {...cState, statusChangeSuccess: true}

        default:
            return cState
    }
}