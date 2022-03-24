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
export const register = (email, nom, type) => {
    return requestApi('post', `assistant/organisme/register`, null, {
        email: email,
        nom: nom,
        type: type,
    })
}
