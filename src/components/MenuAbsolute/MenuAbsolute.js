import { useState } from 'react'
import { TableZone } from '../'
import arrow from '../../assets/eclair.svg'
const MenuAbsolute = (props) => {
    const [active, setactive] = useState(false)
    const [zone, setzone] = useState(false)

    return (
        <div className={`absolute-menu ${zone ? 'active' : ''}`}>
            <div
                className={`absolute-sous-menu ${
                    active && !zone ? 'active' : ''
                }`}
            >
                <div className="item" onClick={() => setzone(!zone)}>
                    Mes zones
                </div>
                <a href="/seances/televersement" className="item">
                    Téléversement
                </a>
                <a className="item not-link" href="/entrainements">Mes entrainements</a>
                <a className="item not-link" href="/statistiques">Mes statistiques</a>
            </div>
            <button
                className={`absolute-menu-button ${active ? 'active' : ''} ${
                    zone ? 'zone' : ''
                }`}
                onClick={() => {
                    setactive(!active)
                    setzone(false)
                }}
            >
                <img src={arrow} alt="Flèche rose" />
            </button>
            <div className={`tooltip-button ${zone ? 'zone' : ''}`}>
                Actions rapide
            </div>
            <div className={`absolute-zone ${zone ? '' : 'is-hidden'}`}>
                <TableZone />
            </div>
        </div>
    )
}

export default MenuAbsolute
