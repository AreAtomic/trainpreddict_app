import { Types } from '../actions'

const initialState = localStorage.getItem('seances')
    ? { state: JSON.parse(localStorage.getItem('seances')) }
    : {}

/*eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case Types.SET_SEANCES:
            return { state: payload }

        case Types.CLEAR_SEANCES:
            return {}

        default:
            return state
    }
}
