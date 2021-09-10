import { headers, API_URL } from '.'
import axios from 'axios'

export const login = (email, mot_de_passe) => {
    return axios
        .post(`${API_URL}/auth/login`, { email, mot_de_passe }, { headers })
        .then((response) => {
            localStorage.setItem('user', JSON.stringify(response.data.data))
            return response
        })
        .catch((error) => {
            return error.response
        })
}

export const register = (nom, prenom, email, mot_de_passe, mot_de_passe2) => {
    return axios
        .post(
            `${API_URL}/auth/signup`,
            { nom, prenom, email, mot_de_passe, mot_de_passe2 },
            { headers }
        )
        .then((response) => {
            localStorage.setItem('user', JSON.stringify(response.data.data))
            return response
        })
        .catch((error) => {
            return error.response
        })
}

export const resetpassword = (email) => {
    return axios
        .get(`${API_URL}/auth/${email}/resetpassword`, { headers })
        .then((response) => {
            return response
        })
        .catch((error) => {
            return error.response
        })
}

export const passwordLost = (userId, password, password2) => {
    return axios
        .post(
            `${API_URL}/utilisateur/${userId}/link`,
            { password, password2 },
            { headers }
        )
        .then((response) => {
            return response
        })
        .catch((error) => {
            return error.response
        })
}
