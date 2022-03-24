import { requestApi } from '../../api'

/**
 * @description Fetch all objectifs from an account
 * @param {ObjectId} userId
 * @param {jwt} token
 * @returns
 */
export const getAllObjectifs = (userId, token) => {
    return requestApi('get', `assistant/objectif/${userId}`, token)
}

export const createObjectif = (
    userId,
    type,
    resultat_vise,
    titre,
    description,
    denivele,
    distance,
    temps,
    date,
    token
) => {
    return requestApi(
        'put',
        `assistant/calendrier/${userId}/objectif/${date}`,
        token,
        {
            type: type,
            resultat_vise: resultat_vise,
            titre: titre,
            description: description,
            denivele: denivele,
            distance: distance,
            temps: temps,
        }
    )
}
