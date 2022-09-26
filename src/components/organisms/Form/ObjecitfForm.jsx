import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import OnBoardingContext from '../../../contexts/onboardingContext'
import dayjs from 'dayjs'
import { useDispatch, useSelector } from 'react-redux'
import {
    HeadingFour,
    Input,
    InputUnit,
    Select,
    TextArea,
    ButtonPrimary,
    ButtonSecondary,
} from '../../atoms'
import * as middlewares from '../../../middlewares'
import * as services from '../../../services'

const ObjectifForm = (props) => {
    const onBoardingContext = useContext(OnBoardingContext)
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const newObjectif = useSelector((state) => state.newObjectif)
    const objectifs = useSelector((state) => state.objectifs)
    //#region modal 1
    const [titre, setTitre] = useState('')
    const [type, setType] = useState('')
    const [distance, setDistance] = useState(0)
    const [duree, setDuree] = useState('00:00')
    const [denivele, setDenivele] = useState(0)
    const [description, setDescription] = useState('')
    const [resultatVise, setResultatVise] = useState('')
    const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'))
    //#endregion
    useEffect(() => {
        setTitre(newObjectif.titre)
        setType(newObjectif.type)
        setDistance(newObjectif.distance)
        setDuree(newObjectif.temps)
        setDenivele(newObjectif.denivele)
        setDescription(newObjectif.description)
        setDate(newObjectif.date)
        setResultatVise(newObjectif.resultatVise)
    }, [newObjectif])

    return (
        <div className="bg-component-two-500 pt-1 w-11/12 mx-2">
            <HeadingFour className="m-4">Ajouter un objectif</HeadingFour>
            <div className="flex h-fit flex-col lg:flex-row">
                <Input
                    label="Titre objectif"
                    placeholder="Un objectif..."
                    defaultValue=""
                    type="text"
                    helper="Rentrez un email valide"
                    margin="mx-4"
                    value={titre}
                    onChange={(e) => {
                        setTitre(e.target.value)
                    }}
                />

                <Select
                    label="Type"
                    placeholder="Sélectionner une valeur"
                    value={type}
                    onChange={(e) => {
                        setType(e.target.value)
                    }}
                    helper="Sélectionneé une valeur"
                    options={[
                        'Critérium',
                        'Course par étape',
                        'Course en ligne',
                        'Contre la montre',
                        'Cyclosportive',
                        'Road trip',
                        'Distance',
                        'Montagne',
                    ]}
                    margin="mx-4 my-2"
                />
                <InputUnit
                    label="Distance"
                    placeholder="100"
                    value={distance}
                    onChange={(e) => {
                        setDistance(e.target.value)
                    }}
                    type="number"
                    min={1}
                    helper="Rentrez une distance valide"
                    unit="km"
                    margin="mx-4"
                />
            </div>
            <div className="flex h-fit my-5 flex-col lg:flex-row">
                <InputUnit
                    label="Dénivelé"
                    placeholder="100"
                    value={denivele}
                    onChange={(e) => {
                        setDenivele(e.target.value)
                    }}
                    type="number"
                    min={1}
                    helper="Rentrez un dénivelé valide"
                    unit="m"
                    margin="mx-4"
                />
                <Input
                    label="Temps estimé"
                    placeholder="temps .."
                    value={duree}
                    onChange={(e) => {
                        setDuree(e.target.value)
                    }}
                    type="time"
                    helper="Rentrez un email valide"
                    margin="mx-4 my-2"
                />

                <Select
                    label="Résultat"
                    placeholder="Sélectionner une valeur"
                    value={resultatVise}
                    onChange={(e) => {
                        setResultatVise(e.target.value)
                    }}
                    helper="Sélectionneé une valeur"
                    options={[
                        'Victoire',
                        'Podium',
                        'Top 10',
                        'Top 20',
                        'Top 30',
                        'Finisseur',
                    ]}
                    margin="mx-4 my-2"
                />
            </div>
            <div className="mx-4 flex-col lg:flex-row">
                <Input
                    label="Date"
                    placeholder="DD/MM/YYYY"
                    value={date}
                    onChange={(e) => {
                        setDate(e.target.value)
                    }}
                    type="date"
                    helper="Rentrez un email valide"
                    margin="ml-1 mr-4 mb-4"
                />
                <TextArea
                    label="Description "
                    placeholder="Description de l'objectif..."
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }}
                    width={495}
                    height={151}
                    type="text"
                    helper="Rentrez un email valide"
                    margin="4"
                />
            </div>
            <div className="flex flex-col lg:flex-row max-w-xs">
                <ButtonPrimary
                    className="m-4"
                    onClick={() => {
                        services
                            .createObjectif(
                                auth.userId,
                                type,
                                resultatVise,
                                titre,
                                description,
                                denivele,
                                distance,
                                duree,
                                date,
                                auth.token
                            )
                            .then((response) => {
                                console.log(response)
                                if (response.status === 401) {
                                    dispatch(middlewares.logout())
                                }
                                if (!onBoardingContext.complete) {
                                    onBoardingContext.handleSetStep(3)
                                }
                                services
                                    .getAllObjectifs(auth.userId, auth.token)
                                    .then((response) => {
                                        dispatch(
                                            middlewares.setObjectifs(
                                                response.data
                                            )
                                        )
                                    })
                                props.toast.success(response.message)
                            })
                    }}
                >
                    Ajouter l'objectif
                </ButtonPrimary>
                {onBoardingContext.complete && (
                    <ButtonSecondary
                        className="m-4"
                        onClick={() => {
                            dispatch(
                                middlewares.setNewObjectif({
                                    date: date,
                                    type: type,
                                    resultatVise: resultatVise,
                                    titre: titre,
                                    description: description,
                                    denivele: denivele,
                                    distance: distance,
                                    temps: duree,
                                    realise: false,
                                })
                            )
                        }}
                    >
                        Continuer plus tard
                    </ButtonSecondary>
                )}
                {objectifs.length !== 0 && (
                    <ButtonSecondary
                        className="m-4"
                        onClick={() => {
                            onBoardingContext.handleSetStep(3)
                        }}
                    >
                        Etape suivante
                    </ButtonSecondary>
                )}
            </div>
        </div>
    )
}

export default ObjectifForm
