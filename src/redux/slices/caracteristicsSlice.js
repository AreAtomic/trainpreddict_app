import { createSlice } from '@reduxjs/toolkit'

//#region Slice
const caracteristicsSlice = createSlice({
    name: 'caracteristics',
    initialState: {
        pfs: 0,
        fcfs: 0,
        poids: 0,
        experience: 0,
        sommeil: 0,
        tempsRecupOptimal: 0,
        sse: 0,
        tempEntrainementSemaine: 0,
        nombresEntrainementSemaine: 0,
        musculation: false,
        ppg: false,
        etirement: false,
        style: '',
        pointFaible: '',
        jourRepos: [],
        exerciceFoncier: '',
        age: 0,
    },
    reducers: {
        set: (state, action) => {
            return action.payload
        },
        reset: (state, action) => {
            return {
                pfs: 0,
                fcfs: 0,
                poids: 0,
                experience: 0,
                sommeil: 0,
                tempsRecupOptimal: 0,
                sse: 0,
                tempEntrainementSemaine: 0,
                nombresEntrainementSemaine: 0,
                musculation: false,
                ppg: false,
                etirement: false,
                style: '',
                pointFaible: '',
                jourRepos: [],
                exerciceFoncier: '',
                age: 0,
            }
        },
    },
})
//#endregion Slice

export default caracteristicsSlice.reducer
const setCaracteristics = caracteristicsSlice.actions.set
const resetCaracteristics = caracteristicsSlice.actions.reset
export { setCaracteristics, resetCaracteristics }
