import * as Types from './types'
import { AuthServices } from '../services'

export const login = (email, mot_de_passe) => (dispatch) => {
    return AuthServices.login(email, mot_de_passe)
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
                    type: Types.LOGIN,
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

export const register =
    (nom, prenom, email, mot_de_passe, mot_de_passe2) => (dispatch) => {
        return AuthServices.register(
            nom,
            prenom,
            email,
            mot_de_passe,
            mot_de_passe2
        )
            .then((response) => {
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
                        type: Types.REGISTER,
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

export const logout = () => (dispatch) => {
    try {
        localStorage.clear()

        dispatch({
            type: Types.LOGOUT,
        })

        return Promise.resolve()
    } catch (error) {
        dispatch({
            type: Types.SET_MESSAGE,
            payload: {
                type: 'danger',
                message:
                    "La déconnexion n'a pas fonctionnée réessayez plus tard",
            },
        })

        return Promise.reject()
    }
}

export const resetPassword = (email) => (dispatch) => {
    return AuthServices.resetpassword(email)
        .then((response) => {
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

export const passwordLost = (userId, password, password2) => (dispatch) => {
    return AuthServices.passwordLost(userId, password, password2)
        .then((response) => {
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

export const registerEnd = () => (dispatch) => {
    dispatch({
        type: Types.REGISTER_END,
    })
}

/*eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    login,
    register,
    logout,
    registerEnd
}
