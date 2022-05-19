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
    //#endregion

    return (
        <div className="text-center justify-center flex flex-col mb-20">
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
                <div className="grid grid-cols-2 gap-10 items-center mt-8">
                    {!isregister ? (
                        <ButtonPrimary
                            onClick={() => {
                                connect()
                            }}
                        >
                            Connexion
                        </ButtonPrimary>
                    ) : (
                        <ButtonSecondary
                            onClick={() => {
                                inscription()
                            }}
                        >
                            Inscription
                        </ButtonSecondary>
                    )}
                    <div
                        className="text-high-contrast-500 underline"
                        onClick={() => setRegister(!isregister)}
                    >
                        {!isregister ? 'Inscription' : 'Connexion'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth
