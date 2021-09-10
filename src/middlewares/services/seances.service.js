import { API_URL, headers } from '.'
import axios from 'axios'

export const get_seances = () => {
    return axios
        .get(API_URL + `/seance`, { headers })
        .then((response) => {
            return response
        })
        .catch((error) => {
            return error
        })
}
