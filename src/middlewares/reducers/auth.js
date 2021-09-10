import { Types } from '../actions'

const initialState = localStorage.getItem('user')
    ? {
          ...JSON.parse(localStorage.getItem('user')),
          isLogged: true,
      }
    : { user: { isLogged: false } }

/*eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case Types.LOGIN:
            return { ...payload, isLogged: true }

        case Types.REGISTER_END:
            return { ...payload, isLogged: true, firstLogged: false }

        case Types.REGISTER:
            return { ...payload, isLogged: true }

        case Types.LOGOUT:
            return { user: { isLogged: false } }

        default:
            return state
    }
}
