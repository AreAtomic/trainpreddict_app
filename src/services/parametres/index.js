import { requestApi } from '../../api'

export const getConfig = (token) => {
    return requestApi('get', `coureur/config`, token, null)
}