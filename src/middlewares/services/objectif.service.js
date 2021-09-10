import { headers, API_URL } from '.'
import axios from 'axios'

export const post_objectif = (
    date_objectif,
    date_debut,
    type,
    resultat_vise,
    titre,
    description,
    distance,
    temps,
    denivele
) => {
    return axios
        .post(
            `${API_URL}/objectif`,
            {
                date_objectif,
                date_debut,
                type,
                resultat_vise,
                titre,
                description,
                distance,
                temps,
                denivele,
            },
            { headers }
        )
        .then((response) => {
            return response
        })
        .catch((error) => {
            return error.response
        })
}

export const get_objectif = () => {
    return axios
        .get(`${API_URL}/objectif`, { headers })
        .then((response) => {
            localStorage.setItem('objectif', JSON.stringify(response.data.data))
            return response
        })
        .catch((error) => {
            return error.response
        })
}

export const put_objectif = (
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
) => {
    return axios
        .put(
            `${API_URL}/objectif/${id}`,
            {
                date_objectif,
                resultat_vise,
                titre,
                description,
                distance,
                temps,
                denivele,
                type,
                date_debut,
            },
            { headers }
        )
        .then((response) => {
            localStorage.setItem('objectif', JSON.stringify(response.data.data))
            return response
        })
        .catch((error) => {
            return error.response
        })
}

export const delete_objectif = (id) => {
    return axios
        .delete(`${API_URL}/objectif/${id}`, { headers })
        .then((response) => {
            localStorage.setItem('objectif', JSON.stringify(response.data.data))
            return response
        })
        .catch((error) => {
            return error.response
        })
}
