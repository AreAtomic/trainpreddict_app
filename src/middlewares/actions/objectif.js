import * as Types from './types'
import { ObjectifServices } from '../services'

export const postObjectif =
    (
        date_objectif,
        date_debut,
        type,
        resultat_vise,
        titre,
        description,
        distance,
        temps,
        denivele
    ) =>
    (dispatch) => {
        return ObjectifServices.post_objectif(
            date_objectif,
            date_debut,
            type,
            resultat_vise,
            titre,
            description,
            distance,
            temps,
            denivele
        )
            .then((response) => {
                console.lof(response.data)
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
                        'objectif',
                        JSON.stringify(response.data.data)
                    )
                    dispatch({
                        type: Types.SET_MESSAGE,
                        payload: {
                            type: 'success',
                            message: response.data.msg,
                        },
                    })
                    dispatch({
                        type: Types.SET_OBJECTIF,
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

export const addObjectif =
    (
        date_objectif,
        date_debut,
        type,
        resultat_vise,
        titre,
        description,
        distance,
        temps,
        denivele
    ) =>
    (dispatch) => {
        return ObjectifServices.post_objectif(
            date_objectif,
            date_debut,
            type,
            resultat_vise,
            titre,
            description,
            distance,
            temps,
            denivele
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
                    dispatch({
                        type: Types.SET_MESSAGE,
                        payload: {
                            type: 'success',
                            message: response.data.msg,
                        },
                    })
                    console.log(response)
                    localStorage.setItem('objectif', JSON.stringify(response.data.data))
                    dispatch({
                        type: Types.SET_OBJECTIF,
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

export const getObjectif = () => (dispatch) => {
    return ObjectifServices.get_objectif()
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
                    'objectif',
                    JSON.stringify(response.data.data)
                )
                dispatch({
                    type: Types.SET_MESSAGE,
                    payload: { type: 'success', message: response.data.msg },
                })
                dispatch({
                    type: Types.SET_OBJECTIF,
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

export const putObjectif =
    (
        id,
        date_objectif,
        resultat_vise,
        titre,
        description,
        distance,
        temps,
        denivele,
        type,
        date_debut
    ) =>
    (dispatch) => {
        return ObjectifServices.put_objectif(
            id,
            date_objectif,
            resultat_vise,
            titre,
            description,
            distance,
            temps,
            denivele,
            type,
            date_debut
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
                        'objectif',
                        JSON.stringify(response.data.data)
                    )
                    dispatch({
                        type: Types.SET_MESSAGE,
                        payload: {
                            type: 'success',
                            message: response.data.msg,
                        },
                    })
                    dispatch({
                        type: Types.SET_OBJECTIF,
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

export const deleteObjetif = (id) => (dispatch) => {
    return ObjectifServices.delete_objectif(id)
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
                    'objectif',
                    JSON.stringify(response.data.data)
                )
                dispatch({
                    type: Types.SET_MESSAGE,
                    payload: {
                        type: 'success',
                        message: response.data.msg,
                    },
                })
                dispatch({
                    type: Types.SET_OBJECTIF,
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

/*eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    postObjectif,
    getObjectif,
    deleteObjetif,
}
