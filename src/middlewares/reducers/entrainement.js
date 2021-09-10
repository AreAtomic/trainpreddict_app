import { Types } from '../actions'

const initialState = localStorage.getItem('entrainements')
    ? { state: JSON.parse(localStorage.getItem('entrainements')) }
    : {}

/*eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case Types.SET_ENTRAINEMENTS:
            return { state: payload }

        case Types.SET_ANALYSE:
            return { ...state, analyse: payload }

        case Types.CLEAR_ENTRAINEMENTS:
            return {}
        case Types.CLEAR_ANALYSE:
            return { ...state, payload: undefined }

        default:
            return state
    }
}
