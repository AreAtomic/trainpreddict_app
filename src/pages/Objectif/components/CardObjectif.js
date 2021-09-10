import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ObjectifAction } from '../../../middlewares/actions'
import {
    Accordion,
    InputUnit,
    Textarea,
    Card,
    TitleSix,
    Input,
    Select,
    ButtonPrimarySmall,
    ButtonSecondarySmall,
    TitleFour,
} from '../../../components'
import remove from '../../../assets/remove.svg'
import podium from '../../../assets/podium.svg'
import editImg from '../../../assets/edit.svg'
import duree from '../../../assets/chrono.svg'
import deniv from '../../../assets/montagnes.svg'
import distance from '../../../assets/la-navigation.svg'
import dayjs from 'dayjs'

const CardObjectif = (props) => {
    const dispatch = useDispatch()
    const [edit, setedit] = useState(false)
    const [content, setcontent] = useState({
        type: props.objectif.type,
        resultat_vise: props.objectif.resultat_vise,
        description: props.objectif.description,
        realise: props.objectif.realise,
        date_debut: dayjs(props.objectif.date_debut).format('YYYY-MM-DD'),
        date_objectif: dayjs(props.objectif.date_objectif).format('YYYY-MM-DD'),
        titre: props.objectif.titre,
        distance: props.objectif.distance,
        denivele: props.objectif.denivele,
        temps: props.objectif.temps,
    })
    const [suppr, setsuppr] = useState(false)

    return (
        <div className="objectif">
            <Card>
                <div className="columns is-mobile img">
                    <img
                        src={remove}
                        alt="Bouton plus, TrainPreddict application pour cycliste objectif sur mesure"
                        onClick={() => {
                            setsuppr(true)
                        }}
                        className="btn"
                    />
                    {/* Confirmation supression */}
                    <div className={`modal ${suppr ? 'is-active' : ''}`}>
                        <div className="modal-background"></div>
                        <div
                            className="modal-close"
                            onClick={() => {
                                setsuppr(false)
                            }}
                        ></div>
                        <div className="modal-content">
                            <div className="notification is-danger">
                                <TitleFour title="Cette action n'est pas réversible" />
                                <p>
                                    Êtes-vous sur de vouloir supprimer cet
                                    objectif ?
                                </p>
                                <div className="buttons center mt-2">
                                    <div
                                        onClick={() => {
                                            dispatch(
                                                ObjectifAction.deleteObjetif(
                                                    props.objectif._id
                                                )
                                            )
                                            setsuppr(false)
                                        }}
                                    >
                                        <ButtonSecondarySmall nom="Supprimer" />
                                    </div>
                                    <ButtonPrimarySmall
                                        nom="Annuler"
                                        onClick={() => {
                                            setsuppr(false)
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        src={podium}
                        alt="Bouton plus, TrainPreddict application pour cycliste objectif sur mesure"
                    />
                    <img
                        src={editImg}
                        alt="Bouton plus, TrainPreddict application pour cycliste objectif sur mesure"
                        onClick={() => {
                            setedit(!edit)
                        }}
                        className="btn"
                    />
                </div>
                <TitleSix title={content.titre} color="is-light" />
                <Accordion title="Objectif">
                    {edit ? (
                        <div className="form">
                            <Select
                                label="Objectif visé"
                                options={[
                                    '',
                                    'Victoire',
                                    'Podium',
                                    'Top 5',
                                    'Top 10',
                                    'Top 30',
                                    'Top 50',
                                    'Top 100',
                                    'Top 200',
                                    'Plaisir',
                                    'Terminé',
                                ]}
                                value={content.resultat_vise}
                                error={!(content.resultat_vise !== '')}
                                onChange={(e) => {
                                    setcontent({
                                        ...content,
                                        resultat_vise: e.target.value,
                                    })
                                }}
                            />
                        </div>
                    ) : (
                        <div className="form">{content.resultat_vise}</div>
                    )}
                </Accordion>
                <Accordion title="Information sur l'objectif">
                    {edit ? (
                        <div className="form">
                            <Input
                                label="Nom de l'objectif"
                                type="text"
                                placeholder="Ariégeoise"
                                value={content.titre}
                                error={!(content.titre !== '')}
                                onChange={(e) => {
                                    setcontent({
                                        ...content,
                                        titre: e.target.value,
                                    })
                                }}
                            />
                            <Input
                                label="Début de l'entrainement"
                                type="date"
                                placeholder="20/12/2021"
                                value={content.date_debut}
                                error={!(content.date_debut !== '')}
                                onChange={(e) => {
                                    setcontent({
                                        ...content,
                                        date_debut: e.target.value,
                                    })
                                }}
                            />
                            <Input
                                label="Date de l'objectif"
                                type="date"
                                placeholder="20/12/2021"
                                value={content.date_objectif}
                                error={!(content.date_objectif !== '')}
                                onChange={(e) => {
                                    setcontent({
                                        ...content,
                                        date_objectif: e.target.value,
                                    })
                                }}
                            />
                            <Textarea
                                label="Description"
                                placeholder="Description de la course"
                                value={content.description}
                                error={!(content.description !== '')}
                                onChange={(e) => {
                                    setcontent({
                                        ...content,
                                        description: e.target.value,
                                    })
                                }}
                            />
                        </div>
                    ) : (
                        <div className="form">
                            <div className="columns is-mobile">
                                <p className="is-light">
                                    <strong>Nome de l'objectif</strong>
                                </p>
                                <p>{content.titre}</p>
                            </div>
                            <div className="columns is-mobile">
                                <p className="is-light">
                                    <strong>Début préparation</strong>
                                </p>
                                <p>
                                    {dayjs(content.date_debut).format(
                                        'DD/MM/YYYY'
                                    )}
                                </p>
                            </div>
                            <div className="columns is-mobile">
                                <p className="is-light">
                                    <strong>Date de l'objectif</strong>
                                </p>
                                <p>
                                    {dayjs(content.date_objectif).format(
                                        'DD/MM/YYYY'
                                    )}
                                </p>
                            </div>
                            <p className="is-light">
                                <strong>Description</strong>
                            </p>
                            <p className="ml-5">{content.description}</p>
                        </div>
                    )}
                </Accordion>
                <Accordion title="Prévision">
                    {edit ? (
                        <div className="form objectif">
                            <div className="columns is-mobile">
                                <img
                                    src={distance}
                                    alt="Distance A et B, course de cyclisme"
                                    width="45"
                                />
                                <InputUnit
                                    label="Distance"
                                    type="number"
                                    unit="km"
                                    placeholder="160"
                                    value={content.distance}
                                    error={!(content.distance !== '')}
                                    onChange={(e) => {
                                        setcontent({
                                            ...content,
                                            distance: e.target.value,
                                        })
                                    }}
                                />
                            </div>
                            <div className="columns is-mobile">
                                <img
                                    src={deniv}
                                    alt="Dénivéle montagne, course de cyclisme"
                                    width="45"
                                />
                                <InputUnit
                                    label="Dénivelé"
                                    type="number"
                                    unit="m"
                                    placeholder="160"
                                    value={content.denivele}
                                    error={!(content.denivele !== '')}
                                    onChange={(e) => {
                                        setcontent({
                                            ...content,
                                            denivele: e.target.value,
                                        })
                                    }}
                                />
                            </div>
                            <div className="columns is-mobile time">
                                <img
                                    src={duree}
                                    alt="Chronomètre, course de cyclisme"
                                    width="45"
                                />
                                <Input
                                    label="Temps"
                                    type="time"
                                    value={content.temps}
                                    error={!(content.temps !== '')}
                                    onChange={(e) => {
                                        setcontent({
                                            ...content,
                                            temps: e.target.value,
                                        })
                                    }}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="form objectif">
                            <div className="columns is-mobile">
                                <img
                                    src={distance}
                                    alt="Distance A et B, course de cyclisme"
                                    width="45"
                                />
                                <p className="is-light">
                                    <strong>Distance</strong>
                                </p>

                                <p>{content.distance} km</p>
                            </div>
                            <div className="columns is-mobile">
                                <img
                                    src={deniv}
                                    alt="Dénivéle montagne, course de cyclisme"
                                    width="45"
                                />
                                <p className="is-light">
                                    <strong>Dénivelé</strong>
                                </p>

                                <p>{content.denivele} m</p>
                            </div>
                            <div className="columns is-mobile">
                                <img
                                    src={duree}
                                    alt="Chronomètre, course de cyclisme"
                                    width="45"
                                />
                                <p className="is-light">
                                    <strong>Durée</strong>
                                </p>
                                <p>
                                    {content.temps.split(':')[0]}h
                                    {content.temps.split(':')[1]}
                                </p>
                            </div>
                        </div>
                    )}
                </Accordion>
                {edit ? (
                    <div className="objectif buttons mt-3">
                        <ButtonSecondarySmall nom="Annuler" />
                        <ButtonPrimarySmall
                            nom="Sauvegarder"
                            onClick={() => {
                                dispatch(
                                    ObjectifAction.putObjectif(
                                        props.objectif._id,
                                        dayjs(
                                            content.date_objectif
                                        ).toISOString(),
                                        content.resultat_vise,
                                        content.titre,
                                        content.description,
                                        content.distance,
                                        content.temps,
                                        content.denivele,
                                        content.type,
                                        dayjs(content.date_debut).toISOString()
                                    )
                                )
                            }}
                        />
                    </div>
                ) : (
                    ''
                )}
            </Card>
        </div>
    )
}

export default CardObjectif
