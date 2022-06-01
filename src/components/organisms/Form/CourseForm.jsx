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
    const [duree, setDuree] = useState('00:00')
    const [denivele, setDenivele] = useState(0)
    const [description, setDescription] = useState('')
    const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'))
    const [sse, setSse] = useState(200)
    //#endregion

    return (
        <div className="bg-component-two-500 m-4 pt-1">
            <div className="flex h-fit">
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
            <div className="flex h-fit my-5">
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
                    margin="ml-1 mr-4"
                />
            </div>
            <div className="mx-4">
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
                <Input
                    label="Score de stress estimé"
                    placeholder="200"
                    value={duree}
                    onChange={(e) => {
                        setSse(e.target.value)
                    }}
                    type="time"
                    helper="Rentrez un email valide"
                    margin="ml-1 mr-4"
                />
                <TextArea
                    label="Description"
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
    )
}

export default CourseForm
