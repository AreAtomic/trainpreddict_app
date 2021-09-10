import * as Types from './types'
import { DonneesServices } from '../services'

export const postDonnees = () => (dispatch) => {
    const state = JSON.parse(sessionStorage.getItem('onboarding'))
    /* Calcul sse */
    let sse =
        state.nombre_seance_semaine * state.nombre_heure_semaine * 10 -
        state.nombre_seance_semaine * 10

    return DonneesServices.post_donnees(
        sse,
        state.experience,
        state.sommeil,
        state.recuperation,
        state.nombre_heure_semaine,
        state.nombre_seance_semaine,
        state.musculation === 'Oui' ? true : false,
        state.ppg === 'Oui' ? true : false,
        state.etirement === 'Oui' ? true : false,
        state.foncier,
        state.style,
        state.point_faible,
        state.jours_repos
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
                    type: Types.SET_MESSAGE,
                    payload: { type: 'success', message: response.data.msg },
                })
                dispatch({
                    type: Types.SET_DONNEESUTILISATEUR,
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
        })
}

export const putDonnees =
    (
        sse,
        experience,
        sommeil,
        recuperation,
        nombre_heure_semaine,
        nombre_seance_semaine,
        musculation,
        ppg,
        etirement,
        foncier,
        style,
        point_faible,
        jours_repos
    ) =>
    (dispatch) => {
        return DonneesServices.put_donnees(
            sse,
            experience,
            sommeil,
            recuperation,
            nombre_heure_semaine,
            nombre_seance_semaine,
            musculation,
            ppg,
            etirement,
            foncier,
            style,
            point_faible,
            jours_repos
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
                        'donnees',
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
                        type: Types.SET_DONNEESUTILISATEUR,
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
            })
    }

export const getDonnees = () => (dispatch) => {
    return DonneesServices.get_donnees()
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
                    'donnees',
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
                    type: Types.SET_DONNEESUTILISATEUR,
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
        })
}

/*eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    postDonnees,
    putDonnees,
    getDonnees,
}
