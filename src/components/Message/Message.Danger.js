import React from 'react'
import { useDispatch } from 'react-redux'
import { TitleFour } from '..'
import middlewares from '../../middlewares'

const MessageDanger = (props) => {
    const dispatch = useDispatch()
    return (
        <div className="notification is-danger">
            <button
                className="delete"
                onClick={() => {
                    dispatch(middlewares.MessageAction.clearMessage())
                }}
            ></button>
            <TitleFour title="Danger" color="is-white" />
            {props.message}
        </div>
    )
}

export default MessageDanger
