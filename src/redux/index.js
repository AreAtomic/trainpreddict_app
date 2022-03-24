/**
 * @description Folder that contain all Redux files
 */
import { store } from './store'
//#region Actions
import { registerUserData, unregisterUserData } from './slices/authSlice'
import { login, logout, signup, endOnboarding } from './slices/userSlice'
import { setListUser, addUser, resetListUser } from './slices/userListSlice'
import {
    changeDateCalendar,
    changeViewCalendar,
    changeDataCalendar,
    changeFirstWeekIndexCalendar,
} from './slices/calendarSlice'
import {
    changeDatePlanning,
    setUsersPlanning,
    setRacesPlanning,
    resetPlanning,
} from './slices/planningSlice'
import { setUserSelected, resetUserSelected } from './slices/userSelectedSlice'
import {
    setObjectif,
    resetObjectif,
} from './slices/objectifsSlice'
import { setNewObjectif, resetNewObjectif } from './slices/newObjectifSlice'
import {
    setCaracteristics,
    resetCaracteristics,
} from './slices/caracteristicsSlice'
import {
    setIndicators,
    resetIndicators,
    setDatasIndicators,
    setDateIndicators,
    setSelectedIndicators,
} from './slices/indicatorsSlice'
import {
    setWeekSelectedStatistics,
    setWeeksStatistics,
    resetStatistics,
} from './slices/statisticsSlice'
import { setAssistant, resetAssistant } from './slices/assistantSlice'
import {
    setDateDaySelected,
    setDatasDaySelected,
    setNewCommentDaySelected,
    resetDaySelected,
} from './slices/daySelectedSlice'
import { setSeances, resetSeances } from './slices/seancesSlice'
import { setNewSeance, resetNewSeance } from './slices/newSeanceSlice'
//#endregion Actions

export {
    store,
    registerUserData,
    unregisterUserData,
    login,
    logout,
    signup,
    endOnboarding,
    setListUser,
    addUser,
    resetListUser,
    changeDateCalendar,
    changeViewCalendar,
    changeDataCalendar,
    changeFirstWeekIndexCalendar,
    changeDatePlanning,
    setUsersPlanning,
    setRacesPlanning,
    resetPlanning,
    setUserSelected,
    resetUserSelected,
    setObjectif,
    resetObjectif,
    setNewObjectif,
    resetNewObjectif,
    setCaracteristics,
    resetCaracteristics,
    setIndicators,
    resetIndicators,
    setDatasIndicators,
    setDateIndicators,
    setSelectedIndicators,
    setWeekSelectedStatistics,
    setWeeksStatistics,
    resetStatistics,
    setAssistant,
    resetAssistant,
    setDateDaySelected,
    setDatasDaySelected,
    setNewCommentDaySelected,
    resetDaySelected,
    setSeances,
    resetSeances,
    setNewSeance,
    resetNewSeance,
}
