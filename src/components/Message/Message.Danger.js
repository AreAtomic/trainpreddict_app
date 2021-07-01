import React from "react"
import { TitleFour } from ".."

const MessageDanger = (props) => {
    return <div className="notification is-danger">
        <button className="delete"></button>
        <TitleFour title="Danger" color="is-white" />
        {props.message}
    </div>
}

export default MessageDanger