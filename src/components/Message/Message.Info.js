import React from 'react'
import { useDispatch } from 'react-redux'
import { TitleFour } from '..'
import middlewares from '../../middlewares'

const MessageInfo = (props) => {
    const dispatch = useDispatch()
    return (
        <div className="notification is-info">
            <button
                className="delete"
                onClick={() => {
                    dispatch(middlewares.MessageAction.clearMessage())
                }}
            ></button>
            <TitleFour title="Information" color="is-white" />
            {props.message}
        </div>
    )
}

export default MessageInfo
