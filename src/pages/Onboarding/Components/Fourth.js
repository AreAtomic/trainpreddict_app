import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    ButtonSecondaryMedium,
    InputUnit,
    ButtonPrimaryMedium,
    SelectMultiple,
    Select,
} from '../../../components'
import { MessageAction, OnBoardingAction } from '../../../middlewares/actions'

const Fourth = () => {
    const dispatch = useDispatch()
    /* Values */
    const onboarding = useSelector((state) => state.onboarding.state)
    const [content, setcontent] = useState(onboarding)

    /* Save state */
    const handleClick = () => {
        if (
            content.nombre_heure_semaine !== '' &&
            content.nombre_seance_semaine !== '' &&
            content.jours_repos !== '' &&
            content.foncier !== ''
        ) {
            dispatch(OnBoardingAction.setOnBoarding(content))
            dispatch(OnBoardingAction.setSlide(4))
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
        dispatch(OnBoardingAction.setOnBoarding(content))
        dispatch(OnBoardingAction.setSlide(2))
    }

    return (
        <div className="form">
            <InputUnit
                type="number"
                label="Nombres d'heures d'entrainement disponibles par semaine"
                placeholder="15"
                unit="heures"
                value={content.nombre_heure_semaine}
                error={!(content.nombre_heure_semaine !== '')}
                onChange={(e) => {
                    setcontent({
                        ...content,
                        nombre_heure_semaine: e.target.value,
                    })
                }}
            />
            <InputUnit
                type="number"
                label="Nombres de jours d'entrainement disponibles par semaine"
                placeholder="5"
                unit="jours"
                value={content.nombre_seance_semaine}
                error={!(content.nombre_seance_semaine !== '')}
                onChange={(e) => {
                    setcontent({
                        ...content,
                        nombre_seance_semaine: e.target.value,
                    })
                }}
            />
            <SelectMultiple
                type="number"
                label="Jours de repos souhaités"
                unit="heures"
                options={[
                    'Lundi',
                    'Mardi',
                    'Mercredi',
                    'Jeudi',
                    'Vendredi',
                    'Samedi',
                    'Dimanche',
                ]}
                value={content.jours_repos}
                error={!(content.jours_repos !== '')}
            />
            <Select
                type="number"
                label="Exercices souhaités durant le foncier"
                unit="heures"
                options={['', 'Force', 'Vélocité', 'Pignon fixe']}
                value={content.foncier}
                error={!(content.foncier !== '')}
                onChange={(e) => {
                    setcontent({
                        ...content,
                        foncier: e.target.value,
                    })
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

export default Fourth
