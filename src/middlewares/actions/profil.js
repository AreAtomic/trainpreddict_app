import * as Types from './types'
import { ProfilServices } from '../services'

export const postProfil = () => (dispatch) => {
    const state = JSON.parse(sessionStorage.getItem('onboarding'))

    return ProfilServices.post_profil(state.fcfs, state.pfs, state.poids)
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
                dispatch({
                    type: Types.SET_MESSAGE,
                    payload: { type: 'success', message: response.data.msg },
                })
                dispatch({
                    type: Types.SET_PROFIL,
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

export const putProfil = (fcfs, pfs, poids) => (dispatch) => {
    return ProfilServices.post_profil(fcfs, pfs, poids)
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
                localStorage.setItem(
                    'profil',
                    JSON.stringify(response.data.data)
                )
                dispatch({
                    type: Types.SET_MESSAGE,
                    payload: { type: 'success', message: response.data.msg },
                })
                dispatch({
                    type: Types.SET_PROFIL,
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

export const getProfil = () => (dispatch) => {
    return ProfilServices.get_profil()
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
                    type: Types.SET_MESSAGE,
                    payload: { type: 'success', message: response.data.msg },
                })
                dispatch({
                    type: Types.SET_PROFIL,
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
