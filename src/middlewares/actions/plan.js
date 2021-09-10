import * as Types from './types'
import { PlanServices } from '../services'

export const postPlan = () => (dispatch) => {
    return PlanServices.post_plan()
        .then((response) => {
            if (response.data.message === 'Error with your token') {
                console.log('Déconnexion')
                localStorage.clear()
                sessionStorage.clear()
            }
            if (response.status === 400) {
                dispatch({
                    type: Types.SET_MESSAGE,
                    payload: {
                        type: 'warning',
                        message: response.data.error,
                    },
                })
            }
            if (response.status === 500) {
                dispatch({
                    type: Types.SET_MESSAGE,
                    payload: {
                        type: 'danger',
                        message: response.data.error,
                    },
                })
            }
            if (response.status === 200) {
                dispatch({
                    type: Types.SET_MESSAGE,
                    payload: {
                        type: 'success',
                        message: response.data.msg,
                    },
                })
                dispatch({
                    type: Types.SET_PLAN,
                    payload: response.data.data,
                })
            }
            return response.data.data
        })
        .catch((error) => {
            dispatch({
                type: Types.SET_MESSAGE,
                payload: {
                    type: 'danger',
                    message: error,
                },
            })
            return Promise.reject()
        })
}

export const getPlan = () => (dispatch) => {
    return PlanServices.get_plan()
        .then((response) => {
            if (response.status === 400) {
                dispatch({
                    type: Types.SET_MESSAGE,
                    payload: { type: 'warning', message: response.data.error },
                })
            }
            if (response.status === 500) {
                dispatch({
                    type: Types.SET_MESSAGE,
                    payload: { type: 'danger', message: response.data.error },
                })
            }
            if (response.status === 200) {
                localStorage.setItem('plan', JSON.stringify(response.data.data))
                dispatch({
                    type: Types.SET_MESSAGE,
                    payload: { type: 'success', message: response.data.msg },
                })
                dispatch({
                    type: Types.SET_PLAN,
                    payload: response.data.data,
                })
            }
            return response.data.data
        })
        .catch((error) => {
            dispatch({
                type: Types.SET_MESSAGE,
                payload: {
                    type: 'danger',
                    message: 'Le serveur ne réponds pas',
                },
            })
            return Promise.reject()
        })
}

export const putPlanSeance = (id, seance, date) => (dispatch) => {
    return PlanServices.put_plan_seance(id, seance, date)
        .then((response) => {
            if (response.data.message === 'Error with your token') {
                console.log('Déconnexion')
                localStorage.clear()
                sessionStorage.clear()
            }
            if (response.status === 400) {
                dispatch({
                    type: Types.SET_MESSAGE,
                    payload: {
                        type: 'warning',
                        message: response.data.error,
                    },
                })
            }
            if (response.status === 500) {
                dispatch({
                    type: Types.SET_MESSAGE,
                    payload: {
                        type: 'danger',
                        message: response.data.error,
                    },
                })
            }
            if (response.status === 200) {
                dispatch({
                    type: Types.SET_MESSAGE,
                    payload: {
                        type: 'success',
                        message: response.data.msg,
                    },
                })
                dispatch({
                    type: Types.SET_PLAN,
                    payload: response.data.data,
                })
            }
            return response.data.data
        })
        .catch((error) => {
            dispatch({
                type: Types.SET_MESSAGE,
                payload: {
                    type: 'danger',
                    message: error,
                },
            })
            return Promise.reject()
        })
}

export const setDay = (seance) => (dispatch) => {
    sessionStorage.setItem('seance_day', JSON.stringify(seance))
    console.log(seance)
    dispatch({
        type: Types.SET_DAY,
        payload: seance,
    })
    return Promise.resolve()
}

export const clearDay = (seance) => (dispatch) => {
    sessionStorage.removeItem('seance_day')
    dispatch({
        type: Types.CLEAR_DAY,
    })
    return Promise.resolve()
}

export const preparePlan = () => (dispatch) => {
    localStorage.setItem('prepare', true)
    dispatch({
        type: Types.PREPARE_PLAN,
    })
    return Promise.resolve()
}

export const unpreparePlan = () => (dispatch) => {
    localStorage.removeItem('prepare')
    dispatch({
        type: Types.UNPREPARE_PLAN,
    })
    return Promise.resolve()
}

/*eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    postPlan,
    getPlan,
    preparePlan,
    unpreparePlan,
}
