import * as Types from './types'
import { StatistiquesServices } from '../services'

export const getStatistiques = () => (dispatch) => {
    return StatistiquesServices.get_statistiques()
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
                    'statistiques',
                    JSON.stringify(response.data.data)
                )
                dispatch({
                    type: Types.SET_STATISTIQUES,
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

export const postStatistiques = () => (dispatch) => {
    return StatistiquesServices.post_statistiques()
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
                    'statistiques',
                    JSON.stringify(response.data.data)
                )
                dispatch({
                    type: Types.SET_STATISTIQUES,
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

export const putStatistiques = () => (dispatch) => {
    return StatistiquesServices.put_statistiques()
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
                    'statistiques',
                    JSON.stringify(response.data.data)
                )
                dispatch({
                    type: Types.SET_STATISTIQUES,
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

export const putStatistiquesEntrainement = (entrainement) => (dispatch) => {
    return StatistiquesServices.put_statistiques_entrainement(entrainement)
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
                    'statistiques',
                    JSON.stringify(response.data.data)
                )
                dispatch({
                    type: Types.SET_STATISTIQUES,
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
