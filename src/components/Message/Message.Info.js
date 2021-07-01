import React from "react"
import { TitleFour } from ".."

const MessageInfo = (props) => {
    return <div className="notification is-info">
        <button className="delete"></button>
        <TitleFour title="Information" color="is-white" />
        {props.message}
    </div>
}

export default MessageInfo