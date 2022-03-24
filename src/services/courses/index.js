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
