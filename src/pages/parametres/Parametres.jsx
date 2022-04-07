import react, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import {
    HeadingTwo,
    Input,
    ButtonPrimary,
    ButtonSecondary,
} from '../../components/atoms'
import * as services from '../../services'

const Parametres = ({ toast }) => {
    const nom = useSelector((state) => state.user.name)
    const prenom = useSelector((state) => state.user.name)
    const [email, setEmail] = useState(useSelector((state) => state.user.email))
    const [previousMdp, setPreviousMdp] = useState('')
    const [newMdp, setNewMdp] = useState('')
    const [newMdpConfirm, setNewMdpConfirm] = useState('')
    const [disabled, setDisabled] = useState(true)

    return (
        <div className="mx-10">
            <HeadingTwo className="my-8 ">Parametres</HeadingTwo>
            <div className="m-10 bg-component-two-500 p-6 rounded-sm w-fit">
                <div className="flex">
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
                <div className="flex">
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
    )
}

export default Parametres
