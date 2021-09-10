import React from 'react'
import { ProfilAction } from '../../middlewares/actions'
import { useDispatch, useSelector } from 'react-redux'

const TableZone = (props) => {
    const dispatch = useDispatch()

    /* Récup du profil */
    const profil = useSelector((state) => state.profil.state)
    if (profil === undefined) {
        dispatch(ProfilAction.getProfil())
    }

    return (
        <div className="table-zone">
            <div className="table-zone-header">
                <div className="table-zone-item">Zones</div>
                <div className="table-zone-item one">Z1</div>
                <div className="table-zone-item two">Z2</div>
                <div className="table-zone-item three">Z3</div>
                <div className="table-zone-item four">Z4</div>
                <div className="table-zone-item five">Z5</div>
                <div className="table-zone-item six">Z6</div>
                <div className="table-zone-item seven">Z7</div>
            </div>
            <div className="table-zone-row">
                <div className="table-zone-item">
                    Puissance <br /> (en Watt)
                </div>
                <div className="table-zone-item one">
                    {profil !== undefined
                        ? `${parseInt(profil.pfs * 0.56)} <`
                        : '-'}
                </div>
                <div className="table-zone-item two">
                    {profil !== undefined
                        ? `${parseInt(profil.pfs * 0.56)}-${parseInt(
                              profil.pfs * 1.76
                          )}`
                        : '-'}
                </div>
                <div className="table-zone-item three">
                    {profil !== undefined
                        ? `${parseInt(profil.pfs * 0.76)}-${parseInt(
                              profil.pfs * 0.91
                          )}`
                        : '-'}
                </div>
                <div className="table-zone-item four">
                    {profil !== undefined
                        ? `${parseInt(profil.pfs * 0.91)}-${parseInt(
                              profil.pfs * 1.06
                          )}`
                        : '-'}
                </div>
                <div className="table-zone-item five">
                    {profil !== undefined
                        ? `${parseInt(profil.pfs * 1.06)}-${parseInt(
                              profil.pfs * 1.21
                          )}`
                        : '-'}
                </div>
                <div className="table-zone-item six">
                    {profil !== undefined
                        ? `${parseInt(profil.pfs * 1.21)}-${parseInt(
                              profil.pfs * 1.5
                          )}`
                        : '-'}
                </div>
                <div className="table-zone-item seven">
                    {profil !== undefined
                        ? `> ${parseInt(profil.pfs * 1.5)}`
                        : '-'}
                </div>
            </div>
            <div className="table-zone-row">
                <div className="table-zone-item">
                    Fréquence cardiaque <br />
                    (en BPM)
                </div>
                <div className="table-zone-item one">
                    {profil !== undefined
                        ? `${parseInt(profil.fcfs * 0.7)} <`
                        : '-'}
                </div>
                <div className="table-zone-item two">
                    {profil !== undefined
                        ? `${parseInt(profil.fcfs * 0.7)}-${parseInt(
                              profil.fcfs * 0.85
                          )}`
                        : '-'}
                </div>
                <div className="table-zone-item three">
                    {profil !== undefined
                        ? `${parseInt(profil.fcfs * 0.85)}-${parseInt(
                              profil.fcfs * 0.95
                          )}`
                        : '-'}
                </div>
                <div className="table-zone-item four">
                    {profil !== undefined
                        ? `${parseInt(profil.fcfs * 0.95)}-${parseInt(
                              profil.fcfs * 1.05
                          )}`
                        : '-'}
                </div>
                <div className="table-zone-item five">
                    {profil !== undefined
                        ? `> ${parseInt(profil.fcfs * 1.05)}`
                        : '-'}
                </div>
                <div className="table-zone-item six">-</div>
                <div className="table-zone-item seven">-</div>
            </div>
        </div>
    )
}

export default TableZone
