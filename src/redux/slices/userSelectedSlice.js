import { createSlice } from '@reduxjs/toolkit'

//#region Slice
const userSelectedSlice = createSlice({
    name: 'userSelected',
    initialState: {
        name: null,
        id: null,
    },
    reducers: {
        setUser: (state, action) => {
            return {
                name: action.payload.name,
                id: action.payload.id,
            }
        },
        reset: (state, action) => {
            return {
                name: null,
                id: null,
            }
        },
    },
})
//#endregion Slice

export default userSelectedSlice.reducer
const setUserSelected = userSelectedSlice.actions.setUser
const resetUserSelected = userSelectedSlice.actions.reset
export { setUserSelected, resetUserSelected }
