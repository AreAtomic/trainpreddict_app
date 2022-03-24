import { authenticate, register } from './auth'
import {
    getCalendrierYear,
    createCalendrier,
    getDayCalendrier,
    putDayCalendrierPlanned,
    putDayCalendarComment,
    putDayCalendarObjectif,
    putDayCalendarCourses,
    getPlannedObject
} from './calendar'
import { getAllSeancesUser, getEntrainementAnalyse } from './entrainements'
import { getAllObjectifs, createObjectif } from './objectifs'
import { getAllCoursesUser, getAllCourses } from './courses'
import { getAllUsers, getUserProfil, putUserProfil, createCoureur } from './affiliation'
import { getAllSeances } from './seances'

export {
    authenticate,
    register,
    getCalendrierYear,
    createCalendrier,
    getDayCalendrier,
    putDayCalendrierPlanned,
    putDayCalendarComment,
    putDayCalendarObjectif,
    putDayCalendarCourses,
    getPlannedObject,
    getAllSeancesUser,
    getEntrainementAnalyse,
    getAllObjectifs,
    createObjectif,
    getAllCoursesUser,
    getAllCourses,
    getAllUsers,
    getUserProfil,
    getAllSeances,
    putUserProfil,
    createCoureur
}
