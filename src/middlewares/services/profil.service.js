import { headers, API_URL } from '.'
import axios from 'axios'

export const post_profil = (fcfs, pfs, poids) => {
    return axios
        .post(`${API_URL}/profil`, { fcfs, pfs, poids }, { headers })
        .then((response) => {
            localStorage.setItem('profil', JSON.stringify(response.data.data))
            return response
        })
        .catch((error) => {
            return error.response
        })
}

export const get_profil = () => {
    return axios
        .get(`${API_URL}/profil`, { headers })
        .then((response) => {
            localStorage.setItem('profil', JSON.stringify(response.data.data))
            return response
        })
        .catch((error) => {
            return error.response
        })
}
