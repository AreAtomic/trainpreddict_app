import React from "react"

const Hexagone = (props) => {
    return <div className={`hexagone ${props.color !== undefined ? props.color : ''}`}>
        {props.children}
    </div>
}

export default Hexagone