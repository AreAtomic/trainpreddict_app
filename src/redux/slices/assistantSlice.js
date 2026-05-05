import { createSlice } from '@reduxjs/toolkit'

//#region Slice
const assistantSlice = createSlice({
    name: 'assistant',
    initialState: {
        previousYear: [],
        year: [],
        nextYear: [],
    },
    reducers: {
        set: (state, action) => {
            return { ...state, ...action.payload }
        },
        reset: (state, action) => {
            return {
                previousYear: [],
                year: [],
                nextYear: [],
            }
        },
    },
})
//#endregion Slice

export default assistantSlice.reducer
const setAssistant = assistantSlice.actions.set
const resetAssistant = assistantSlice.actions.reset
export { setAssistant, resetAssistant }
