import { createSlice } from '@reduxjs/toolkit'

//#region Slice
const seancesSlice = createSlice({
    name: 'seances',
    initialState: [],
    reducers: {
        set: (state, action) => {
            return action.payload
        },
        reset: (state, action) => {
            return []
        },
    },
})
//#endregion Slice

export default seancesSlice.reducer
const setSeances = seancesSlice.actions.set
const resetSeances = seancesSlice.actions.reset
export { setSeances , resetSeances }
