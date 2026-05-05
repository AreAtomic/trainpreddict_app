import { requestApi } from '../../api'

/**
 *
 * @param {ObjecId} userId
 * @param {jwt} token
 * @returns {JSON}
 */
export const createPlan = (userId, token) => {
    return requestApi('post', `coureur/plan`, token, { userId })
}
