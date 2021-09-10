import { Types } from '../actions'

const initialState = localStorage.getItem('profil')
    ? { state: JSON.parse(localStorage.getItem('profil')) }
    : {}

/*eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case Types.SET_PROFIL:
            return { state: payload }

        case Types.CLEAR_PROFIL:
            return {}

        default:
            return state
    }
}
