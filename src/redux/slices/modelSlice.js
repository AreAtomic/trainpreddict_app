import { createSlice } from '@reduxjs/toolkit'

//#region Slice
const nameSlice = createSlice({
    name: 'name',
    initialState: {},
    reducers: {
        model: (state, action) => {
            return state
        },
    },
})
//#endregion Slice

export default nameSlice.reducer
