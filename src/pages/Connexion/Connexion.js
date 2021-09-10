import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router'
import logo from '../../assets/logo_rond_rose.svg'
import { TitleThree, Input, ButtonPrimaryMedium } from '../../components'
import { AuthAction, LocationAction } from '../../middlewares/actions'

const Connexion = (props) => {
    const dispatch = useDispatch()

    /* Value */
    const [credentials, setcredentials] = useState({
        email: '',
        mot_de_passe: '',
    })

    /* Verif */
    const [errors, seterrors] = useState({
        email: true,
        mot_de_passe: true,
    })

    const checkEmail = () => {
        return !(
            credentials.email.indexOf('@') !== -1 &&
            credentials.email.indexOf('.') !== -1 &&
            credentials.email.indexOf('.') !== credentials.email.length
        )
    }

    /* Redirection si connecté */
    if (props.user.isLogged) {
        LocationAction.setLocation('Accueil')
        return <Redirect to="/accueil" />
    }

    const checkPassword = () => {
        return !(credentials.mot_de_passe.length > 11)
    }

    return (
        <div className="background formulaire">
            <div className="form">
                <img
                    src={logo}
                    alt="Logo TrainPreddict rose, application pour les cyclistes"
                />
                <TitleThree title="Connexion" />
                <div className="field connexion">
                    <Input
                        label="Email"
                        placeholder="alafpolak@trainpreddict.fr"
                        value={credentials.email}
                        type="email"
                        error={errors.email}
                        onChange={(e) => {
                            setcredentials({
                                ...credentials,
                                email: e.target.value,
                            })
                            seterrors({ ...errors, email: checkEmail() })
                        }}
                    />
                    <Input
                        label="Mot de passe"
                        placeholder="Mot de passe "
                        type="password"
                        error={errors.mot_de_passe}
                        className="mb-6"
                        value={credentials.mot_de_passe}
                        onChange={(e) => {
                            setcredentials({
                                ...credentials,
                                mot_de_passe: e.target.value,
                            })
                            seterrors({
                                ...errors,
                                mot_de_passe: checkPassword(),
                            })
                        }}
                    />
                </div>
                <ButtonPrimaryMedium
                    nom="Connexion"
                    onClick={() => {
                        dispatch(
                            AuthAction.login(
                                credentials.email,
                                credentials.mot_de_passe
                            )
                        )
                    }}
                />
                <div className="form-footer">
                    <p>
                        Pas encore inscrit ?{' '}
                        <a href="/inscription">S'inscrire</a>
                    </p>
                    <a href="/motdepasse">Mot de passe oublié ?</a>
                </div>
            </div>
        </div>
    )
}

export default Connexion
