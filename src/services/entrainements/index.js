import { requestApi } from '../../api'

/**
 * 
 * @param {ObjecId} userId 
 * @param {jwt} token 
 * @returns {JSON}
 */
export const getAllSeancesUser = (userId, token) => {
    return requestApi('get', `assistant/entrainement/${userId}`, token, null)
}

export const getEntrainementAnalyse = (entrainementId, token) => {
    return requestApi('get', `assistant/entrainement/${entrainementId}/analyse`, token, null)
}
