import dayjs from 'dayjs'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import * as services from '../../../services'
import * as middlewares from '../../../middlewares'
import {
    HeadingTwo,
    Input,
    Select,
    ButtonPrimary,
    ButtonSecondary,
    Modal,
} from '../../atoms'

const CoureurForm = (props) => {
    const auth = useSelector((state) => state.auth)
    const userList = useSelector((state) => state.userList)
    //modal new coureur
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [naissance, setNaissance] = useState('')
    const [telephone, setTelephone] = useState('')
    const [email, setEmail] = useState('')
    const [adresse, setAdresse] = useState('')
    const [select, setSelect] = useState('')

    return (
        <div className="absolute top-0 left-0">
            <Modal
                visible={props.value}
                onClose={() => {
                    props.close()
                }}
            >
                <HeadingTwo className="my-4">Nouveau coureur</HeadingTwo>
                <div className="bg-component-two-500 p-5 w-fit rounded-md">
                    <div className="flex m-5 ">
                        <Input
                            label="Nom"
                            placeholder="Nom"
                            value={nom}
                            onChange={(e) => {
                                setNom(e.target.value)
                            }}
                            type="text"
                            helper="Rentrez un nom valide"
                            margin="mx-4"
                        />
                        <Input
                            label="Prénom"
                            placeholder="Prénom"
                            value={prenom}
                            onChange={(e) => {
                                setPrenom(e.target.value)
                            }}
                            type="text"
                            helper="Rentrez un prenom valide"
                            margin="mx-4"
                        />
                        <Input
                            label="Date de naissance"
                            placeholder="DD/MM/YYYY"
                            value={naissance}
                            onChange={(e) => {
                                setNaissance(e.target.value)
                            }}
                            type="date"
                            helper="Rentrez un prenom valide"
                            margin="mx-4"
                        />
                    </div>
                    <div className="flex m-5">
                        <Input
                            label="Téléphone"
                            placeholder="Téléphone"
                            value={telephone}
                            onChange={(e) => {
                                setTelephone(e.target.value)
                            }}
                            type="tel"
                            helper="Rentrez un numéro de téléphone valide"
                            margin="mx-4"
                        />
                        <Input
                            label="Email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            type="mail"
                            helper="Rentrez un mail valide"
                            margin="mx-4"
                        />
                        <Input
                            label="Adresse"
                            placeholder="Adresse"
                            value={adresse}
                            onChange={(e) => {
                                setAdresse(e.target.value)
                            }}
                            type="text"
                            helper="Rentrez un nom valide"
                            margin="mx-4"
                        />
                    </div>
                    <div className="flex m-5">
                        <Select
                            label="Categorie"
                            placeholder="Sélectionner une categorie"
                            value={select}
                            onChange={(e) => {
                                setSelect(e.target.value)
                            }}
                            helper="Sélectionner une valeur"
                            options={[
                                'World tour',
                                'Continental',
                                '1ère FFC',
                                '2ème FFC',
                                '3ème FFC',
                                'FSGT',
                                'Pas de licence',
                            ]}
                            margin="mx-4"
                        />
                    </div>
                    <div className="mx-5">
                        <ButtonPrimary
                            className="mx-4 my-8"
                            onClick={() => {
                                services
                                    .createCoureur(
                                        auth.token,
                                        email,
                                        prenom,
                                        nom,
                                        dayjs(naissance).toISOString(),
                                        adresse,
                                        select,
                                        telephone
                                    )
                                    .then((response) => {
                                        if (response.error) {
                                            props.toast.error(response.error)
                                        } else {
                                            console.log(response)
                                            props.toast.success(response.msg)
                                            middlewares.setUserList([
                                                ...userList,
                                                response.data.utilisateur,
                                            ])
                                            setTimeout(
                                                services
                                                    .createCalendrier(
                                                        response.data
                                                            .utilisateur._id,
                                                        auth.token
                                                    )
                                                    .then((res) => {
                                                        console.log(res)
                                                    }),
                                                1000
                                            )
                                        }
                                    })
                                    .catch((error) => {
                                        console.log(error)
                                        props.toast.error(
                                            'Une erreur est survenue, veuillez réessayer plus tard'
                                        )
                                    })
                            }}
                        >
                            Enregistrer
                        </ButtonPrimary>
                        <ButtonSecondary
                            className="mx-4 my-8"
                            onClick={() => {
                                props.close()
                            }}
                        >
                            Annuler
                        </ButtonSecondary>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default CoureurForm
