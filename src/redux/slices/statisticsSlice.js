import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs'
let weekOfYear = require('dayjs/plugin/weekOfYear')
dayjs.extend(weekOfYear)

//#region Slice
const statisticsSlice = createSlice({
    name: 'statistics',
    initialState: {
        weekSelected: dayjs().week(),
        weeks: [],
    },
    reducers: {
        setWeekSelectedStatistics: (state, action) => {
            state.weekSelected = action.payload
            return state
        },
        setWeeksStatistics: (state, action) => {
            state.weeks = action.payload
            return state
        },
        resetStatistics: (state, action) => {
            return {
                weekSelected: dayjs().week(),
                weeks: [],
            }
        },
    },
})
//#endregion Slice

export default statisticsSlice.reducer
export const {
    setWeekSelectedStatistics,
    setWeeksStatistics,
    resetStatistics,
} = statisticsSlice.actions
