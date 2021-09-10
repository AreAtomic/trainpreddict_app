import { headers, API_URL } from '.'
import axios from 'axios'

export const get_courbes = () => {
    return axios
        .get(`${API_URL}/courbes`, { headers })
        .then((response) => {
            return response
        })
        .catch((err) => {
            return err.response
        })
}

export const post_courbe_realise = () => {
    return axios
        .post(`${API_URL}/courbes/realise`, {}, { headers })
        .then((response) => {
            return response
        })
        .catch((err) => {
            return err.response
        })
}

export const put_courbe_realise = () => {
    return axios
        .put(`${API_URL}/courbes/realise`, {}, { headers })
        .then((response) => {
            console.log(response)
            return response
        })
        .catch((err) => {
            return err.response
        })
}

export const post_courbe_previsionnelle = () => {
    return axios
        .post(`${API_URL}/courbes/previsionnelle`, {}, { headers })
        .then((response) => {
            return response
        })
        .catch((err) => {
            return err.response
        })
}

export const put_courbe_previsionnelle = () => {
    return axios
        .put(`${API_URL}/courbes/previsionnelle`, {}, { headers })
        .then((response) => {
            return response
        })
        .catch((err) => {
            return err.response
        })
}
