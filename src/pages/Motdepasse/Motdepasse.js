import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ButtonPrimaryMedium, Input, TitleOne } from '../../components'
import { resetPassword } from '../../middlewares/actions/auth'

const Motdepasse = () => {
    const dispatch = useDispatch()
    const [email, setemail] = useState('')

    return (
        <div className="column">
            <TitleOne title="Mot de passe oublié" />
            <p className="has-text-centered">
                Indiquez votre adresse mail et un lien de récupération de votre
                mot de passe vous sera envoyé.
            </p>
            <div className="form">
                <Input
                    label="Email"
                    placeholder="alafpolak@trainpreddict.fr"
                    type="email"
                    error={!(email.length > 3 && email.indexOf('@') !== -1)}
                    className="mb-6"
                    value={email}
                    onChange={(e) => {
                        setemail(e.target.value)
                    }}
                />
                <ButtonPrimaryMedium
                    nom="Envoyer"
                    onClick={() => {
                        dispatch(resetPassword(email))
                    }}
                />
            </div>
        </div>
    )
}

export default Motdepasse
