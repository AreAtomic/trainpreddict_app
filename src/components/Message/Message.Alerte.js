import React from 'react'
import { useDispatch } from 'react-redux'
import { TitleFour } from '..'
import middlewares from '../../middlewares'

const MessageAlerte = (props) => {
    const dispatch = useDispatch()
    return (
        <div className="notification is-warning">
            <button
                className="delete"
                onClick={() => {
                    dispatch(middlewares.MessageAction.clearMessage())
                }}
            ></button>
            <TitleFour
                title={props.error ? 'Erreur' : 'Attention'}
                color="is-white"
            />
            {props.message}
        </div>
    )
}

export default MessageAlerte
