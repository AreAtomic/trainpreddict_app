import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    TitleFive,
    Input,
    InputUnit,
    Select,
    SelectMultiple,
    ButtonPrimaryMedium,
    ButtonSecondaryMedium,
} from '../../../components'
import {
    MessageAction,
    OnBoardingAction,
    ObjectifAction,
    PlanAction,
    CourbesAction,
    AuthAction,
    StatistiquesAction,
} from '../../../middlewares/actions'

const Objectif = () => {
    const dispatch = useDispatch()
    /* Value */
    const exist = useSelector((state) => state.objectif.state)
    console.log(exist)
    const [objectif, setobjectif] = useState(
        exist === undefined
            ? {
                  date_objectif: '',
                  date_debut: '',
                  type: '',
                  resultat_vise: '',
                  titre: '',
                  description: [],
                  distance: '',
                  temps: '',
                  denivele: '',
              }
            : exist[0]
    )

    /* Save state */
    const handleClick = () => {
        if (
            objectif.date_objectif !== '' &&
            objectif.date_debut !== '' &&
            objectif.type !== '' &&
            objectif.resultat_vise !== '' &&
            objectif.titre !== '' &&
            objectif.description.length !== 0 &&
            objectif.temps !== '' &&
            objectif.distance > 0 &&
            objectif.denivele > 0
        ) {
            dispatch(
                ObjectifAction.addObjectif(
                    objectif.date_objectif,
                    objectif.date_debut,
                    objectif.type,
                    objectif.resultat_vise,
                    objectif.titre,
                    objectif.description,
                    objectif.distance,
                    objectif.temps,
                    objectif.denivele
                )
            )
            setTimeout(function () {
                dispatch(StatistiquesAction.postStatistiques)
                dispatch(PlanAction.postPlan())
                    .then(() => {
                        dispatch(
                            CourbesAction.postCourbesPrevisionnelle()
                        ).then(() => {
                            dispatch(CourbesAction.postCourbesRealise()).then(
                                () => {
                                    localStorage.removeItem('objectif')
                                    let user = JSON.parse(
                                        localStorage.getItem('user')
                                    )
                                    user.firstLogged = false
                                    localStorage.setItem(
                                        'user',
                                        JSON.stringify(user)
                                    )
                                    dispatch(AuthAction.registerEnd())
                                }
                            )
                        })
                    })
                    .catch((err) => console.log(err))
            }, 5000)
        } else {
            dispatch(
                MessageAction.setMessage({
                    type: 'warning',
                    message: 'Des champs ne sont pas valides',
                })
            )
        }
    }

    const handleBack = () => {
        dispatch(OnBoardingAction.setSlide(4))
    }

    return (
        <div className="form objectif">
            <hr />
            <TitleFive title="Objectif" color="is-light" />
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
                value={objectif.resultat_vise}
                error={!(objectif.resultat_vise !== '')}
                onChange={(e) => {
                    setobjectif({ ...objectif, resultat_vise: e.target.value })
                }}
            />
            <Select
                label="Type d'objectif"
                name="type"
                options={[
                    '',
                    'Critérium',
                    'Course en ligne',
                    'Contre la montre',
                    'Course par étape',
                    'Cyclosportive',
                    'Road trip',
                    'Distance',
                ]}
                value={objectif.type}
                error={!(objectif.type !== '')}
                onChange={(e) => {
                    setobjectif({ ...objectif, type: e.target.value })
                }}
            />
            <hr />
            <TitleFive title="Informations sur l'objectif" color="is-light" />
            <Input
                label="Nom de l'objectif"
                type="text"
                placeholder="Tour de France"
                value={objectif.titre}
                error={!(objectif.titre !== '')}
                onChange={(e) => {
                    setobjectif({ ...objectif, titre: e.target.value })
                }}
            />
            <Input
                label="Date de l'objectif"
                type="date"
                value={objectif.date_objectif}
                error={!(objectif.date_objectif !== '')}
                onChange={(e) => {
                    setobjectif({ ...objectif, date_objectif: e.target.value })
                }}
            />
            {typeof objectif.description === 'string' ? (
                <div>
                    <p className="is-light">Description</p>
                    {objectif.description}
                </div>
            ) : (
                <SelectMultiple
                    label="Description"
                    name="type"
                    options={[
                        '',
                        'Course de côte',
                        'Montagne',
                        'Vallon',
                        'Plat',
                        'Casse pâtes',
                        'Court',
                        'Long',
                    ]}
                    value={objectif.description}
                    error={!(objectif.description.length !== 0)}
                />
            )}
            <hr />
            <TitleFive title="Prévisions" color="is-light" />
            <InputUnit
                label="Distance"
                placeholder="100"
                type="number"
                unit="km"
                value={objectif.distance}
                error={!(objectif.distance > 0)}
                onChange={(e) => {
                    setobjectif({ ...objectif, distance: e.target.value })
                }}
            />
            <InputUnit
                label="Dénivelé"
                placeholder="2000"
                type="number"
                unit="m"
                value={objectif.denivele}
                error={!(objectif.denivele > 0)}
                onChange={(e) => {
                    setobjectif({ ...objectif, denivele: e.target.value })
                }}
            />
            <Input
                label="Temps"
                type="time"
                value={objectif.temps}
                error={!(objectif.temps !== '')}
                onChange={(e) => {
                    setobjectif({ ...objectif, temps: e.target.value })
                }}
            />
            <Input
                label="Début de l'entrainement"
                type="date"
                value={objectif.date_debut}
                error={!(objectif.date_debut !== '')}
                onChange={(e) => {
                    setobjectif({ ...objectif, date_debut: e.target.value })
                }}
            />
            <div className="buttons">
                <ButtonSecondaryMedium
                    nom="Précédent"
                    id="precedent"
                    onClick={handleBack}
                />
                <ButtonPrimaryMedium
                    nom="Suivant"
                    id="suivant"
                    onClick={handleClick}
                />
            </div>
        </div>
    )
}

export default Objectif
