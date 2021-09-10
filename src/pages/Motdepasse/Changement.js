import { useState } from 'react'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import { ButtonPrimaryMedium, Input, TitleOne } from '../../components'
import { passwordLost } from '../../middlewares/actions/auth'
import { setMessage } from '../../middlewares/actions/message'

const Changement = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const [mot_de_passe, setmot_de_passe] = useState('')
    const [mot_de_passe2, setmot_de_passe2] = useState('')

    return (
        <div className="dolumn">
            <TitleOne title="Récupération mot de passe" />
            <p className="has-text-centered">
                Entrez un nouveau mot de passe et connectez vous à votre compte
                avec ce mot de passe.
            </p>
            <div className="form">
                <Input
                    label="Mot de passe"
                    placeholder="motd3pass3!"
                    type="password"
                    error={!(mot_de_passe.length > 10)}
                    className="mb-6"
                    value={mot_de_passe}
                    onChange={(e) => {
                        setmot_de_passe(e.target.value)
                    }}
                />
                <Input
                    label="Confirmation mot de passe"
                    placeholder="motd3pass3!"
                    type="password"
                    error={!(mot_de_passe2 === mot_de_passe)}
                    className="mb-6"
                    value={mot_de_passe2}
                    onChange={(e) => {
                        setmot_de_passe2(e.target.value)
                    }}
                />
                <ButtonPrimaryMedium
                    nom="Envoyer"
                    onClick={() => {
                        if (
                            mot_de_passe2 === mot_de_passe &&
                            mot_de_passe.length > 10
                        ) {
                            dispatch(
                                passwordLost(
                                    params.userId,
                                    mot_de_passe,
                                    mot_de_passe2
                                )
                            )
                        } else {
                            dispatch(
                                setMessage({
                                    type: 'warning',
                                    message:
                                        'Le mot de passe doit être de 12 caractère minimum et les deux mot de passe doivent être identiques.',
                                })
                            )
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default Changement
