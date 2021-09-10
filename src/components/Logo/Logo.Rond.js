import React from 'react'
import logo from '../../assets/logo.svg'

const LogoRond = (props) => {
    return (
        <img
            src={logo}
            width={props.width}
            height={props.width}
            alt="Logo TrainPreddict, casque de cyclisme"
        />
    )
}

export default LogoRond
