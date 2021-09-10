import { headers, API_URL } from '.'
import axios from 'axios'

export const post_plan = () => {
    console.log(`${API_URL}/plan`)
    return axios
        .post(`${API_URL}/plan`, {}, { headers })
        .then((response) => {
            return response
        })
        .catch((error) => {
            console.log(headers)
            return error.response
        })
}

export const get_plan = () => {
    return axios
        .get(`${API_URL}/plan`, { headers })
        .then((response) => {
            localStorage.setItem('plan', JSON.stringify(response.data.data))
            return response
        })
        .catch((error) => {
            return error.response
        })
}

export const put_plan_seance = (id, seance, date) => {
    return axios
        .put(`${API_URL}/plan/${id}/seance`, { seance, date }, { headers })
        .then((response) => {
            localStorage.setItem('plan', JSON.stringify(response.data.data))
            return response
        })
        .catch((error) => {
            return error.response
        })
}
