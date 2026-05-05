import { createSlice } from '@reduxjs/toolkit'

//#region Slice
const authSlice = createSlice({
    name: 'name',
    initialState: {
        userId: null,
        token: null,
        firstLogged: false,
    },
    reducers: {
        registerUserData: (state, action) => {
            return action.payload
        },
        unregisterUserData: (state, action) => {
            return {
                userId: null,
                token: null,
                firstLogged: false,
            }
        },
    },
})
//#endregion Slice

export default authSlice.reducer
const registerUserData = authSlice.actions.registerUserData
const unregisterUserData = authSlice.actions.unregisterUserData
export { registerUserData, unregisterUserData }
