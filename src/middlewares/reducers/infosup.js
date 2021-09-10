import { Types } from '../actions'

const initialState = localStorage.getItem('infosup')
    ? { state: JSON.parse(localStorage.getItem('infosup')) }
    : {}

/*eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case Types.SET_INFOSUP:
            return { state: payload }

        case Types.CLEAR_INFOSUP:
            return {}

        default:
            return state
    }
}
