import { headers, API_URL } from '.'
import axios from 'axios'

export const post_infosup = (
    naissance,
    adresse,
    decouverte,
    categorie,
    telephone,
    pfs,
    fcfs
) => {
    return axios
        .post(
            `${API_URL}/infosup`,
            { naissance, adresse, decouverte, categorie, telephone, pfs, fcfs },
            { headers }
        )
        .then((response) => {
            localStorage.setItem('infosup', JSON.stringify(response.data.data))
            return response
        })
        .catch((error) => {
            return error.response
        })
}

export const put_infosup = (
    naissance,
    adresse,
    decouverte,
    categorie,
    telephone
) => {
    return axios
        .put(
            `${API_URL}/infosup`,
            { naissance, adresse, decouverte, categorie, telephone },
            { headers }
        )
        .then((response) => {
            localStorage.setItem('infosup', JSON.stringify(response.data.data.infosup))
            return response
        })
        .catch((error) => {
            return error.response
        })
}

export const get_infosup = () => {
    return axios
        .get(`${API_URL}/infosup`, { headers })
        .then((response) => {
            localStorage.setItem('infosup', JSON.stringify(response.data.data.infosup))
            return response
        })
        .catch((error) => {
            return error.response
        })
}
