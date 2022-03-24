import react from 'react'
import { useState } from 'react'
import { HeadingTwo, Input, ButtonPrimary, ButtonSecondary } from '../../components/atoms'

const Parametres = () => {
    const [valueNom, setValueNom] = useState('')
    const [valuePrenom, setValuePrenom] = useState('')
    const [valueEmail, setValueEmail] = useState('')
    const [valueMDP, setValueMDP] = useState('')
    const [disabled, setDisabled] = useState(true)
    return (
        <div className="mx-10">
            <HeadingTwo className="my-8 ">Parametres</HeadingTwo>
            <div className="m-10 bg-component-two-500 p-6 rounded-sm w-fit">
                <div className="flex">
                    <Input
                        label="Nom"
                        placeholder="Nom"
                        disabled={disabled}
                        value={valueNom}
                        onChange={(e) => {
                            setValueNom(e.target.value)
                        }}
                        type="text"
                        helper="Rentrez un nom valide"
                        margin="m-4"
                    />
                    <Input
                        label="Prénom"
                        placeholder="Prénom"
                        disabled={disabled}
                        value={valuePrenom}
                        onChange={(e) => {
                            setValuePrenom(e.target.value)
                        }}
                        type="text"
                        helper="Rentrez un prénom valide"
                        margin="m-4"
                    />
                </div>
                <div className="flex">
                    <div><Input
                        label="Email"
                        placeholder="Email"
                        disabled={disabled}
                        value={valueEmail}
                        onChange={(e) => {
                            setValueEmail(e.target.value)
                        }}
                        type="mail"
                        helper="Rentrez un email valide"
                        margin="m-4"
                    /></div>
                    {disabled ? (
                       <div></div>
                        
                    ) : (<div>
                        <Input
                            label="Ancien mot de passe"
                            placeholder="Mot de passe"
                            disabled={disabled}
                            value={valueMDP}
                            onChange={(e) => {
                                setValueMDP(e.target.value)
                            }}
                            type="password"
                            helper="Rentrez un email valide"
                            margin="m-4"
                        />
                        <Input
                            label="Nouveau mot de passe"
                            placeholder="Mot de passe"
                            disabled={disabled}
                            value={valueMDP}
                            onChange={(e) => {
                                setValueMDP(e.target.value)
                            }}
                            type="password"
                            helper="Rentrez un email valide"
                            margin="m-4"
                        />
                        <Input
                            label="Confirmation du nouveau mot de passe"
                            placeholder="Mot de passe"
                            disabled={disabled}
                            value={valueMDP}
                            onChange={(e) => {
                                setValueMDP(e.target.value)
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
                  ):(
                      <div>
                       <ButtonPrimary
                    className="mx-4 my-8"
                    onClick={() => {
                        setDisabled(false)
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
