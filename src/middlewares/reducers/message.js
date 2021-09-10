import { Types } from '../actions'

const initialState = {}

/*eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case Types.SET_MESSAGE:
            return { ...state, [payload.type]: payload.message }

        case Types.CLEAR_MESSAGE:
            return {}

        default:
            return state
    }
}
