import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input, Select, ButtonPrimaryMedium } from '../../../components'
import { MessageAction, OnBoardingAction } from '../../../middlewares/actions'

const First = () => {
    const dispatch = useDispatch()
    /* Values */
    const onboarding = useSelector((state) => state.onboarding.state)
    const [content, setcontent] = useState(onboarding)

    /* Save state */
    const handleClick = () => {
        if (
            content.naissance.split('-')[0] < 2008 &&
            content.adresse.rue.length > 2 &&
            content.adresse.zip.length === 5 &&
            content.adresse.ville.length > 2 &&
            content.telephone.length === 10 &&
            content.decouverte !== ''
        ) {
            dispatch(OnBoardingAction.setOnBoarding(content))
            dispatch(OnBoardingAction.setSlide(1))
        } else {
            dispatch(
                MessageAction.setMessage({
                    type: 'warning',
                    message: 'Des champs ne sont pas valides',
                })
            )
        }
    }

    return (
        <div className="form">
            <Input
                type="date"
                nom="naissance"
                label="Date de naissance"
                placeholder=""
                value={content.naissance}
                error={!(content.naissance.split('-')[0] < 2008)}
                onChange={(e) => {
                    setcontent({
                        ...content,
                        naissance: e.target.value,
                    })
                }}
            />
            <Input
                type="text"
                name="rue"
                label="Adresse"
                placeholder="8 rue de l'UCI"
                value={content.adresse.rue}
                error={!(content.adresse.rue.length > 2)}
                onChange={(e) => {
                    setcontent({
                        ...content,
                        adresse: {
                            ...content.adresse,
                            [e.target.name]: e.target.value,
                        },
                    })
                }}
            />
            <div className="columns is-mobile">
                <Input
                    type="text"
                    name="zip"
                    label="Code postal"
                    placeholder="75000"
                    value={content.adresse.zip}
                    error={!(content.adresse.zip.length === 5)}
                    onChange={(e) => {
                        setcontent({
                            ...content,
                            adresse: {
                                ...content.adresse,
                                [e.target.name]: e.target.value,
                            },
                        })
                    }}
                />
                <Input
                    type="text"
                    name="ville"
                    label="Ville"
                    placeholder="Paris"
                    value={content.adresse.ville}
                    error={!(content.adresse.ville.length > 2)}
                    onChange={(e) => {
                        setcontent({
                            ...content,
                            adresse: {
                                ...content.adresse,
                                [e.target.name]: e.target.value,
                            },
                        })
                    }}
                />
            </div>
            <Input
                type="phone"
                name="telephone"
                label="Téléphone"
                placeholder="06123456789"
                value={content.telephone}
                error={!(content.telephone.length === 10)}
                onChange={(e) => {
                    setcontent({ ...content, [e.target.name]: e.target.value })
                }}
            />
            <Select
                type="text"
                name="decouverte"
                label="Comment nous as-tu connus?"
                options={[
                    '',
                    'Réseaux sociaux',
                    'Bouticycle Delprat',
                    'Bouche à oreille',
                    'Presse',
                    'Autres',
                ]}
                value={content.decouverte}
                error={!(content.decouverte !== '')}
                onChange={(e) => {
                    setcontent({ ...content, decouverte: e.target.value })
                }}
            />
            <ButtonPrimaryMedium
                nom="Suivant"
                id="suivant"
                onClick={handleClick}
            />
        </div>
    )
}

export default First
