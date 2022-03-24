import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
} from '@reduxjs/toolkit'
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'reduxjs-toolkit-persist'
import storage from 'reduxjs-toolkit-persist/lib/storage'
import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1'
// Slices
import authSlice from './slices/authSlice'
import userSlice from './slices/userSlice'
import userListSlice from './slices/userListSlice'
import calendarSlice from './slices/calendarSlice'
import planningSlice from './slices/planningSlice'
import userSelectedSlice from './slices/userSelectedSlice'
import objectifsSlice from './slices/objectifsSlice'
import newObjectifSlice from './slices/newObjectifSlice'
import caracteristicsSlice from './slices/caracteristicsSlice'
import indicatorsSlice from './slices/indicatorsSlice'
import statisticsSlice from './slices/statisticsSlice'
import assistantSlice from './slices/assistantSlice'
import daySelectedSlice from './slices/daySelectedSlice'
import seancesSlice from './slices/seancesSlice'
import newSeanceSlice from './slices/newSeanceSlice'

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel1,
}

const reducers = combineReducers({
    auth: authSlice,
    user: userSlice,
    userList: userListSlice,
    calendar: calendarSlice,
    planning: planningSlice,
    userSelected: userSelectedSlice,
    objectifs: objectifsSlice,
    newObjectif: newObjectifSlice,
    caracteristics: caracteristicsSlice,
    indicators: indicatorsSlice,
    statistics: statisticsSlice,
    assistant: assistantSlice,
    daySelected: daySelectedSlice,
    seances: seancesSlice,
    newSeance: newSeanceSlice,
})

const _persistReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: _persistReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            /* ignore persistance actions */
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

export { store }
