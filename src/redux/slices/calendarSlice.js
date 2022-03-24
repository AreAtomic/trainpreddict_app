import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs'

//#region Slice
const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        dayOne: dayjs().toISOString(),
        weeksDisplayed: 8,
        data: [],
        firstWeekIndex: 0,
    },
    reducers: {
        changeDate: (state, action) => {
            state.dayOne = action.payload
            return state
        },
        changeView: (state, action) => {
            state.weeksDisplayed = action.payload
            return state
        },
        changeData: (state, action) => {
            state.data = action.payload
            return state
        },
        changeFirstWeekIndex: (state, action) => {
            state.firstWeekIndex = action.payload
            return state
        },
    },
})
//#endregion Slice

export default calendarSlice.reducer
const changeDateCalendar = calendarSlice.actions.changeDate
const changeViewCalendar = calendarSlice.actions.changeView
const changeDataCalendar = calendarSlice.actions.changeData
const changeFirstWeekIndexCalendar = calendarSlice.actions.changeFirstWeekIndex
export { changeDateCalendar, changeViewCalendar, changeDataCalendar, changeFirstWeekIndexCalendar }
