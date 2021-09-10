import { Types } from '../actions'

const initialState = localStorage.getItem('donnees')
? { state: JSON.parse(localStorage.getItem('donnees')) }
: {}

/*eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case Types.SET_DONNEESUTILISATEUR:
            return {state: payload}

        case Types.CLEAR_DONNEESUTILISATEUR:
            return {}

        default:
            return state
    }
}
