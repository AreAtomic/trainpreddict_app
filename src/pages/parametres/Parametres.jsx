import React, { useEffect, useContext } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import {
    HeadingTwo,
    Input,
    ButtonPrimary,
    ButtonSecondary,
    HeadingFive,
    HeadingSix,
} from '../../components/atoms'
import { ProfilForm } from '../../components/organisms/Form'
import arrow from '../../assets/dropdown-arrow.svg'
import * as services from '../../services'
import OnBoardingContext from '../../contexts/onboardingContext'

const Parametres = ({ toast }) => {
    const onBoardingContext = useContext(OnBoardingContext)
    const nom = useSelector((state) => state.user.name)
    const prenom = useSelector((state) => state.user.name)
    const [email, setEmail] = useState(useSelector((state) => state.user.email))
    const caracteristics = useSelector((state) => state.caracteristics)
    const [previousMdp, setPreviousMdp] = useState('')
    const [newMdp, setNewMdp] = useState('')
    const [newMdpConfirm, setNewMdpConfirm] = useState('')
    const [disabled, setDisabled] = useState(true)
    const [step, setStep] = useState('select')

    useEffect(() => {
        if (onBoardingContext.step === 1) {
            if (onBoardingContext.innerStep === 'form') {
                setStep('sportif')
            }
        }
    }, [onBoardingContext])

    return (
        <div>
            {step === 'select' ? (
                <div className="mx-10 max-w-xs w-screen">
                    <HeadingFive className="opacity-70 mb-4">
                        Parametres
                    </HeadingFive>
                    <div
                        className="flex flex-row justify-between items-baseline"
                        onClick={() => {
                            setStep('generaux')
                        }}
                    >
                        <HeadingTwo>Généraux</HeadingTwo>
                        <img src={arrow} alt="Arrow" className="rotate-270" />
                    </div>
                    <div
                        className="mt-2 flex flex-row justify-between items-baseline"
                        onClick={() => {
                            setStep('sportif')
                        }}
                    >
                        <HeadingTwo>Sportif</HeadingTwo>
                        <img src={arrow} alt="Arrow" className="rotate-270" />
                    </div>
                </div>
            ) : step === 'generaux' ? (
                <div className="mx-4">
                    <div
                        className="mt-2 flex flex-row items-baseline mb-4"
                        onClick={() => {
                            setStep('select')
                        }}
                    >
                        <img
                            src={arrow}
                            alt="Arrow"
                            className="rotate-90"
                            width={10}
                        />
                        <HeadingSix className="ml-4">Retour</HeadingSix>
                    </div>
                    <div className="w-fit bg-component-two-500 rounded-sm w-fit">
                        <div className="flex flex-col">
                            <Input
                                label="Nom"
                                placeholder="Nom"
                                value={nom.split(' ')[0]}
                                type="text"
                                helper="Rentrez un nom valide"
                                margin="m-4"
                                disabled={true}
                            />
                            <Input
                                label="Prénom"
                                placeholder="Prénom"
                                value={prenom.split(' ')[1]}
                                type="text"
                                helper="Rentrez un prénom valide"
                                margin="m-4"
                                disabled={true}
                            />
                        </div>
                        <div className="flex flex-col">
                            <div>
                                <Input
                                    label="Email"
                                    placeholder="Email"
                                    disabled={disabled}
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                    type="mail"
                                    helper="Rentrez un email valide"
                                    margin="m-4"
                                />
                            </div>
                            {disabled ? (
                                <div></div>
                            ) : (
                                <div>
                                    <Input
                                        label="Ancien mot de passe"
                                        placeholder="Mot de passe"
                                        disabled={disabled}
                                        value={previousMdp}
                                        onChange={(e) => {
                                            setPreviousMdp(e.target.value)
                                        }}
                                        type="password"
                                        helper="Rentrez un email valide"
                                        margin="m-4"
                                    />
                                    <Input
                                        label="Nouveau mot de passe"
                                        placeholder="Mot de passe"
                                        disabled={disabled}
                                        value={newMdp}
                                        onChange={(e) => {
                                            setNewMdp(e.target.value)
                                        }}
                                        type="password"
                                        helper="Rentrez un email valide"
                                        margin="m-4"
                                    />
                                    <Input
                                        label="Confirmation du nouveau mot de passe"
                                        placeholder="Mot de passe"
                                        disabled={disabled}
                                        value={newMdpConfirm}
                                        onChange={(e) => {
                                            setNewMdpConfirm(e.target.value)
                                        }}
                                        type="password"
                                        helper="Rentrez un email valide"
                                        margin="m-4"
                                    />
                                </div>
                            )}
                        </div>
                        {disabled ? (
                            <ButtonPrimary
                                className="mx-4 my-8"
                                onClick={() => {
                                    setDisabled(false)
                                }}
                            >
                                Modifier les informations
                            </ButtonPrimary>
                        ) : (
                            <div>
                                <ButtonPrimary
                                    className="mx-4 my-8"
                                    onClick={() => {
                                        services
                                            .changePassword(
                                                email,
                                                previousMdp,
                                                newMdp,
                                                newMdpConfirm
                                            )
                                            .then((res) => {
                                                if (!res.error) {
                                                    toast.success(res.message)
                                                    setDisabled(true)
                                                } else {
                                                    toast.error(res.error)
                                                }
                                            })
                                    }}
                                >
                                    Enregistrer
                                </ButtonPrimary>
                                <ButtonSecondary
                                    className="mx-4 my-8"
                                    onClick={() => {
                                        setDisabled(true)
                                    }}
                                >
                                    Annuler
                                </ButtonSecondary>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div>
                    <div
                        className="mt-2 mx-4 flex flex-row items-baseline mb-4"
                        onClick={() => {
                            setStep('select')
                        }}
                    >
                        <img
                            src={arrow}
                            alt="Arrow"
                            className="rotate-90"
                            width={10}
                        />
                        <HeadingSix className="ml-4">Retour</HeadingSix>
                    </div>
                    <ProfilForm />
                </div>
            )}
        </div>
    )
}

export default Parametres
