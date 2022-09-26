import React, { useEffect, useState, useContext } from 'react'
import OnBoardingContext from '../../../contexts/onboardingContext'
import dayjs from 'dayjs'
import { useDispatch, useSelector } from 'react-redux'
import {
    HeadingTwo,
    InputUnit,
    Select,
    ButtonPrimary,
    MultipleSelect,
} from '../../atoms'
import * as middlewares from '../../../middlewares'
import * as services from '../../../services'
import { useNavigate } from 'react-router-dom'

const ProfilForm = (props) => {
    const onBoardingContext = useContext(OnBoardingContext)
    const navigate = useNavigate()
    //#region States
    //#region External states
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const user = useSelector((state) => state.userSelected)
    const caracteristics = useSelector((state) => state.caracteristics)
    //#endregion
    //#region Components states
    const [pfs, setPfs] = useState(caracteristics?.pfs ? caracteristics.pfs : 0)
    const [fcfs, setFcfs] = useState(
        caracteristics?.fcfs ? caracteristics.fcfs : 0
    )
    const [poids, setPoids] = useState(
        caracteristics?.poids ? caracteristics.poids : 0
    )
    const [experience, setExperience] = useState(
        caracteristics?.experience ? caracteristics.experience : 0
    )
    const [sommeil, setSommeil] = useState(
        caracteristics?.sommeil ? caracteristics.sommeil : 0
    )
    const [sse, setSse] = useState(caracteristics?.sse ? caracteristics.sse : 0)
    const [tempsEntrainement, setTempsEntrainement] = useState(
        caracteristics?.temps ? caracteristics.fcfs : 0
    )
    const [nombreEntrainement, setNombreEntrainement] = useState(
        caracteristics?.fcfs ? caracteristics.fcfs : 0
    )
    const [musculation, setMusculation] = useState(
        caracteristics?.musculation
            ? caracteristics.musculation
                ? 'Oui'
                : 'Non'
            : 'Non'
    )
    const [ppg, setPpg] = useState(
        caracteristics?.ppg ? (caracteristics.ppg ? 'Oui' : 'Non') : 'Non'
    )
    const [etirement, setEtirement] = useState(
        caracteristics?.etirement
            ? caracteristics.etirement
                ? 'Oui'
                : 'Non'
            : 'Non'
    )
    const [style, setStyle] = useState(
        caracteristics?.style ? caracteristics.style : ''
    )
    const [pointFaible, setPointFaible] = useState(
        caracteristics?.pointFaible ? caracteristics.pointFaible : ''
    )
    const [joursRepos, setJoursRepos] = useState(
        caracteristics?.jourRepos ? caracteristics.jourRepos : []
    )
    const [exerciceFoncier, setExerciceFoncier] = useState(
        caracteristics?.exerciceFoncier ? caracteristics.exerciceFoncier : ''
    )
    const [age, setAge] = useState(caracteristics?.age ? caracteristics.age : 0)
    const [tempsRecup, setTempsRecup] = useState(
        caracteristics?.tempsRecupOptimal ? caracteristics.tempsRecupOptimal : 0
    )
    //#endregion

    useEffect(() => {
        setPfs(caracteristics.pfs ? caracteristics.pfs : pfs)
        setFcfs(caracteristics.fcfs ? caracteristics.fcfs : fcfs)
        setPoids(caracteristics.poids ? caracteristics.poids : poids)
        setExperience(
            caracteristics.experience ? caracteristics.experience : experience
        )
        setSommeil(caracteristics.sommeil ? caracteristics.sommeil : sommeil)
        setSse(caracteristics.sse ? caracteristics.sse : sse)
        setTempsEntrainement(
            caracteristics.nombresEntrainementSemaine
                ? caracteristics.nombresEntrainementSemaine
                : nombreEntrainement
        )
        setNombreEntrainement(
            caracteristics.tempEntrainementSemaine
                ? caracteristics.tempEntrainementSemaine
                : tempsEntrainement
        )
        setMusculation(
            caracteristics.musculation
                ? caracteristics.musculation
                    ? 'Oui'
                    : 'Non'
                : musculation
        )
        setPpg(caracteristics.ppg ? (caracteristics.ppg ? 'Oui' : 'Non') : ppg)
        setEtirement(
            caracteristics.etirement
                ? caracteristics.etirement
                    ? 'Oui'
                    : 'Non'
                : etirement
        )
        setStyle(caracteristics.style ? caracteristics.style : style)
        setEtirement(
            caracteristics.pointFaible
                ? caracteristics.pointFaible
                : pointFaible
        )
        setJoursRepos(
            caracteristics.joursRepos ? caracteristics.joursRepos : joursRepos
        )
        setExerciceFoncier(
            caracteristics.exerciceFoncier
                ? caracteristics.exerciceFoncier
                : exerciceFoncier
        )
        setExerciceFoncier(
            caracteristics.age ? caracteristics.age : exerciceFoncier
        )
        setTempsRecup(
            caracteristics?.tempsRecupOptimal
                ? caracteristics.tempsRecupOptimal
                : tempsRecup
        )
    }, [caracteristics])
    //#endregion

    return (
        caracteristics && (
            <div>
                <div className="flex flex-col h-fit my-5 lg:flex-row">
                    <InputUnit
                        label="Puissance fonctionnelles au Seuil (FTP)"
                        placeholder="100"
                        value={pfs}
                        onChange={(e) => {
                            setPfs(e.target.value)
                        }}
                        type="number"
                        min={1}
                        helper="Rentrez une puissance supérieur à 10"
                        unit="W"
                        margin="mx-4"
                        required
                    />
                    <InputUnit
                        label="Fréquence Cardiaque"
                        placeholder="100"
                        value={fcfs}
                        onChange={(e) => {
                            setFcfs(e.target.value)
                        }}
                        type="number"
                        min={1}
                        helper="Rentrez une fréquence cardiaque inférieur à 220"
                        unit="BPM"
                        max={220}
                        margin="mx-4"
                        required
                    />
                    <InputUnit
                        label="Poids"
                        placeholder="100"
                        value={poids}
                        onChange={(e) => {
                            setPoids(e.target.value)
                        }}
                        type="number"
                        min={1}
                        helper="Rentrez un poids valide."
                        unit="kg"
                        margin="mx-4"
                        required
                    />
                </div>{' '}
                <div className="flex h-fit my-5 flex-col lg:flex-row">
                    <InputUnit
                        label="Expérience"
                        placeholder="100"
                        value={experience}
                        onChange={(e) => {
                            setExperience(e.target.value)
                        }}
                        type="number"
                        min={0}
                        helper="Rentrez une expérience valide"
                        unit="ans"
                        margin="mx-4"
                        required
                    />
                    <InputUnit
                        label="Sommeil"
                        placeholder="100"
                        value={sommeil}
                        onChange={(e) => {
                            setSommeil(e.target.value)
                        }}
                        type="number"
                        min={1}
                        helper="Rentrez un temps de sommeil valide"
                        unit="H"
                        margin="mx-4"
                        required
                        max={12}
                    />
                    <InputUnit
                        label="Age"
                        placeholder="21"
                        value={age}
                        onChange={(e) => {
                            setAge(e.target.value)
                        }}
                        type="number"
                        helper="Rentrez un age valide"
                        unit="ans"
                        margin="mx-4"
                        min={14}
                        required
                    />
                </div>{' '}
                <div className="flex h-fit my-5 flex-col lg:flex-row">
                    <InputUnit
                        label="Temps Entrainements Semaine"
                        placeholder="100"
                        value={tempsEntrainement}
                        onChange={(e) => {
                            setTempsEntrainement(e.target.value)
                        }}
                        type="number"
                        min={1}
                        helper="Rentrez un temps d'entrainement valide"
                        unit="H"
                        margin="mx-4"
                        required
                    />
                    <InputUnit
                        label="Nombres d'entraînements semaine"
                        placeholder="100"
                        value={nombreEntrainement}
                        onChange={(e) => {
                            setNombreEntrainement(e.target.value)
                        }}
                        type="number"
                        min={1}
                        helper="Rentrez un nombres d'entrainements valide"
                        unit="m"
                        margin="mx-4"
                        required
                    />
                    <InputUnit
                        label="SSE Semaine"
                        placeholder="100"
                        value={sse}
                        onChange={(e) => {
                            setSse(e.target.value)
                        }}
                        type="number"
                        min={1}
                        helper="Rentrez un Score de Stress valide"
                        unit=""
                        margin="mx-4"
                        required
                    />
                </div>{' '}
                <div className="flex h-fit my-5 flex-col lg:flex-row">
                    <Select
                        label="Musculation"
                        placeholder="Sélectionner une valeur"
                        value={musculation}
                        onChange={(e) => {
                            setMusculation(e.target.value)
                        }}
                        helper="Sélectionner une valeur"
                        options={['Oui', 'Non']}
                        margin="mx-4"
                        required
                    />
                    <Select
                        label="PPG"
                        placeholder="Sélectionner une valeur"
                        value={ppg}
                        onChange={(e) => {
                            setPpg(e.target.value)
                        }}
                        helper="Sélectionner une valeur"
                        options={['Oui', 'Non']}
                        margin="mx-4"
                    />
                    <Select
                        label="Etirements"
                        placeholder="Sélectionner une valeur"
                        value={etirement}
                        onChange={(e) => {
                            setEtirement(e.target.value)
                        }}
                        helper="Sélectionneé une valeur"
                        options={['Oui', 'Non']}
                        margin="mx-4"
                    />
                </div>{' '}
                <div className="flex h-fit my-5 flex-col lg:flex-row">
                    <Select
                        label="Style"
                        placeholder="Sélectionner une valeur"
                        value={style}
                        onChange={(e) => {
                            setStyle(e.target.value)
                        }}
                        helper="Sélectionner une valeur"
                        options={[
                            'Grimpeur',
                            'Sprinteur',
                            'Puncheur',
                            'Coureur de classique',
                            'Rouleur',
                            'Complet',
                        ]}
                        margin="mx-4"
                    />
                    <Select
                        label="Point faible"
                        placeholder="Sélectionner une valeur"
                        value={pointFaible}
                        onChange={(e) => {
                            setPointFaible(e.target.value)
                        }}
                        helper="Sélectionneé une valeur"
                        options={[
                            'Montagne',
                            'Sprint',
                            'Explosivité',
                            'Accélération répétée',
                            'Plat',
                            'Trop fort',
                        ]}
                        margin="mx-6"
                    />
                    <Select
                        label="Exercices durant l'hiver"
                        placeholder="Sélectionner une valeur"
                        value={exerciceFoncier}
                        onChange={(e) => {
                            setExerciceFoncier(e.target.value)
                        }}
                        helper="Sélectionneé une valeur"
                        options={[
                            'Force',
                            'Vélocité',
                            'Pignon fixe',
                            'Peu importe',
                        ]}
                    />
                </div>
                <div className="flex h-fit my-5 flex-col lg:flex-row">
                    <MultipleSelect
                        label="Jour de repos"
                        placeholder="Sélectionner une valeur"
                        value={joursRepos}
                        onChange={(e) => setJoursRepos(e)}
                        helper="Sélectionner une valeur"
                        options={[
                            'Lundi',
                            'Mardi',
                            'Mercredi',
                            'Jeudi',
                            'Vendredi',
                            'Samedi',
                            'Dimanche',
                        ]}
                        margin="mx-4"
                    />
                    <InputUnit
                        label="Temps récupération optimal"
                        placeholder="48"
                        value={tempsRecup}
                        onChange={(e) => {
                            setTempsRecup(e.target.value)
                        }}
                        type="number"
                        min={1}
                        helper="Rentrez un dénivelé valide"
                        unit="H"
                        margin="mx-5 mb-7"
                    />
                </div>
                <div className="m-4">
                    <ButtonPrimary
                        className="my-6"
                        onClick={() => {
                            services
                                .putUserProfil(
                                    auth.userId,
                                    auth.token,
                                    sse,
                                    experience,
                                    sommeil,
                                    tempsRecup,
                                    tempsEntrainement,
                                    nombreEntrainement,
                                    musculation === 'Oui',
                                    ppg === 'Oui',
                                    etirement === 'Oui',
                                    exerciceFoncier,
                                    style,
                                    pointFaible,
                                    joursRepos,
                                    fcfs,
                                    pfs,
                                    poids,
                                    age
                                )
                                .then((response) => {
                                    if (response.status === 401) {
                                        dispatch(middlewares.logout())
                                    }
                                    if (!onBoardingContext.complete) {
                                        services
                                            .createCalendrier(
                                                auth.userId,
                                                auth.token
                                            )
                                            .then((res) => {
                                                if (res.status === 401) {
                                                    dispatch(
                                                        middlewares.logout()
                                                    )
                                                }
                                                onBoardingContext.handleSetStep(
                                                    2
                                                )
                                            })
                                    }
                                    middlewares
                                        .setUserProfil(response.data)
                                        .then(
                                            props.toast.success(
                                                'Profil enregistré'
                                            )
                                        )
                                })
                        }}
                    >
                        Enregistrer
                    </ButtonPrimary>
                </div>
            </div>
        )
    )
}

export default ProfilForm
