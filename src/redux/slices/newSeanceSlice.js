import { createSlice } from '@reduxjs/toolkit'

//#region Slice
const newSeanceSlice = createSlice({
    name: 'newSeance',
    initialState: {
        type: null,
        titre: null,
        duree: '00:00:00',
        estimationDistance: 0,
        estimationDeniv: 0,
        specifique: null,
        description: null,
        Z1: 0,
        Z2: 0,
        Z3: 0,
        Z4: 0,
        Z5: 0,
        Z6: 0,
        Z7: 0,
        puissanceMoyenne: 0,
        chargeEntrainementEstime: 0,
        intensiteTravail: 0,
        scoreStressEntrainement: 0,
    },
    reducers: {
        set: (state, action) => {
            return action.payload
        },
        reset: (state, action) => {
            return {
                type: null,
                titre: null,
                duree: '00:00:00',
                estimationDistance: 0,
                estimationDeniv: 0,
                specifique: null,
                description: null,
                Z1: 0,
                Z2: 0,
                Z3: 0,
                Z4: 0,
                Z5: 0,
                Z6: 0,
                Z7: 0,
                puissanceMoyenne: 0,
                chargeEntrainementEstime: 0,
                intensiteTravail: 0,
                scoreStressEntrainement: 0,
            }
        },
    },
})
//#endregion Slice

export default newSeanceSlice.reducer
const setNewSeance = newSeanceSlice.actions.set
const resetNewSeance = newSeanceSlice.actions.reset
export { setNewSeance, resetNewSeance }
