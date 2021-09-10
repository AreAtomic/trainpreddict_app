import React from 'react'
import { LogoContextBar } from '..'
import cup from '../../assets/cup.svg'
import calendar from '../../assets/calendar.svg'
import bicycle from '../../assets/bicycle.svg'
import curve from '../../assets/curve.svg'

const ContextBar = (props) => {
    return <div className="tabs is-toggle is-fullwidth bottom">
        <ul>
            <li className={props.location === "objectif" ? "is-active" : ""}>
                <a href="/objectif">
                    <LogoContextBar src={cup} alt="Logo de coupe TrainPreddict, entrainement pour atteindre ses objectifs" width={35} />
                    <p>Objectif</p>
                </a>
            </li>
            <li className={props.location === "plan" ? "is-active" : ""}>
                <a href="/plan">
                    <LogoContextBar src={calendar} alt="Logo de calendrier TrainPreddict, entrainement personnalisé pour cycliste" width={35} />
                    <p>Plan</p>
                </a>
            </li>
            <li className={props.location === "seances" ? "is-active" : ""}>
                <a href="/seances" className="seance">
                    <LogoContextBar src={bicycle} alt="Logo de vélo TrainPreddict, entrainement de haut niveau pour cycliste" width={45} />
                    <p>Séances</p>
                </a>
            </li>
            <li className={props.location === "courbes" ? "is-active" : ""}>
                <a href="/courbes" className="courbe">
                    <LogoContextBar src={curve} alt="Logo de courbes TrainPreddict, suivi des entrainements cycliste" width={40} />
                    <p>Courbes</p>
                </a>
            </li>
        </ul>
    </div >
}

export default ContextBar