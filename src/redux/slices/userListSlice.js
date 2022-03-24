import { createSlice } from '@reduxjs/toolkit'

//#region Slice
const userListSlice = createSlice({
    name: 'userList',
    initialState: [],
    reducers: {
        setListUser: (state, action) => {
            return action.payload
        },
        addUser: (state, action) => {
            return state.push(...action.payload)
        },
        resetListUser: (state, action) => {
            return []
        },
    },
})
//#endregion Slice

export default userListSlice.reducer
const addUser = userListSlice.actions.addUser
const setListUser = userListSlice.actions.setListUser
const resetListUser = userListSlice.actions.resetListUser
export { addUser, resetListUser, setListUser }
