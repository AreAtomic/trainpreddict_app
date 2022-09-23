//#region Import modules
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
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
import { useEffect } from 'react'
import { requestApi } from '../../api'
//#endregion

const ConfirmAccount = ({ toast }) => {
    const location = useLocation()
    const navigate = useNavigate()
    const [utilisateur, setUtilisateur] = useState()

    useEffect(() => {
        const id = location.pathname.split('/')[2]
        requestApi('get', `auth/${id}`, null, null).then((response) => {
            setUtilisateur(response.utilisateur)
        })
    }, [])

    const confirmAccount = () => {
        requestApi('get', `auth/confirm/${utilisateur._id}`, null, null).then(
            (response) => {
                if (response.message) {
                    toast.success(response.message)
                    setTimeout(() => {
                        navigate('/auth')
                    }, 5000)
                }
            }
        )
    }

    const cancelAccount = () => {
        requestApi('get', `auth/cancel/${utilisateur._id}`, null, null).then(
            (response) => {
                if (response.message) {
                    toast.success(response.message)
                    setTimeout(() => {
                        navigate('/auth')
                    }, 5000)
                }
            }
        )
    }
    return (
        <div className="text-center justify-center flex flex-col mt-10 mb-20 p-4">
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
                <HeadingThree className="text-center">
                    Validation de création de votre compte
                </HeadingThree>
                {utilisateur && (
                    <div className="mt-5 text-medium-contrast-500">
                        <p>
                            Vous venez de crer un compte avec les informations
                            suivantes:
                        </p>
                        <ul className="list-disc list-inside ml-3">
                            <li>{utilisateur.email}</li>
                            <li>
                                {utilisateur.prenom} {utilisateur.nom}
                            </li>
                        </ul>
                    </div>
                )}
                <div className="flex flex-col mt-6" text-center>
                    <ButtonPrimary
                        className="w-fit mx-auto"
                        onClick={() => {
                            confirmAccount()
                        }}
                    >
                        Valider
                    </ButtonPrimary>
                    <div
                        className="mx-auto"
                        onClick={() => {
                            cancelAccount()
                        }}
                    >
                        Annuler
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmAccount
