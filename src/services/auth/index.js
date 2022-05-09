import { requestApi } from '../../api'

/**
 * @description Authentication to API
 * @param {string} email
 * @param {string} mot_de_passe
 * @returns {JSON}
 */
export const authenticate = (email, mot_de_passe) => {
    return requestApi('post', `auth/login`, null, {
        email: email,
        mot_de_passe: mot_de_passe,
    })
}

/**
 * @description Register a new user to API
 * @param {string} email
 * @param {string} nom
 * @param {string} type
 * @returns {JSON}
 */
export const register = (
    email,
    firstName,
    lastName,
    password,
    passwordConfirm
) => {
    return requestApi('post', `auth/signup`, null, {
        email: email,
        nom: lastName,
        prenom: firstName,
        mot_de_passe: password,
        mot_de_passe2: passwordConfirm,
    })
}

/**
 * @description Change password user
 * @param {string} email
 * @param {string} nom
 * @param {string} type
 * @returns {JSON}
 */
export const changePassword = (
    email,
    previousPassword,
    newPassword,
    newPasswordConfirm
) => {
    return requestApi('post', `auth/changePassword`, null, {
        email,
        previousPassword,
        newPassword,
        newPasswordConfirm,
    })
}
