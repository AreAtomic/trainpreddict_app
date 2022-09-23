import { requestApi } from '../../api'
import bcrypt from 'bcryptjs'

const HASH = process.env.HASH

/**
 * @description Authentication to API
 * @param {string} email
 * @param {string} mot_de_passe
 * @returns {JSON}
 */
export const authenticate = async (email, mot_de_passe) => {
    return requestApi('post', `auth`, null, {
        email: email,
    }).then(async (response) => {
        console.log(response)
        if (response.error) {
            return { error: response.error }
        }

        if (response.utilisateur) {
            const isValidPassword = await bcrypt.compare(
                mot_de_passe,
                response.utilisateur.mot_de_passe
            )

            if (isValidPassword) {
                return requestApi('post', `auth/login`, null, {
                    id: response.utilisateur._id,
                })
            } else {
                return {
                    error: 'Mot de passe invalide',
                }
            }
        }
    })
}

/**
 * @description Register a new user to API
 * @param {string} email
 * @param {string} nom
 * @param {string} type
 * @returns {JSON}
 */
export const register = async (email, firstName, lastName, password) => {
    const salt = await bcrypt.genSalt(HASH)
    const passwordHashed = await bcrypt.hash(password, salt)

    return requestApi('post', `auth/signup`, null, {
        email: email,
        nom: lastName,
        prenom: firstName,
        mot_de_passe: passwordHashed,
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
