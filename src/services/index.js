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
    updateCourbe,
} from './calendar'
import {
    getAllSeancesUser,
    getEntrainementAnalyse,
    postEntrainementFile,
} from './entrainements'
import {
    getAllObjectifs,
    createObjectif,
    getInformationsObjectif,
    deleteObjectif,
    editObjectif,
} from './objectifs'
import { getAllCoursesUser, getAllCourses, putCourses } from './courses'
import {
    getAllUsers,
    getUserProfil,
    putUserProfil,
    createCoureur,
} from './affiliation'
import { getAllSeances } from './seances'
import { getConfig } from './parametres'
import { createPlan } from './plan'

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
    getInformationsObjectif,
    getAllCoursesUser,
    getAllCourses,
    getAllUsers,
    getUserProfil,
    getAllSeances,
    putUserProfil,
    createCoureur,
    postEntrainementFile,
    deleteObjectif,
    editObjectif,
    updateCourbe,
    putCourses,
    getConfig,
    createPlan
}
