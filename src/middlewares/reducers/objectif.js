import { Types } from '../actions'

const initialState = localStorage.getItem('objectif')
    ? { state: JSON.parse(localStorage.getItem('objectif')) }
    : {}

console.log(initialState)

/*eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case Types.SET_OBJECTIF:
            return { state: payload }

        case Types.CLEAR_OBJECTIF:
            return {}

        default:
            return state
    }
}
