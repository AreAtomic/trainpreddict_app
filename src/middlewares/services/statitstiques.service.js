import { headers, API_URL } from '.'
import axios from 'axios'

export const get_statistiques = () => {
    return axios.get(`${API_URL}/statistiques`, { headers })
}

export const post_statistiques = () => {
    return axios.post(`${API_URL}/statistiques/`, {}, { headers })
}

export const put_statistiques = () => {
    return axios.put(`${API_URL}/statistiques`, {}, { headers })
}

export const put_statistiques_entrainement = (entrainement) => {
    return axios.put(`${API_URL}/statistiques/entrainement`, {entrainement}, { headers })
}
