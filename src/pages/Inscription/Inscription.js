import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { LocationAction, AuthAction } from '../../middlewares/actions'

//Images
import logo from '../../assets/logo_rond_rose.svg'
import './Inscription.css'

// components
import { TitleThree, Input, ButtonSecondaryMedium } from '../../components'

const Inscription = (props) => {
    const dispatch = useDispatch()

    /* Value */
    const [credentials, setcredentials] = useState({
        nom: '',
        prenom: '',
        email: '',
        mot_de_passe: '',
        mot_de_passe2: '',
    })

    /* Verif */
    const [errors, seterrors] = useState({
        nom: true,
        prenom: true,
        email: true,
        mot_de_passe: true,
        mot_de_passe2: true,
    })

    const checkEmail = (value) => {
        return !(
            value.indexOf('@') !== -1 &&
            value.indexOf('.') !== -1 &&
            value.indexOf('.') !== value.length
        )
    }

    const checkPassword = (value) => {
        return !(value.length > 11)
    }

    const checkString = (value) => {
        return !(value.length > 1)
    }

    const checkSecondPassword = (value) => {
        return !(value === credentials.mot_de_passe)
    }

    /* Redirection si connecté */
    if (props.user.isLogged) {
        LocationAction.setLocation('Accueil')
        return <Redirect to="/accueil" />
    }

    return (
        <div className="background formulaire">
            <div className="form">
                <img
                    src={logo}
                    alt="Logo TrainPreddict, application pour cycliste"
                    className="logo"
                />
                <TitleThree title="Inscription" />
                <div className="columns mb-2 is-mobile">
                    <Input
                        label="Nom"
                        placeholder="Alaphilippe"
                        type="text"
                        name="nom"
                        error={errors.nom}
                        value={credentials.nom}
                        onChange={(e) => {
                            setcredentials({
                                ...credentials,
                                nom: e.target.value,
                            })
                            seterrors({
                                ...errors,
                                nom: checkString(e.target.value),
                            })
                        }}
                    />
                    <Input
                        label="Prénom"
                        placeholder="Alaphilippe"
                        type="text"
                        name="prenom"
                        error={errors.prenom}
                        value={credentials.prenom}
                        onChange={(e) => {
                            setcredentials({
                                ...credentials,
                                prenom: e.target.value,
                            })
                            seterrors({
                                ...errors,
                                prenom: checkString(e.target.value),
                            })
                        }}
                    />
                </div>
                <Input
                    label="Email"
                    placeholder="alafpolak@trainpreddict.fr"
                    type="text"
                    name="email"
                    error={errors.email}
                    value={credentials.email}
                    onChange={(e) => {
                        setcredentials({
                            ...credentials,
                            email: e.target.value,
                        })
                        seterrors({
                            ...errors,
                            email: checkEmail(e.target.value),
                        })
                    }}
                />
                <Input
                    label="Mot de passe"
                    placeholder="Votre mot de passe"
                    type="password"
                    name="password"
                    error={errors.mot_de_passe}
                    value={credentials.mot_de_passe}
                    onChange={(e) => {
                        setcredentials({
                            ...credentials,
                            mot_de_passe: e.target.value,
                        })
                        seterrors({
                            ...errors,
                            mot_de_passe: checkPassword(e.target.value),
                        })
                    }}
                />
                {errors.mot_de_passe ? (
                    <p className="notification is-info">
                        Le mot de passe doit contenir 11 caractère minimum
                    </p>
                ) : (
                    ''
                )}
                <Input
                    label="Confirmation mot de passe"
                    placeholder="Votre mot de passe"
                    type="password"
                    name="password2"
                    error={errors.mot_de_passe2}
                    value={credentials.mot_de_passe2}
                    onChange={(e) => {
                        setcredentials({
                            ...credentials,
                            mot_de_passe2: e.target.value,
                        })
                        seterrors({
                            ...errors,
                            mot_de_passe2: checkSecondPassword(e.target.value),
                        })
                    }}
                />
                <ButtonSecondaryMedium
                    nom="Inscription"
                    onClick={() => {
                        if (
                            !checkEmail(credentials.email) &&
                            !checkPassword(credentials.mot_de_passe) &&
                            !checkSecondPassword(credentials.mot_de_passe2) &&
                            !checkString(credentials.nom) &&
                            !checkString(credentials.prenom)
                        ) {
                            dispatch(
                                AuthAction.register(
                                    credentials.nom,
                                    credentials.prenom,
                                    credentials.email,
                                    credentials.mot_de_passe,
                                    credentials.mot_de_passe2
                                )
                            )
                        } else {
                            console.log(errors)
                        }
                    }}
                />
                <div className="form-footer">
                    <p>
                        Déjà inscits ? <a href="/connexion">Connexion</a>{' '}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Inscription
