import {
    ButtonPrimarySmall,
    HeadingFive,
    HeadingFour,
} from '../../atoms'
import trophy from '../../../assets/trophy.svg'
import dayjs from 'dayjs'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as services from '../../../services'
import * as middlewares from '../../../middlewares'

const PanelObjectifModal = (props) => {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const [edit, setEdit] = useState(false)
    const [titre, setTitre] = useState(props.titre)
    const [date, setDate] = useState(props.date)
    const [duree, setDuree] = useState(props.duree)
    const [distance, setDistance] = useState(props.distance)
    const [resultat_vise, setResultatVise] = useState(props.resultat_vise)
    return (
        <div className="rounded-sm grid h-fit bg-component-two-500 lg:w-1/3 w-full m-4">
            <div className="flex justify-between ml-8 mt-3">
                <HeadingFour>{props.titrePosition}</HeadingFour>
                <div className="mr-4">
                    {!edit ? (
                        <>
                            <ButtonPrimarySmall
                                onClick={() => {
                                    setEdit(true)
                                }}
                            >
                                Modifier
                            </ButtonPrimarySmall>
                            <span
                                className="cursor-pointer"
                                onClick={() => {
                                    services
                                        .deleteObjectif(
                                            auth.userId,
                                            props.type,
                                            resultat_vise,
                                            titre,
                                            props.description,
                                            props.denivele,
                                            distance,
                                            duree,
                                            dayjs(date).format('DD-MM-YYYY'),
                                            auth.token
                                        )
                                        .then((response) => {
                                            if (response.status === 401) {
                                                dispatch(middlewares.logout())
                                            }
                                            props.toast.success(
                                                response.message
                                            )
                                            services
                                                .getAllObjectifs(
                                                    auth.userId,
                                                    auth.token
                                                )
                                                .then((response) => {
                                                    dispatch(
                                                        middlewares.setObjectifs(
                                                            response.data
                                                        )
                                                    )
                                                    setEdit(false)
                                                })
                                        })
                                }}
                            >
                                Supprimer
                            </span>
                        </>
                    ) : (
                        <>
                            <ButtonPrimarySmall
                                onClick={() => {
                                    services
                                        .editObjectif(
                                            auth.userId,
                                            props.type,
                                            resultat_vise,
                                            titre,
                                            props.description,
                                            props.denivele,
                                            distance,
                                            duree,
                                            date,
                                            auth.token
                                        )
                                        .then((response) => {
                                            if (response.status === 401) {
                                                dispatch(middlewares.logout())
                                            }
                                            props.toast.success(
                                                response.message
                                            )
                                            services
                                                .getAllObjectifs(
                                                    auth.userId,
                                                    auth.token
                                                )
                                                .then((response) => {
                                                    dispatch(
                                                        middlewares.setObjectifs(
                                                            response.data
                                                        )
                                                    )
                                                    setEdit(false)
                                                })
                                        })
                                }}
                            >
                                Enregistrer
                            </ButtonPrimarySmall>
                            <span
                                className="cursor-pointer"
                                onClick={() => {
                                    setEdit(false)
                                }}
                            >
                                Annuler
                            </span>
                        </>
                    )}
                </div>
            </div>
            <div className="flex justify-around my-4">
                <div className="mx-1 px-6 py-6 bg-component-two-700 rounded-md">
                    <img
                        src={trophy}
                        alt="rophée objectif, application pour cycliste TrainPreddict"
                    />
                </div>
                <div className="mx-1 grid w-4/6">
                    <div className="flex">
                        {!edit ? (
                            <HeadingFive>{props.titre}</HeadingFive>
                        ) : (
                            <input
                                className="bg-component-one-500"
                                type="text"
                                value={titre}
                                onChange={(e) => setTitre(e.target.value)}
                            />
                        )}
                    </div>
                    {!edit ? (
                        <p className="text-low-contrast-500 mt-1">
                            {props.date}
                        </p>
                    ) : (
                        <input
                            className="bg-component-one-500"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    )}
                    <div className="flex justify-between">
                        {!edit ? (
                            <p className="text-low-contrast-500 mt-1">
                                {props.duree}
                            </p>
                        ) : (
                            <input
                                className="bg-component-one-500 w-1/2"
                                type="time"
                                value={duree}
                                onChange={(e) => setDuree(e.target.value)}
                            />
                        )}
                        {!edit ? (
                            <p className="text-low-contrast-500 mt-1">
                                {props.distance}km
                            </p>
                        ) : (
                            <div className="flex w-fit ml-2">
                                <input
                                    className="bg-component-one-500 w-1/3"
                                    type="number"
                                    value={distance}
                                    onChange={(e) =>
                                        setDistance(e.target.value)
                                    }
                                />
                                km
                            </div>
                        )}
                        <p className="text-low-contrast-500 mt-1">
                            {props.resultat_vise}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PanelObjectifModal
