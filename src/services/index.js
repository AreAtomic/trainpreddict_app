import { authenticate, register, changePassword } from './auth'
import {
    getCalendrierYear,
    createCalendrier,
    getDayCalendrier,
    putDayCalendrierPlanned,
    putDayCalendrierDone,
    putDayCalendarComment,
    putDayCalendarObjectif,
    deleteDayCalendarObjectif,
    putDayCalendarCourses,
    getPlannedObject,
} from './calendar'
import {
    getAllSeancesUser,
    getEntrainementAnalyse,
    postEntrainementFile,
} from './entrainements'
import { getAllObjectifs, createObjectif } from './objectifs'
import { getAllCoursesUser, getAllCourses } from './courses'
import {
    getAllUsers,
    getUserProfil,
    putUserProfil,
    createCoureur,
} from './affiliation'
import { getAllSeances } from './seances'

export {
    authenticate,
    register,
    changePassword,
    getCalendrierYear,
    createCalendrier,
    getDayCalendrier,
    putDayCalendrierPlanned,
    putDayCalendrierDone,
    putDayCalendarComment,
    putDayCalendarObjectif,
    deleteDayCalendarObjectif,
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
    createCoureur,
    postEntrainementFile,
}
