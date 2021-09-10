import { Types } from '../actions'

const initialState = localStorage.getItem('courbes')
    ? { state: JSON.parse(localStorage.getItem('courbes')) }
    : {}

/*eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case Types.SET_COURBES:
            return { state: payload }

        case Types.CLEAR_COURBES:
            return {}

        default:
            return state
    }
}
