/**
 * @description Folder that contain all API calls
 */
import axios from 'axios'
const proxy = process.env.REACT_APP_API_URL
export const url = `${proxy}/api/v1`

export const requestApi = (method, path, token, data, contentType) => {
    const config = {
        method: method,
        url: `${url}/${path}`,
        headers: {
            'x-access-token': token,
            'Content-Type': contentType || 'application/json',
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
            if (error.response.status === 401) {
                return { error: 'Unauthorized', status: 401 }
            }
            return error.response.data
        })
}
