import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { requestApi } from '../../api'
import bcrypt from 'bcryptjs'

import logo from '../../assets/logo.svg'
import {
    ButtonPrimary,
    HeadingFive,
    HeadingFour,
    HeadingThree,
    Input,
} from '../../components/atoms'

const HASH = process.env.HASH

const PasswordLost = (props) => {
    const navigate = useNavigate()
    const [input, setInput] = useState('')
    const [email, setEmail] = useState()
    const [codeHash, setCodeHash] = useState()
    const [code, setCode] = useState()
    const [changePassword, setChangePassword] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const sendCode = () => {
        requestApi('get', `auth/${input}/reset/password`, null, null).then(
            (response) => {
                console.log(response)
                setCodeHash(response.user.code)
                setEmail(response.user.email)
                props.toast.success("Un code t'a été envoyé par mail")
            }
        )
    }

    const compareCode = async () => {
        const codeVerification = await bcrypt.compare(code, codeHash)
        if (codeVerification) {
            setChangePassword(true)
            console.log('Vérifié')
        } else {
            props.toast.error('Code invalide')
        }
    }

    const updatePassword = async () => {
        if (password.length < 10) {
            props.toast.error(
                'Le mot de passe doit faire 10 caractères minimum'
            )
        } else if (password !== passwordConfirm) {
            props.toast.error('Les mots de passe ne sont pas les mêmes')
        } else {
            const salt = await bcrypt.genSalt(HASH)
            const passwordHashed = await bcrypt.hash(password, salt)

            requestApi('put', `auth/${input}/reset/password`, null, {
                password: passwordHashed,
            })
                .then((response) => {
                    console.log(response)
                    if (response.user) {
                        props.toast.success(
                            'Tu peux te connecter ton nouveau mot de passe'
                        )
                    } else {
                        props.toast.error(
                            'Une erreur est survenue, réessaye plus tard.'
                        )
                    }
                })
                .catch((error) => {
                    props.toast.error(
                        'Une erreur est survenue, réessaye plus tard.'
                    )
                })
        }
    }
    return (
        <div className="text-center justify-center flex flex-col mt-10 mb-20">
            <img
                src={logo}
                alt="TrainPreddict Logo"
                width={100}
                className="mx-auto cursor-pointer"
                onClick={() => navigate('/auth')}
            />
            <HeadingFour
                color="text-high-contrast-500 cursor-pointer"
                onClick={() => navigate('/auth')}
            >
                TRAINPREDDICT
            </HeadingFour>
            <HeadingFive
                color="text-medium-contrast-500 cursor-pointer"
                onClick={() => navigate('/auth')}
            >
                APPLICATIONS POUR CYCLISTES
            </HeadingFive>
            <div className="mx-auto mt-10 text-left grid justify-center">
                {email ? (
                    !changePassword ? (
                        <>
                            <HeadingThree>Code de récupération</HeadingThree>
                            <div className="mt-7"></div>
                            <Input
                                placeholder=""
                                label="Code"
                                value={code}
                                onChange={(e) => {
                                    setCode(e.target.value)
                                }}
                                type="number"
                                helper="Rentres le code reçu par email"
                            />
                            <ButtonPrimary
                                className="mt-7 mx-auto"
                                onClick={() => {
                                    if (code.length === 6) {
                                        compareCode()
                                    } else {
                                        props.toast.warning(
                                            'Rentres un code à 6 chiffres'
                                        )
                                    }
                                }}
                            >
                                Vérifier
                            </ButtonPrimary>
                            <div
                                onClick={() => {
                                    navigate('/auth')
                                }}
                                className="mt-1 mx-auto"
                            >
                                Annuler
                            </div>
                        </>
                    ) : (
                        <>
                            <HeadingThree>
                                Changement du mot de passe
                            </HeadingThree>
                            <div className="mt-7"></div>
                            <Input
                                placeholder=""
                                label="Mot de passe"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                                type="password"
                                helper="Rentres un mot de passe de 10 caractères"
                            />
                            <div className="mt-3"></div>
                            <Input
                                placeholder=""
                                label="Confirmation mot de passe"
                                value={passwordConfirm}
                                onChange={(e) => {
                                    setPasswordConfirm(e.target.value)
                                }}
                                type="password"
                                helper="Rentres un mot de passe de 10 caractères"
                            />
                            <ButtonPrimary
                                className="mt-7 mx-auto"
                                onClick={() => {
                                    updatePassword()
                                }}
                            >
                                Confirmer
                            </ButtonPrimary>
                            <div
                                onClick={() => {
                                    navigate('/auth')
                                }}
                                className="mt-1 mx-auto"
                            >
                                Annuler
                            </div>
                        </>
                    )
                ) : (
                    <>
                        <HeadingThree>
                            Récupération du mot de passe
                        </HeadingThree>
                        <div className="mt-7"></div>
                        <Input
                            placeholder="email@trainpreddict.fr"
                            label="Email"
                            value={input}
                            onChange={(e) => {
                                setInput(e.target.value)
                            }}
                            type="email"
                            helper="Rentres un email valide"
                        />
                        <ButtonPrimary
                            className="mt-7 mx-auto"
                            onClick={() => {
                                if (
                                    input.length > 4 &&
                                    input.indexOf('@') !== -1 &&
                                    input[input.length - 1] !== '.'
                                ) {
                                    sendCode()
                                } else {
                                    props.toast.warning(
                                        'Rentres un email valide'
                                    )
                                }
                            }}
                        >
                            Réinitialiser
                        </ButtonPrimary>
                        <div
                            onClick={() => {
                                navigate('/auth')
                            }}
                            className="mt-1 mx-auto"
                        >
                            Annuler
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default PasswordLost
