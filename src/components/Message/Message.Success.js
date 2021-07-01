import React from "react"
import { TitleFour } from ".."

const MessageSuccess = (props) => {
    return <div className="notification is-success">
        <button className="delete"></button>
        <TitleFour title="Succès" color="is-white" />
        {props.message}
    </div>
}

export default MessageSuccess