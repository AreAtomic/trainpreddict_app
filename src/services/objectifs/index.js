import { requestApi } from '../../api'

/**
 * @description Fetch all objectifs from an account
 * @param {ObjectId} userId
 * @param {jwt} token
 * @returns
 */
export const getAllObjectifs = (userId, token) => {
    return requestApi('get', `coureur/objectif`, token)
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
    return requestApi('put', `coureur/calendrier/objectif/${date}`, token, {
        type: type,
        resultat_vise: resultat_vise,
        titre: titre,
        description: description,
        denivele: denivele,
        distance: distance,
        temps: temps,
    })
}

export const getInformationsObjectif = (objectifId, token) => {
    return requestApi(
        'get',
        `assistant/objectif/informations/${objectifId}`,
        token
    )
}
