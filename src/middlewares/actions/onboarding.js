import * as Types from './types'

export const setOnBoarding = (state) => (dispatch) => {
    sessionStorage.setItem('onboarding', JSON.stringify(state))
    dispatch({
        type: Types.SET_ONBOARDING,
        payload: state,
    })
}

export const setSlide = (slide) => (dispatch) => {
    dispatch({
        type: Types.SET_SLIDE,
        payload: slide,
    })
}

export const clearOnBoarding = () => (dispatch) => {
    dispatch({
        type: Types.CLEAR_ONBOARDING,
    })
}

/*eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    setOnBoarding,
    setSlide,
    clearOnBoarding,
}
