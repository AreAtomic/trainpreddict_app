/**
 * @description Folder that contain all API calls
 */
import axios from 'axios'
const proxy = process.env.REACT_APP_API_URL
export const url = `${proxy}/api/v1`

export const requestApi = (method, path, token, data) => {
    const config = {
        method: method,
        url: `${url}/${path}`,
        headers: {
            'x-access-token': token,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': proxy,
            'Access-Control-Allow-Headers':
                'Origin, X-Requested-With, Content-Type, Accept',
        },
        data: data,
    }
    return axios(config)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error)
            return error.response.data
        })
}
