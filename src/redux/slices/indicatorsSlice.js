import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs'

//#region Slice
const indicatorsSlice = createSlice({
    name: 'indicators',
    initialState: {
        date: dayjs().toISOString(),
        dates: [],
        selected: 'planned',
        form: {
            planned: [],
            done: [],
        },
        tiredness: {
            planned: [],
            done: [],
        },
    },
    reducers: {
        setIndicators: (state, action) => {
            state = action.payload
            return state
        },
        setDateIndicators: (state, action) => {
            state.date = action.payload
            return action.payload
        },
        setDatasIndicators: (state, action) => {
            state.dates = action.payload.dates
            state.form = action.payload.form
            state.tiredness = action.payload.tiredness
            state.selected = state.selected ? state.selected : 'planned'
            return state
        },
        setSelectedIndicators: (state, action) => {
            state.selected = action.payload
            return state
        },
        resetIndicators: (state, action) => {
            return {
                date: dayjs().toISOString(),
                dates: [],
                selected: 'planned',
                form: {
                    planned: [],
                    done: [],
                },
                tiredness: {
                    planned: [],
                    done: [],
                },
            }
        },
    },
})
//#endregion Slice

export default indicatorsSlice.reducer
export const {
    setIndicators,
    resetIndicators,
    setDatasIndicators,
    setDateIndicators,
    setSelectedIndicators,
} = indicatorsSlice.actions
