import { createSlice } from '@reduxjs/toolkit'

//#region Slice
const objectifsSlice = createSlice({
    name: 'objectifs',
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

export default objectifsSlice.reducer
const setObjectif = objectifsSlice.actions.set
const resetObjectif = objectifsSlice.actions.reset
export { setObjectif, resetObjectif }
