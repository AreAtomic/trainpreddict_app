import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs'
//#region Import components
import { SpinLoader } from '../../components/atoms'
import { ObjectifForm } from '../../components/organisms'
import { PanelObjectif, PanelObjectifModal } from '../../components/molecules'
import { HeadingTwo, Modal } from '../../components/atoms'
//#endregion
//#region Import API
import * as services from '../../services'
import * as middlewares from '../../middlewares'
//#endregion

const Objectif = ({ toast }) => {
    //#region State declaration
    // API states
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const objectifs = useSelector((state) => state.objectifs)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        services.getAllObjectifs(auth.userId, auth.token).then((response) => {
            if (response.status === 401) {
                dispatch(middlewares.logout())
            }
            dispatch(middlewares.setObjectifs(response.data))
            setLoading(false)
        })
    }, [])
    //modal ouverture
    const [openMO, setOpenMO] = useState(false)

    console.log(dayjs(objectifs[0]).isAfter(dayjs()))

    return (
        <div className="grid max-w-screen">
            {loading && (
                <div className="fixed top-10 w-full z-50 h-full max-w-screen">
                    <div className="absolute w-full h-full bg-primary-blue-500 opacity-40"></div>
                    <div className="mt-32">
                        <SpinLoader />
                    </div>
                </div>
            )}
            <div className="w-full lg:flex mb-6 max-w-screen">
                <HeadingTwo className="mb-4 ml-5">Objectifs</HeadingTwo>
                <div className="flex flex-col lg:flex-row">
                    {objectifs.slice(0, 3).map((objectif, index) => {
                        const titrePosition = [
                            'Prochain Objectif',
                            'Second Objectif',
                            'Dernier Objectif',
                        ]
                        return (
                            <PanelObjectifModal
                                id={objectif._id}
                                titre={objectif.titre}
                                date={dayjs(objectif.date).format('DD/MM/YYYY')}
                                duree={objectif.temps}
                                distance={objectif.distance}
                                resultat_vise={objectif.resultat_vise}
                                titrePosition={
                                    dayjs(objectifs[0]).isAfter(dayjs())
                                        ? 'Passé'
                                        : titrePosition[index]
                                }
                                denivele={objectif.denivele}
                                description={objectif.description}
                                type={objectif.type}
                                toast={toast}
                            />
                        )
                    })}
                </div>
                <ObjectifForm toast={toast} />
            </div>
        </div>
    )
}
export default Objectif
