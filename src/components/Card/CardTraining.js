import {
    TitleOne,
    TitleFive,
    ButtonPrimarySmall,
    ButtonSecondarySmall,
    BarChart,
} from '..'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import { useState } from 'react'
import { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { PlanAction } from '../../middlewares/actions'
dayjs.locale('fr')

const CardTraining = (props) => {
    const dispatch = useDispatch()
    const entrainement = props.entrainement
    const [active, setactive] = useState(false)
    const [redirect, setredirect] = useState(false)

    if (redirect) {
        if (process.env.NODE_ENV === 'development') {
            window.location.assign(
                `http://${window.location.hostname}:${
                    window.location.port
                }/plan/seance/${dayjs(props.date).toISOString()}/${props.id}`
            )
        } else {
            window.location.assign(
                `https://${window.location.hostname}:${
                    window.location.port
                }/plan/seance/${dayjs(props.date).toISOString()}/${props.id}`
            )
        }
    }

    return typeof entrainement !== 'string' ? (
        <Fragment>
            <div
                className={`card training ${
                    props.recherche ? 'recherche' : ''
                }`}
            >
                <TitleFive
                    title={
                        props.recherche
                            ? entrainement.titre
                            : dayjs(props.date).format('dddd DD MMMM')
                    }
                    color="is-light"
                />
                <hr />
                <TitleFive
                    title={entrainement.type.join(', ')}
                    color="is-light"
                />
                <div className="graphique-container">
                    <BarChart
                        entrainement={entrainement}
                        width={props.recherche ? 170 : 220}
                        id={entrainement._id}
                    />
                </div>
                <div className="sse">
                    {entrainement.score_stress_entrainement}
                </div>
                {props.plan ? (
                    // Carte d'affichage de plan
                    <div className="buttons">
                        <div
                            onClick={() => {
                                setactive(true)
                            }}
                        >
                            <ButtonSecondarySmall nom="Agrandir" />
                        </div>
                        <div
                            onClick={() => {
                                dispatch(PlanAction.setDay(entrainement))
                                setredirect(true)
                            }}
                        >
                            <ButtonPrimarySmall nom="Voir plus" />
                        </div>
                    </div>
                ) : props.modification ? (
                    // Page de modification de séance
                    <div className="buttons">
                        <div onClick={() => setactive(true)}>
                            <ButtonSecondarySmall nom="Agrandir" />
                        </div>
                        <div
                            onClick={() => {
                                dispatch(
                                    PlanAction.putPlanSeance(
                                        props.planId,
                                        entrainement,
                                        props.date
                                    )
                                )
                                dispatch(PlanAction.setDay(entrainement))
                                setredirect(true)
                            }}
                        >
                            <ButtonPrimarySmall nom="Choisir" />
                        </div>
                    </div>
                ) : (
                    // Page de recherche de séance
                    <div className="buttons">
                        <div onClick={() => setactive(true)}>
                            <ButtonSecondarySmall nom="Agrandir" />
                        </div>
                    </div>
                )}
            </div>
            {/* Placé ici pour être affiché au-dessus de tous les éléments */}
            <div className={`modal ${active ? 'is-active' : ''}`}>
                <div className="modal-background"></div>
                <div
                    className="modal-close"
                    onClick={() => setactive(false)}
                ></div>
                <div className="modal-content">
                    <TitleOne title={entrainement.titre} />
                    <div className="graphique-container mx-auto">
                        <BarChart
                            entrainement={entrainement}
                            width={props.recherche ? 170 : 220}
                            id={entrainement._id}
                        />
                    </div>
                    <div className="description has-text-centered mt-2">
                        <li>
                            <ul>
                                Distance estimée :{' '}
                                {entrainement.estimation_distance} km
                            </ul>
                            <ul>
                                Durée : {entrainement.duree.split(':')[0]}h
                                {entrainement.duree.split(':')[1]}
                            </ul>
                            <ul>
                                Dénivelé estimé :{' '}
                                {entrainement.estimation_deniv} m
                            </ul>
                        </li>
                        <br/>
                        {entrainement.description}
                    </div>
                </div>
            </div>
        </Fragment>
    ) : (
        <Fragment>
            <div
                className={`card training ${
                    props.recherche ? 'recherche' : ''
                } string`}
            >
                <TitleFive
                    title={dayjs(props.date).format('dddd DD MMMM')}
                    color="is-light"
                />
                <div className="no-specific">
                    <p>{entrainement}</p>
                </div>
                {props.plan ? (
                    // Carte d'affichage de plan
                    <div className="buttons">
                        <div
                            onClick={() => {
                                setactive(true)
                            }}
                        >
                            <ButtonSecondarySmall nom="Agrandir" />
                        </div>
                        <div
                            onClick={() => {
                                dispatch(PlanAction.setDay(entrainement))
                                setredirect(true)
                            }}
                        >
                            <ButtonPrimarySmall nom="Voir plus" />
                        </div>
                    </div>
                ) : props.modification ? (
                    // Page de modification de séance
                    <div className="buttons">
                        <div onClick={() => setactive(true)}>
                            <ButtonSecondarySmall nom="Agrandir" />
                        </div>
                        <div
                            onClick={() => {
                                dispatch(
                                    PlanAction.putPlanSeance(
                                        props.planId,
                                        entrainement,
                                        props.date
                                    )
                                )
                                dispatch(PlanAction.setDay(entrainement))
                                setredirect(true)
                            }}
                        >
                            <ButtonPrimarySmall nom="Choisir" />
                        </div>
                    </div>
                ) : (
                    // Page de recherche de séance
                    <div className="buttons">
                        <div onClick={() => setactive(true)}>
                            <ButtonSecondarySmall nom="Agrandir" />
                        </div>
                    </div>
                )}
            </div>
            {/* Placé ici pour être affiché au-dessus de tous les éléments */}
            <div className={`modal ${active ? 'is-active' : ''}`}>
                <div className="modal-background"></div>
                <div
                    className="modal-close"
                    onClick={() => setactive(false)}
                ></div>
                <div className="modal-content">
                    <TitleOne title={`Jour de ${entrainement}`} />
                </div>
            </div>
        </Fragment>
    )
}

export default CardTraining
