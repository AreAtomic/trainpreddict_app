import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs'

//#region Slice
const planningSlice = createSlice({
    name: 'planningList',
    initialState: {
        dayOne: dayjs().toISOString(),
        races: [],
        users: [],
    },
    reducers: {
        changeDate: (state, action) => {
            state.dayOne = action.payload
            return state
        },
        setUsers: (state, action) => {
            state.users = action.payload
            return state
        },
        setRaces: (state, action) => {
            state.races = action.payload
            return state
        },
        reset: (state, action) => {
            return {
                dayOne: dayjs().toISOString(),
                races: [],
                users: [],
            }
        },
    },
})
//#endregion Slice

export default planningSlice.reducer
const changeDatePlanning = planningSlice.actions.changeDate
const setUsersPlanning = planningSlice.actions.setUsers
const setRacesPlanning = planningSlice.actions.setRaces
const resetPlanning = planningSlice.actions.reset
export {
    changeDatePlanning,
    setUsersPlanning,
    setRacesPlanning,
    resetPlanning,
}
