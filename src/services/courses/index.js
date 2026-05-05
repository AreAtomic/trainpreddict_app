import { requestApi } from '../../api'

/**
 * @description Fetch all courses from an account
 * @param {ObjectId} userId
 * @param {jwt} token
 * @returns
 */
export const getAllCoursesUser = (userId, token) => {
    return requestApi('get', `assistant/courses/${userId}`, token)
}

/**
 * @description Fetch all courses from connected account
 * @param {ObjectId} userId
 * @param {jwt} token
 * @returns
 */
export const getAllCourses = (token) => {
    return requestApi('get', `assistant/courses`, token)
}

export const putCourses = (model, statistiques, planned, adding, token) => {
    return requestApi('put', `coureur/calendrier/course/${model.date}`, token, {
        model,
        planned,
        statistiques,
        adding,
    })
}
