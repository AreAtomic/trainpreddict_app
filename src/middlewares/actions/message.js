import * as Types from './types'

export const setMessage = (message) => (dispatch) => {
    dispatch({
        type: Types.SET_MESSAGE,
        payload: message,
    })
}

export const clearMessage = () => (dispatch) => {
    dispatch({
        type: Types.CLEAR_MESSAGE,
    })
}

/*eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    setMessage,
    clearMessage
}