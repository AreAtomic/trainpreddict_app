import React from 'react'
import { useDispatch } from 'react-redux'
import { TitleFour } from '..'
import middlewares from '../../middlewares'

const MessageSuccess = (props) => {
    const dispatch = useDispatch()
    return (
        <div className="notification is-success">
            <button
                className="delete"
                onClick={() => {
                    dispatch(middlewares.MessageAction.clearMessage())
                }}
            ></button>
            <TitleFour title="Succès" color="is-white" />
            {props.message}
        </div>
    )
}

export default MessageSuccess
