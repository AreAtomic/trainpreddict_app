import { createSlice } from '@reduxjs/toolkit'

//#region Slice
const parametreSlice = createSlice({
    name: 'parametre',
    initialState: {
        coureur: {
            courbes: false,
        },
        seance: {
            partage: true,
            own: false,
        },
    },
    reducers: {
        set: (state, action) => {
            return { ...state, ...action.payload }
        },
    },
})
//#endregion Slice

export default parametreSlice.reducer
const setParametres = parametreSlice.actions.set
export { setParametres }
