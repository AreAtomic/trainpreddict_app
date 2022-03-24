import { createSlice } from '@reduxjs/toolkit'

//#region Slice
const daySelectedSlice = createSlice({
    name: 'daySelected',
    initialState: {
        date: null,
        planned: [],
        done: [],
        comment: [],
        newComment: {},
    },
    reducers: {
        setDate: (state, action) => {
            return { ...state, date: action.payload }
        },
        setDatas: (state, action) => {
            return {
                ...state,
                planned: action.payload.planned,
                done: action.payload.done,
                comment: action.payload.comment,
            }
        },
        setNewComment: (state, action) => {
            return {
                ...state,
                newComment: action.payload,
            }
        },
        reset: (state, action) => {
            return {
                date: null,
                planned: [],
                done: [],
                comment: [],
                newComment: {},
            }
        },
    },
})
//#endregion Slice

export default daySelectedSlice.reducer
const setDateDaySelected = daySelectedSlice.actions.setDate
const setDatasDaySelected = daySelectedSlice.actions.setDatas
const setNewCommentDaySelected = daySelectedSlice.actions.setNewComment
const resetDaySelected = daySelectedSlice.actions.reset
export {
    setDateDaySelected,
    setDatasDaySelected,
    setNewCommentDaySelected,
    resetDaySelected,
}
