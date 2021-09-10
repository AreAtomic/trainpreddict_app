import { API_URL, headers } from '.'
import axios from 'axios'

export const post_entrainement = (file) => (dispatch) => {
    let formData = new FormData()
    formData.append('file', file)
    return axios.post(API_URL + `/entrainement/file`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'x-access-token': JSON.parse(localStorage.getItem('user')).token,
        },
    })
}

export const get_entrainement = () => {
    return axios
        .get(API_URL + `/entrainement`, { headers })
        .then((response) => {
            return response
        })
        .catch((error) => {
            return error
        })
}

export const get_entrainement_by_id = (id) => {
    return axios
        .get(API_URL + `/entrainement/${id}`, { headers })
        .then((response) => {
            return response
        })
        .catch((error) => {
            return error
        })
}

export const put_entrainement_ressentis = (id, ressentis) => {
    return axios
        .put(API_URL + `/entrainement/${id}/ressentis`, {ressentis}, { headers })
        .then((response) => {
            return response
        })
        .catch((error) => {
            return error
        })
}

export const put_entrainement_type = (id, type_entrainement) => {
    return axios
        .put(API_URL + `/entrainement/${id}/typeEntrainement`, {type_entrainement}, { headers })
        .then((response) => {
            return response
        })
        .catch((error) => {
            return error
        })
}

export const delete_entrainement_by_id = (id) => {
    console.log(id)
    return axios
        .delete(API_URL + `/entrainement/${id}`, { headers })
        .then((response) => {
            return response
        })
        .catch((error) => {
            return error
        })
}