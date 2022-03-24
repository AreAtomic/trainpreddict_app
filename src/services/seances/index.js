import { requestApi } from '../../api'

/**
 * 
 * @param {ObjecId} userId 
 * @param {jwt} token 
 * @returns {JSON}
 */
export const getAllSeances = (token) => {
    return requestApi('get', `concepteur/seances`, token, null)
}