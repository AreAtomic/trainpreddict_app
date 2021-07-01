import React from "react"
import { TitleFour } from ".."

const MessageAlerte = (props) => {
    return <div className="notification is-warning">
        <button className="delete"></button>
        <TitleFour title={props.error ? "Erreur" : "Attention"} color="is-white" />
        {props.message}
    </div>
}

export default MessageAlerte