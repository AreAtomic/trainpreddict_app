import * as Types from './types'

export const setLocation = (location) => (dispatch) => {
    dispatch({
        type: Types.SET_LOCATION,
        payload: location,
    })
}

/*eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { setLocation }
