import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    ButtonSecondaryMedium,
    InputUnit,
    Select,
    ButtonPrimaryMedium,
} from '../../../components'
import { MessageAction, OnBoardingAction, InfosupAction } from '../../../middlewares/actions'

const Second = () => {
    const dispatch = useDispatch()
    /* Values */
    const onboarding = useSelector((state) => state.onboarding.state)
    const [content, setcontent] = useState(onboarding)

    /* Save state */
    const handleClick = () => {
        if (
            content.categorie !== '' &&
            content.experience !== '' &&
            content.pfs !== '' &&
            content.fcfs !== ''
        ) {
            dispatch(OnBoardingAction.setOnBoarding(content))
            if (!localStorage.getItem('infosup')) {
                dispatch(InfosupAction.postInfosup())
            }
            dispatch(OnBoardingAction.setSlide(2))
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
        dispatch(OnBoardingAction.setSlide(0))
    }

    return (
        <div className="form">
            <Select
                label="Catégorie"
                placeholder=""
                value={content.categorie}
                options={[
                    '',
                    'World tour',
                    'Continental',
                    '1ère FFC',
                    '2ème FFC',
                    '3ème FFC',
                    'FSGT',
                    'Pas de licence',
                ]}
                error={!(content.categorie !== '')}
                onChange={(e) => {
                    setcontent({
                        ...content,
                        categorie: e.target.value,
                        slide: 1,
                    })
                }}
            />
            <InputUnit
                type="number"
                label="Expérience"
                placeholder="5"
                unit="ans"
                value={content.experience}
                error={!(content.experience !== '')}
                onChange={(e) => {
                    setcontent({
                        ...content,
                        experience: e.target.value,
                    })
                }}
            />
            <InputUnit
                type="number"
                label="Puissance fonctionnelle au seuil"
                tooltip={`C'est la puissance qui peut être tenue<br/>
                durant un effort maximal d'une heure.<br/>
                Pour la calculer il faut réaliser un <br/>
                test de 20 minutes à fond et prendre <br/>
                95% de la puissance moyenne sur<br/>
                20 minutes.`}
                placeholder="5"
                unit="Watts"
                value={content.pfs}
                error={!(content.pfs !== '')}
                onChange={(e) => {
                    setcontent({
                        ...content,
                        pfs: e.target.value,
                    })
                }}
            />
            <InputUnit
                type="number"
                label="Fréquence cardiaque fonctionnelle au seuil"
                tooltip={`C'est la fréquence cardiaque (en <br/>
                battement par minutes) qui peut être tenue<br/>
                durant un effort maximal d'une heure. <br/>
                Pour la calculer il faut réaliser un <br/>
                test de 20 minutes à fond et prendre <br/>
                95% de la fréquence cardiaque moyenne.`}
                placeholder="5"
                unit="BPM"
                value={content.fcfs}
                error={!(content.fcfs !== '')}
                onChange={(e) => {
                    setcontent({
                        ...content,
                        fcfs: e.target.value,
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

export default Second
