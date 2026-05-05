/* eslint-disable react-hooks/exhaustive-deps */
import {
    TitleOne,
    Accordion,
    InputUnit,
    Input,
    SelectMultiple,
    ButtonPrimaryMedium,
    Textarea,
} from '../../../../coureur/src/components'
import { useSelector, useDispatch } from 'react-redux'
import {
    CreationSeanceAction,
    MessageAction,
    ProfilAction,
} from '../../../../coureur/src/middlewares/actions'
import { Blocs, Specifique } from '../../../../coureur/src/pages/Seances/components'
import { useState, useEffect } from 'react'

const CreationSeance = () => {
    const dispatch = useDispatch()
    const seance = JSON.parse(sessionStorage.getItem('creationseance'))
    const profil = useSelector((state) => state.profil.state)

    // Infos générales
    const [titre, settitre] = useState(seance ? seance.titre : '')
    const [type, settype] = useState(seance ? seance.type : [])
    const [duree, setduree] = useState(seance ? seance.duree : '00:00:00')
    const [distance, setdistance] = useState(
        seance ? seance.estimation_distance : 0
    )
    const [deniv, setdeniv] = useState(seance ? seance.estimation_deniv : 0)
    // Bloc et série draggable
    const blocs = useSelector((state) => state.creationseance.blocs)
    const [specifique, setspecifique] = useState(
        seance ? seance.specifique : []
    )
    // Infos entrainements
    const [description, setdescription] = useState(
        seance ? seance.description : ''
    )
    const [Z1, setZ1] = useState(0)
    const [Z2, setZ2] = useState(0)
    const [Z3, setZ3] = useState(0)
    const [Z4, setZ4] = useState(0)
    const [Z5, setZ5] = useState(0)
    const [Z6, setZ6] = useState(0)
    const [Z7, setZ7] = useState(0)
    const [puissance_moyenne, setpuissance_moyenne] = useState(
        seance ? (seance.puissance_moyenne * profil.pfs) / 100 : 0
    )
    const [charge_entrainement_estime, setcharge_entrainement_estime] =
        useState(seance ? seance.charge_entrainement_estime : 0)
    const [intensite_travail, setintensite_travail] = useState(
        seance ? seance.intensite_travail : 0
    )
    const [score_stress_entrainement, setscore_stress_entrainement] = useState(
        seance ? seance.score_stress_entrainement : 0
    )
    const [vitesse_moyenne, setvitesse_moyenne] = useState(29)

    // Drag blocs et drop dans spécifique
    const move = (item) => {
        const destClone = Array.from(specifique)
        let newspec = item.specifique
        newspec.forEach((specifique) => {
            destClone.push(specifique)
        })
        setspecifique(destClone)
    }
    const del = (index) => {
        const destClone = Array.from(specifique)
        destClone.splice(index, 1)
        setspecifique(destClone)
    }

    // Calcule les statistiques de la seance
    const conversion_minute = (item) => {
        if (item.split(':').length === 4) {
            return (
                parseInt(item.split(':')[1] * 60) +
                parseInt(item.split(':')[2]) +
                parseFloat(item.split(':')[3] * 0.01666667)
            )
        }
        return (
            parseInt(item.split(':')[0] * 60) +
            parseInt(item.split(':')[1]) +
            parseFloat(item.split(':')[2] * 0.01666667)
        )
    }
    const conversion_duree = (item) => {
        let hours = Math.floor(item / 60)
        let minutes = Math.round(item % 60)
        let seconds = Math.round(((item - Math.round(item, 2)) % 0.6) * 100)
        return `${hours > 9 ? hours : `0${hours}`}:${
            minutes > 9 ? minutes : `0${minutes}`
        }:${seconds > 9 ? (seconds === 60 ? '00' : seconds) : `0${seconds}`}`
    }

    const calculStatistiques = (spe) => {
        // Calcul puissace moyenne
        let pmoy = 0
        let duree = 0
        const convert_zone = [0.56, 0.66, 0.835, 0.985, 1.135, 1.355, 1.5]

        // Reset zone à 0
        setZ1(0)
        setZ2(0)
        setZ3(0)
        setZ4(0)
        setZ5(0)
        setZ6(0)
        setZ7(0)
        spe.forEach((item) => {
            const zone = item.split(':')[0].split('Z')[1]
            const time = conversion_minute(item)
            pmoy += profil.pfs * convert_zone[zone - 1] * time
            duree += time

            //Ajout temps zone en seconde (time/60)
            switch (parseInt(zone)) {
                case 1:
                    setZ1(Z1 + time / 60)
                    break
                case 2:
                    setZ2(Z2 + time / 60)
                    break
                case 3:
                    setZ3(Z3 + time / 60)
                    break
                case 4:
                    setZ4(Z4 + time / 60)
                    break
                case 5:
                    setZ5(Z5 + time / 60)
                    break
                case 6:
                    setZ6(Z6 + time / 60)
                    break
                case 7:
                    setZ7(Z7 + time / 60)
                    break
                default:
                    break
            }
        })
        setpuissance_moyenne(pmoy / duree)
        setduree(conversion_duree(duree))
        // Calcul charge entrainement
        let charge = Math.round(
            ((duree * 60 * (puissance_moyenne / profil.pfs)) / 3600) * 100
        )
        setcharge_entrainement_estime(charge)
        let intensite =
            duree * (puissance_moyenne / profil.pfs) +
            (Z1 / duree +
                Z2 / duree +
                Z3 / duree +
                Z4 / duree +
                Z5 / duree +
                Z6 / duree +
                Z7 / duree) *
                100
        setintensite_travail(intensite)
        setscore_stress_entrainement((charge + intensite) / 2)
        setdistance(Math.round(vitesse_moyenne * (duree / 60)))
    }

    if (!blocs) {
        dispatch(CreationSeanceAction.getBlocs())
    }

    if (!profil) {
        dispatch(ProfilAction.getProfil())
    }

    useEffect(() => {
        calculStatistiques(specifique)
    }, [specifique])

    return blocs ? (
        <div className="column">
            <TitleOne title="Création de séance" />
            <Accordion title="Informations générales">
                <div className="form">
                    <Input
                        value={titre}
                        error={titre.length > 2 ? false : true}
                        label="Titre"
                        onChange={(e) => settitre(e.target.value)}
                    />
                    <SelectMultiple
                        options={[
                            'Foncier',
                            'Récupération',
                            'Rythme',
                            'Seuil',
                            'PMA',
                            'VO2 Max',
                            'Sprint',
                        ]}
                        value={type}
                        onChange={(e) => settype(e.target.value)}
                    />
                    <Textarea
                        value={description}
                        error={!(description.length > 30)}
                        label="Description"
                        onChange={(e) => {
                            setdescription(e.target.value)
                        }}
                    />
                    <InputUnit
                        value={vitesse_moyenne}
                        error={vitesse_moyenne > 10 ? false : true}
                        unit="km/h"
                        label="Vitesse Moyenne"
                        onChange={(e) => setvitesse_moyenne(e.target.value)}
                    />
                    <InputUnit
                        value={Math.round(puissance_moyenne)}
                        unit="W"
                        label="Puissance moyenne"
                        disabled={true}
                    />
                    <Input value={duree} label="Durée" disabled={true} />
                    <InputUnit
                        value={Math.round(score_stress_entrainement)}
                        unit="SSE"
                        label="Score de Stress de l'entrainement"
                        disabled={true}
                    />
                    <InputUnit
                        value={distance}
                        unit="km"
                        label="Distance"
                        disabled={true}
                    />
                    <InputUnit
                        value={deniv}
                        unit="m D+"
                        label="Dénivelé"
                        onChange={(e) => {
                            setdeniv(e.target.value)
                        }}
                        type="number"
                    />
                    <ButtonPrimaryMedium
                        nom="Enregistrer la séance"
                        onClick={() => {
                            if (
                                specifique.length > 0 &&
                                titre.length > 0 &&
                                description.length > 20
                            ) {
                                dispatch(
                                    CreationSeanceAction.postSeance(
                                        titre,
                                        type,
                                        duree,
                                        distance,
                                        deniv,
                                        specifique,
                                        description,
                                        Z1,
                                        Z2,
                                        Z3,
                                        Z4,
                                        Z5,
                                        Z6,
                                        Z7,
                                        Math.round(puissance_moyenne/profil.pfs),
                                        charge_entrainement_estime,
                                        intensite_travail,
                                        Math.round(score_stress_entrainement)
                                    )
                                )
                            } else {
                                dispatch(MessageAction.setMessage({}))
                            }
                        }}
                    />
                </div>
            </Accordion>
            <Accordion title="Blocs">
                <Blocs
                    blocs={blocs}
                    onMove={(item) => {
                        move(item)
                    }}
                />
            </Accordion>
            <div className="mb-4"></div>
            <Specifique
                specifique={specifique}
                onDelete={(item) => {
                    del(item)
                }}
                onChange={(newSpe) => {
                    setspecifique(newSpe)
                    calculStatistiques(newSpe)
                }}
                onSaveBloc={(blocs) => {
                    dispatch(CreationSeanceAction.postBlocs(blocs))
                }}
            />
        </div>
    ) : (
        'Chargement'
    )
}

export default CreationSeance
