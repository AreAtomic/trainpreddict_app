import * as Types from './types'
import dayjs from 'dayjs'
import { InfosupServices } from '../services'

export const postInfosup = () => (dispatch) => {
    const state = JSON.parse(sessionStorage.getItem('onboarding'))
    console.log(state)

    let adresse = `${state.adresse.rue}, ${state.adresse.zip} ${state.adresse.ville}`
    return InfosupServices.post_infosup(
        dayjs(state.naissance).toISOString(),
        adresse,
        state.decouverte,
        state.categorie,
        state.telephone,
        state.pfs,
        state.fcfs
    )
        .then((response) => {
            if (response.data.message === 'Error with your token') {
                console.log('Déconnexion')
                localStorage.clear()
                sessionStorage.clear()
            }
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
                dispatch({
                    type: Types.SET_INFOSUP,
                    payload: response.data.data.infosup,
                })
            }
            return response.data.data.infosup
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

export const putInfosup =
    (naissance, adresse, decouverte, categorie, telephone) => (dispatch) => {
        return InfosupServices.put_infosup(
            naissance,
            adresse,
            decouverte,
            categorie,
            telephone
        )
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
                    localStorage.setItem(
                        'infosup',
                        JSON.stringify(response.data.data.infosup)
                    )
                    dispatch({
                        type: Types.SET_MESSAGE,
                        payload: {
                            type: 'success',
                            message: response.data.msg,
                        },
                    })
                    dispatch({
                        type: Types.SET_INFOSUP,
                        payload: response.data.data.infosup,
                    })
                }
                return response.data.data.infosup
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

export const getInfosup = () => (dispatch) => {
    return InfosupServices.get_infosup()
        .then((response) => {
            if (response.data.message === 'Error with your token') {
                console.log('Déconnexion')
                localStorage.clear()
                sessionStorage.clear()
            }
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
                localStorage.setItem(
                    'infosup',
                    JSON.stringify(response.data.data.infosup)
                )
                dispatch({
                    type: Types.SET_MESSAGE,
                    payload: { type: 'success', message: response.data.msg },
                })
                dispatch({
                    type: Types.SET_INFOSUP,
                    payload: response.data.data.infosup,
                })
            }
            return response.data.data.infosup
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

/*eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    postInfosup,
    putInfosup,
    getInfosup,
}
