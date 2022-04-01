import { requestApi } from '../../api'

/**
 * @description Fetch calendar
 * @param {ObjectId} userId
 * @param {int} year
 * @param {jwt} token
 * @returns {JSON}
 */
export const getCalendrierYear = (userId, year, token) => {
    return requestApi(
        'get',
        `coureur/calendrier/${year}`,
        token,
        null
    )
}

export const createCalendrier = (userId, token) => {
    return requestApi(
        'post',
        `coureur/calendrier`,
        token,
        {}
    )
}

/**
 * @description Fetch day calendar
 * @param {ObjectId} userId
 * @param {ISOString} date
 * @param {jwt} token
 * @returns {JSON}
 */
export const getDayCalendrier = (userId, date, token) => {
    return requestApi(
        'get',
        `coureur/calendrier/day/${date}`,
        token,
        null
    )
}

/**
 * @description Modify day of calendar
 * @param {ObjectId} userId
 * @param {ISOString} date
 * @param {jwt} token
 * @param {Array<ObjectId>} planned
 * @param {Boolean} adding
 * @param {JSON} statistiques {time: String,
 *  distance: Int,
 *  sse: Int,
 *  denivele: Int,
 *  nombreSeance: Int
 * }
 * @returns {JSON}
 */
export const putDayCalendrierPlanned = (
    userId,
    date,
    token,
    planned,
    adding,
    statistiques
) => {
    return requestApi(
        'put',
        `coureur/calendrier/planned/${date}`,
        token,
        {
            planned: planned,
            adding: adding,
            statistiques: statistiques,
        }
    )
}

/**
 * @description Add a comment for a day
 * @param {ObjectId} userId
 * @param {ISOString} date
 * @param {jwt} token
 * @param {Array<JSON>} comment
 * @returns {JSON}
 */
export const putDayCalendarComment = (userId, date, token, comment) => {
    return requestApi(
        'put',
        `coureur/calendrier/comment/${date}`,
        token,
        { comment: comment }
    )
}

/**
 * @description Create a new objectif in a specific day or Modify an objectif
 * @param {ObjectidId} userId
 * @param {ISOString} date
 * @param {jwt} token
 * @param {String} type
 * @param {String} resultat_vise
 * @param {String} titre
 * @param {String} description
 * @param {Int} denivele
 * @param {Int} distance
 * @param {String} temps
 * @param {Int} sse
 * @param {boolean} realise
 * @returns
 */
export const putDayCalendarObjectif = (
    userId,
    date,
    token,
    type,
    resultat_vise,
    titre,
    description,
    denivele,
    distance,
    temps,
    sse,
    realise
) => {
    return requestApi(
        'put',
        `coureur/calendrier/objectif/${date}`,
        token,
        {
            type: type,
            resultat_vise: resultat_vise,
            titre: titre,
            description: description,
            denivele: denivele,
            distance: distance,
            temps: temps,
            sse: sse,
            realise: realise,
        }
    )
}

/**
 * @description Create a new courses in a specific day or Modify a courses
 * @param {ObjectidId} userId
 * @param {ISOString} date
 * @param {jwt} token
 * @param {String} type
 * @param {String} titre
 * @param {String} description
 * @param {Int} denivele
 * @param {Int} distance
 * @param {String} temps
 * @param {Int} sse
 * @param {Array<ObjectId>} planned
 * @returns
 */
export const putDayCalendarCourses = (
    userId,
    date,
    token,
    type,
    titre,
    description,
    denivele,
    distance,
    temps,
    sse,
    planned
) => {
    return requestApi(
        'put',
        `coureur/calendrier/objectif/${date}`,
        token,
        {
            type: type,
            titre: titre,
            description: description,
            denivele: denivele,
            distance: distance,
            temps: temps,
            sse: sse,
            planned: planned,
        }
    )
}

/**
 * @description Get object from id in planned array
 * @param {ObjectId} seanceId 
 * @param {jwt} token 
 * @returns 
 */
export const getPlannedObject = (userId, seanceId, token) => {
    return requestApi(
        'get',
        `coureur/calendrier/planned/object/${seanceId}`,
        token,
        null
    )
}
