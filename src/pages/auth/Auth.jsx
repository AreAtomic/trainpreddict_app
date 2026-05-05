//#region Import modules
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
//#endregion
//#region Import Components
import logo from '../../assets/logo.svg'
import {
    ButtonPrimary,
    ButtonSecondary,
    HeadingFive,
    HeadingFour,
    HeadingThree,
    Input,
    Select,
} from '../../components/atoms'
//#endregion
//#region Import API Methods
import * as services from '../../services'
import * as middlewares from '../../middlewares'
//#endregion

const Auth = ({ toast }) => {
    //#region States declaration
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //Register states
    const [isregister, setRegister] = useState(false)
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [type, setType] = useState('')
    //#endregion

    //#region Functions declaration
    const connect = () => {
        services.authenticate(email, password).then((response) => {
            if (response.data) {
                dispatch(
                    middlewares.login(
                        response.data.id,
                        response.data.token,
                        email,
                        response.data.nom,
                        response.data.structure
                    )
                ).then(navigate('/dashboard'))
            }
            if (response.error) {
                toast.warning(response.error)
            }
        })
    }
    const inscription = () => {
        const validForm = () => {
            if (password.length < 10) {
                toast.warning(
                    'Le mot de passe doit être de 10 caractères minimum'
                )
                return false
            }
            if (password !== passwordConfirm) {
                toast.warning('Les mot de passe ne sont pas identiques')
                return false
            }
            if (!email) {
                toast.warning("L'email est requis")
                return false
            }
            if (!lastName) {
                toast.warning('Le nom est requis')
                return false
            }
            if (!firstName) {
                toast.warning('Le prénom est requis')
                return false
            }
            return true
        }
        if (validForm()) {
            services
                .register(email, firstName, lastName, password, passwordConfirm)
                .then((response) => {
                    if (response.message) {
                        toast.success(response.message, { autoClose: false })
                    }
                    if (response.error) {
                        toast.warning(response.error)
                    }
                })
        }
    }
    //#endregion

    return (
        <div className="text-center justify-center flex flex-col mt-10 mb-20">
            <img
                src={logo}
                alt="TrainPreddict Logo"
                width={100}
                className="mx-auto"
            />
            <HeadingFour color="text-high-contrast-500">
                TRAINPREDDICT
            </HeadingFour>
            <HeadingFive color="text-medium-contrast-500">
                APPLICATIONS POUR CYCLISTES
            </HeadingFive>
            <div className="mx-auto mt-10 text-left">
                {!isregister ? (
                    <HeadingThree>Connexion</HeadingThree>
                ) : (
                    <HeadingThree>Inscription</HeadingThree>
                )}
                <div className="mt-5"></div>
                <Input
                    placeholder="email@example.fr"
                    label="Email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    type="email"
                    helper="Rentrez un email valide"
                />
                <div className="mt-3"></div>
                {!isregister ? (
                    <div className="grid">
                        <Input
                            placeholder="Mot de passe de 10 caractère minimum"
                            label="Mot de passe"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            type="password"
                            helper="Rentrez un mot de passe de 10 caractère minimum"
                            minlength={10}
                            onKeyPress={(e) => {
                                if (e.charCode === 13) connect()
                            }}
                        />
                        <div
                            className="cursor-pointer"
                            onClick={() => navigate('/password-lost')}
                        >
                            Mot de passe oublié ?
                        </div>
                    </div>
                ) : (
                    <>
                        <Input
                            placeholder="Mot de passe de 10 caractère minimum"
                            label="Mot de passe"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            type="password"
                            helper="Rentrez un mot de passe de 10 caractère minimum"
                            minlength={10}
                        />
                        <div className="mt-3"></div>
                        <Input
                            placeholder="Mot de passe de 10 caractère minimum"
                            label="Confirmation du mot de passe"
                            value={passwordConfirm}
                            onChange={(e) => {
                                setPasswordConfirm(e.target.value)
                            }}
                            type="password"
                            helper="Rentrez un mot de passe de 10 caractère minimum"
                            minlength={10}
                        />
                        <div className="mt-3"></div>
                        <Input
                            placeholder="Julian"
                            label="Prénom"
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value)
                            }}
                            type="text"
                            helper="Rentrez votre prénom"
                            required
                        />
                        <div className="mt-3"></div>
                        <Input
                            placeholder="Alaphilippe"
                            label="Nom"
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value)
                            }}
                            type="text"
                            helper="Rentrez votre prnoménom"
                            required
                        />
                        <div className="mt-3"></div>
                    </>
                )}
                <div className="grid gap-1 items-center mt-8">
                    {!isregister ? (
                        <ButtonPrimary
                            onClick={() => {
                                connect()
                            }}
                            className="mx-auto"
                        >
                            Connexion
                        </ButtonPrimary>
                    ) : (
                        <ButtonPrimary
                            onClick={() => {
                                inscription()
                            }}
                            className="mx-auto"
                        >
                            Inscription
                        </ButtonPrimary>
                    )}
                    <div
                        className="text-low-contrast-500 mx-auto cursor-pointer"
                        onClick={() => setRegister(!isregister)}
                    >
                        {!isregister ? "S'inscrire" : 'Se connecter'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth
