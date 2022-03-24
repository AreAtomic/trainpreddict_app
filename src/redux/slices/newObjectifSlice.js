import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs'

//#region Slice
const newObjectifSlice = createSlice({
    name: 'newObjectif',
    initialState: {
        date: dayjs().add(90, 'day').toISOString(),
        type: null,
        resultatVise: null,
        titre: null,
        description: null,
        denivele: null,
        distance: null,
        temps: null,
        realise: null,
    },
    reducers: {
        set: (state, action) => {
            return action.payload
        },
        reset: (state, action) => {
            return {
                date: dayjs().add(90, 'day').toISOString(),
                type: null,
                resultatVise: null,
                titre: null,
                description: null,
                denivele: null,
                distance: null,
                temps: null,
                realise: null,
            }
        },
    },
})
//#endregion Slice

export default newObjectifSlice.reducer
const setNewObjectif = newObjectifSlice.actions.set
const resetNewObjectif = newObjectifSlice.actions.reset
export { setNewObjectif, resetNewObjectif }
