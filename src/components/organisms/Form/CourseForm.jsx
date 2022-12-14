import { useEffect } from 'react'
import { useState } from 'react'
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

const CourseForm = (props) => {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const user = useSelector((state) => state.userSelected)

    //#region modal 1
    const [titre, setTitre] = useState('')
    const [type, setType] = useState('')
    const [distance, setDistance] = useState(0)
    const [duree, setDuree] = useState('HH:MM')
    const [denivele, setDenivele] = useState(0)
    const [description, setDescription] = useState('')
    const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'))
    const [sse, setSse] = useState(200)
    //#endregion

    useEffect(() => {
        const hours = duree.split(':')[0]
        const minutes = duree.split(':')[1]

        if (hours.length === 2 && minutes.length === 2)
            setSse(parseInt((parseInt(hours) * 60 + parseInt(minutes)) * 1.66))
    }, [duree])

    return (
        <div className="bg-component-two-500 p-1 mx-1 w-min-content">
            <div className="grid xl:grid-cols-3 md:grid-cols-2 h-fit justify-center">
                <Input
                    label="Titre objectif"
                    placeholder="Un objectif..."
                    defaultValue=""
                    type="text"
                    helper="Rentrez un email valide"
                    margin="mx-4 my-1"
                    value={titre}
                    onChange={(e) => {
                        setTitre(e.target.value)
                    }}
                    maxWidth="max-w-screen"
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
                    maxWidth="max-w-screen"
                    margin="mx-4 my-1"
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
                    maxWidth="max-w-screen"
                    margin="mx-4 my-1"
                />
            </div>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 h-fit my-5 justify-center">
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
                    maxWidth="max-w-screen"
                    margin="mx-4 my-1"
                />
                <Input
                    label="Temps estimé (hh:mm)"
                    placeholder="HH:MM"
                    value={duree}
                    onChange={(e) => {
                        setDuree(e.target.value)
                    }}
                    type="time"
                    helper="Rentrez un email valide"
                    maxWidth="max-w-screen"
                    margin="mx-4 my-1"
                />
            </div>
            <div className="mx-4 grid xs:justify-center sm:justify-center md:justify-start">
                <Input
                    label="Date"
                    placeholder="DD/MM/YYYY"
                    value={date}
                    onChange={(e) => {
                        setDate(e.target.value)
                    }}
                    type="date"
                    helper="Rentrez un email valide"
                    maxWidth="max-w-screen"
                    margin="my-1"
                />
                <Input
                    label="Score de stress estimé"
                    placeholder="200"
                    value={sse}
                    onChange={(e) => {
                        setSse(e.target.value)
                    }}
                    type="number"
                    helper="Rentrez un email valide"
                    margin="my-1"
                    maxWidth="max-w-screen"
                    disabled={true}
                    tooltip="La fatigue engendrée par la course sur le corps (Calculé automatiquement)"
                />
                <TextArea
                    label="Description"
                    placeholder="Description de l'objectif..."
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }}
                    height={151}
                    type="text"
                    helper="Rentrez un email valide"
                    maxWidth="max-w-screen"
                    margin="my-1"
                />
                <ButtonPrimary
                    className="m-4"
                    onClick={() => {
                        services
                            .putCourses(
                                {
                                    type: type,
                                    titre: titre,
                                    description: description,
                                    denivele: denivele,
                                    distance: distance,
                                    duree: duree,
                                    sse: sse,
                                    date: date,
                                },
                                {
                                    time: `${duree}:00`,
                                    distance: distance,
                                    sse: sse,
                                    denivele: denivele,
                                    nombreSeance: 1,
                                },
                                ['idquivachanger'],
                                true,
                                auth.token
                            )
                            .then((response) => {
                                if (response.status === 401) {
                                    dispatch(middlewares.logout())
                                }
                                props.toast.success(response.message)
                            })
                    }}
                >
                    Ajouter l'objectif
                </ButtonPrimary>
            </div>
        </div>
    )
}

export default CourseForm
