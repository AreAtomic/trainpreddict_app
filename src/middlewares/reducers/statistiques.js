import { Types } from '../actions'

const initialState = localStorage.getItem('statistiques')
    ? { state: JSON.parse(localStorage.getItem('statistiques')) }
    : {}

/*eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case Types.SET_STATISTIQUES:
            return { state: payload }

        case Types.CLEAR_STATISTIQUES:
            return {}

        default:
            return state
    }
}
