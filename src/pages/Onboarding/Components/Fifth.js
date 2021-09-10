import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    ButtonSecondaryMedium,
    ButtonPrimaryMedium,
    Select,
} from '../../../components'
import {
    MessageAction,
    OnBoardingAction,
    ProfilAction,
    DonneesAction,
} from '../../../middlewares/actions'

const Fifth = () => {
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
            if (!localStorage.getItem('profil')) {
                dispatch(ProfilAction.postProfil())
            }
            if (!localStorage.getItem('donnees')) {
                dispatch(DonneesAction.postDonnees())
            }
            dispatch(OnBoardingAction.setSlide(5))
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
        dispatch(OnBoardingAction.setSlide(3))
    }

    return (
        <div className="form">
            <Select
                label="Musculation durant l'hiver"
                options={['', 'Oui', 'Non']}
                value={content.musculation}
                error={!(content.musculation !== '')}
                onChange={(e) => {
                    setcontent({
                        ...content,
                        musculation: e.target.value,
                    })
                }}
            />
            <Select
                label="Préparation Physique Générale durant la saison"
                options={['', 'Oui', 'Non']}
                tooltip="Exercice de gainage et de musculation au poids du corps."
                value={content.ppg}
                error={!(content.ppg !== '')}
                onChange={(e) => {
                    setcontent({
                        ...content,
                        ppg: e.target.value,
                    })
                }}
            />
            <Select
                label="Etirement"
                options={['', 'Oui', 'Non']}
                value={content.etirement}
                error={!(content.etirement !== '')}
                onChange={(e) => {
                    setcontent({
                        ...content,
                        etirement: e.target.value,
                    })
                }}
            />
            <Select
                type="number"
                label="Style"
                unit="heures"
                options={[
                    '',
                    'Grimpeur',
                    'Sprinteur',
                    'Puncheur',
                    'Coureur de classique',
                    'Rouleur',
                    'Complet',
                ]}
                value={content.style}
                error={!(content.style !== '')}
                onChange={(e) => {
                    setcontent({
                        ...content,
                        style: e.target.value,
                    })
                }}
            />
            <Select
                type="number"
                label="Point faible"
                unit="heures"
                options={[
                    '',
                    'Montagne',
                    'Sprint',
                    'Explosivité',
                    'Accélération répétée',
                    'Plat',
                    'Machine de guerre',
                ]}
                value={content.point_faible}
                error={!(content.point_faible !== '')}
                onChange={(e) => {
                    setcontent({
                        ...content,
                        point_faible: e.target.value,
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

export default Fifth
