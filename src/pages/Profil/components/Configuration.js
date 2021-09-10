import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { UtilisateurServices } from '../../../middlewares/services'
import { MessageAction } from '../../../middlewares/actions'
import {
    Input,
    ButtonPrimarySmall,
    ButtonSecondarySmall,
} from '../../../components'

const Configuration = () => {
    const dispatch = useDispatch()
    const [credentials, setcredentials] = useState({
        last: '',
        password: '',
        password2: '',
    })
    return (
        <div className="form">
            <Input
                label="Ancien mot de passe"
                placeholder="Votre mot de passe actuel"
                type="password"
                name="password"
                error={!credentials.last.length > 11}
                value={credentials.last}
                onChange={(e) => {
                    setcredentials({
                        ...credentials,
                        last: e.target.value,
                    })
                }}
            />
            <Input
                label="Nouveau mot de passe"
                placeholder="Votre nouveau mot de passe"
                type="password"
                name="password"
                error={!credentials.password.length > 11}
                value={credentials.password}
                onChange={(e) => {
                    setcredentials({
                        ...credentials,
                        password: e.target.value,
                    })
                }}
            />
            <Input
                label="Confirmation du nouveau mot de passe"
                placeholder="Votre nouveau mot de passe (encore)"
                type="password"
                name="password2"
                error={!credentials.password2 === credentials.password}
                value={credentials.password2}
                onChange={(e) => {
                    setcredentials({
                        ...credentials,
                        password2: e.target.value,
                    })
                }}
            />
            <div className="columns is-mobile">
                <ButtonSecondarySmall
                    nom="Annuler"
                    id="annuer"
                    onClick={() => {
                        setcredentials({
                            last: '',
                            password: '',
                            password2: '',
                        })
                    }}
                />
                <ButtonPrimarySmall
                    nom="Sauvegarder"
                    id="sauvegarder"
                    onClick={() => {
                        if (
                            credentials.password.length > 11 &&
                            credentials.password === credentials.password2
                        ) {
                            UtilisateurServices.put_utilisateur(
                                credentials.last,
                                credentials.password,
                                credentials.password2
                            )
                                .then((response) => {
                                    if (response.status === 200) {
                                        dispatch(
                                            MessageAction.setMessage({
                                                type: 'success',
                                                message: response.data.msg,
                                            })
                                        )
                                    } else {
                                        dispatch(
                                            MessageAction.setMessage({
                                                type: 'warning',
                                                message: response.data.error,
                                            })
                                        )
                                    }
                                })
                                .catch((error) => {
                                    dispatch(
                                        MessageAction.setMessage({
                                            type: 'warning',
                                            message:
                                                "L'ancien mot de passe n'est pas bon",
                                        })
                                    )
                                })
                        } else {
                            console.log('err')
                            dispatch(
                                MessageAction.setMessage({
                                    type: 'warning',
                                    message:
                                        'Les nouveaux mot de passe ne sont pas les mêmes',
                                })
                            )
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default Configuration
