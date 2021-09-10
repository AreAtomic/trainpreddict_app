import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    ButtonSecondaryMedium,
    InputUnit,
    ButtonPrimaryMedium,
} from '../../../components'
import { MessageAction, OnBoardingAction } from '../../../middlewares/actions'

const Third = () => {
    const dispatch = useDispatch()
    /* Values */
    const onboarding = useSelector((state) => state.onboarding.state)
    const [content, setcontent] = useState(onboarding)

    /* Save state */
    const handleClick = () => {
        if (
            content.poids !== '' &&
            content.sommeil !== '' &&
            content.temps_recup_max !== ''
        ) {
            dispatch(OnBoardingAction.setOnBoarding(content))
            dispatch(OnBoardingAction.setSlide(3))
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
        dispatch(OnBoardingAction.setSlide(1))
    }

    return (
        <div className="form">
            <InputUnit
                type="number"
                label="Poids"
                placeholder="5"
                unit="kg"
                value={content.poids}
                error={!(content.poids !== '')}
                onChange={(e) => {
                    setcontent({
                        ...content,
                        poids: e.target.value,
                    })
                }}
            />
            <InputUnit
                type="number"
                label="Temps de sommeil habituel"
                placeholder="5"
                unit="heures"
                value={content.sommeil}
                error={!(content.sommeil !== '')}
                onChange={(e) => {
                    setcontent({
                        ...content,
                        sommeil: e.target.value,
                    })
                }}
            />
            <InputUnit
                type="number"
                label="Temps de récupération optimal"
                tooltip={`C'est le temmps nécessaire pour <br/>
                une récupération à 100% d'un effort<br/>
                tel qu'une course.`}
                placeholder="24"
                unit="heures"
                value={content.temps_recup_max}
                error={!(content.temps_recup_max !== '')}
                onChange={(e) => {
                    setcontent({
                        ...content,
                        temps_recup_max: e.target.value,
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

export default Third
