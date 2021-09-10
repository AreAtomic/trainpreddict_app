import { Types } from '../actions'

const initialState = localStorage.getItem('plan')
    ? {
          prepare: localStorage.getItem('prepare') ? true : false,
          seance_day: sessionStorage.getItem('seance_day')
              ? JSON.parse(sessionStorage.getItem('seance_day'))
              : {},
      }
    : { prepare: false }

console.log(localStorage.getItem('prepare') ? true : false)

/*eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case Types.SET_PLAN:
            return { state: payload, prepare: false }

        case Types.SET_DAY:
            return {
                ...state,
                seance_day: payload,
            }

        case Types.CLEAR_DAY:
            return {
                ...state,
                seance_day: {},
            }

        case Types.PREPARE_PLAN:
            return { ...state, prepare: true }

        case Types.UNPREPARE_PLAN:
            return { ...state, prepare: false }

        case Types.CLEAR_PLAN:
            return { prepare: false }

        default:
            return state
    }
}
