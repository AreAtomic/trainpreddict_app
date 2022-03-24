import { createSlice } from '@reduxjs/toolkit'

//#region Slice
const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: null,
        name: null,
        adress: null,
        isLogged: false,
        firstLogged: false,
    },
    reducers: {
        login: (state, action) => {
            return {
                email: action.payload.email,
                name: action.payload.name,
                adress: action.payload.adress,
                isLogged: true,
                firstLogged: false,
            }
        },
        signup: (state, action) => {
            return {
                email: action.payload.email,
                name: action.payload.name,
                adress: action.payload.adress,
                isLogged: true,
                firstLogged: true,
            }
        },
        endOnbarding: (state, action) => {
            return {
                ...state,
                firstLogged: false,
            }
        },
        logout: (state, action) => {
            return {
                email: null,
                name: null,
                adress: null,
                isLogged: false,
                firstLogged: false,
            }
        },
    },
})
//#endregion Slice

export default userSlice.reducer
const login = userSlice.actions.login
const signup = userSlice.actions.signup
const logout = userSlice.actions.logout
const endOnboarding = userSlice.actions.endOnbarding
export { login, signup, logout, endOnboarding }
