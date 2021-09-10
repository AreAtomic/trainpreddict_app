import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    InputUnit,
    ButtonSecondarySmall,
    ButtonPrimarySmall,
} from '../../../components'

import { ProfilAction, DonneesAction } from '../../../middlewares/actions'

const ProfilSportif = () => {
    const dispatch = useDispatch()

    /* Values */
    const profil = useSelector((state) => state.profil.state)
    const [contentProfil, setcontentProfil] = useState(profil)
    if (profil === undefined || profil === '') {
        dispatch(ProfilAction.getProfil()).then((res) => setcontentProfil(res))
    }

    const donnees = useSelector((state) => state.donnees.state)
    const [contentDonnees, setcontentDonnees] = useState(donnees)
    if (donnees === undefined) {
        dispatch(DonneesAction.getDonnees()).then((res) =>
            setcontentDonnees(res)
        )
    }

    return contentProfil !== undefined && contentDonnees !== undefined ? (
        <div className="form">
            <InputUnit
                type="number"
                label="Puissance fonctionnelle au seuil"
                tooltip={`C'est la puissance qui peut être tenue<br/>
                durant un effort maximal d'une heure.<br/>
                Pour la calculer il faut réaliser un <br/>
                test de 20 minutes à fond et prendre <br/>
                95% de la puissance.`}
                placeholder="5"
                unit="Watts"
                value={contentProfil.pfs}
                error={!(contentProfil.pfs !== '')}
                onChange={(e) => {
                    setcontentProfil({
                        ...contentProfil,
                        pfs: e.target.value,
                    })
                }}
            />
            <InputUnit
                type="number"
                label="Fréquence cardiaque fonctionnelle au seuil"
                tooltip={`C'est la fréquence cardiaque (en <br/>
                battement par minutes) qui peut être tenue<br/>
                durant un effort maximal d'une heure. <br/>
                Pour la calculer il faut réaliser un <br/>
                test de 20 minutes à fond et prendre <br/>
                95% de la fréquence cardiaque moyenne.`}
                placeholder="5"
                unit="BPM"
                value={contentProfil.fcfs}
                error={!(contentProfil.fcfs !== '')}
                onChange={(e) => {
                    setcontentProfil({
                        ...contentProfil,
                        fcfs: e.target.value,
                    })
                }}
            />
            <InputUnit
                type="number"
                label="Poids"
                placeholder="5"
                unit="kg"
                value={contentProfil.poids}
                error={!(contentProfil.poids !== '')}
                onChange={(e) => {
                    setcontentProfil({
                        ...contentProfil,
                        poids: e.target.value,
                    })
                }}
            />
            <InputUnit
                type="number"
                label="Expérience"
                placeholder="5"
                unit="ans"
                value={contentDonnees.experience}
                error={!(contentDonnees.experience !== '')}
                onChange={(e) => {
                    setcontentDonnees({
                        ...contentDonnees,
                        experience: e.target.value,
                    })
                }}
            />
            <InputUnit
                type="number"
                label="Sommeil"
                placeholder="8.5"
                unit="heures"
                value={contentDonnees.heure_sommeil}
                error={!(contentDonnees.heure_sommeil !== '')}
                onChange={(e) => {
                    setcontentDonnees({
                        ...contentDonnees,
                        heure_sommeil: e.target.value,
                    })
                }}
            />
            <InputUnit
                type="number"
                label="Temps de récupération optimal"
                placeholder="48"
                tooltip={`C'est le temps que vous mettez pour <br/>
                    récupérer d'une grosse course ou d'un gros<br/>
                    entrainement.`}
                unit="heures"
                value={contentDonnees.temps_recup_max}
                error={!(contentDonnees.temps_recup_max !== '')}
                onChange={(e) => {
                    setcontentDonnees({
                        ...contentDonnees,
                        temps_recup_max: e.target.value,
                    })
                }}
            />
            <div className="columns is-mobile">
                <ButtonSecondarySmall
                    nom="Annuler"
                    id="annuer"
                    onClick={() => {
                        setcontentDonnees(donnees)
                        setcontentProfil(profil)
                    }}
                />
                <ButtonPrimarySmall
                    nom="Sauvegarder"
                    id="sauvegarder"
                    onClick={() => {
                        dispatch(
                            ProfilAction.putProfil(
                                contentProfil.fcfs,
                                contentProfil.pfs,
                                contentProfil.poids
                            )
                        )
                        dispatch(
                            DonneesAction.putDonnees(
                                contentDonnees.sse,
                                contentDonnees.experience,
                                contentDonnees.heure_sommeil,
                                contentDonnees.temps_recup_max,
                                contentDonnees.nombre_heure_semaine,
                                contentDonnees.nombre_seance_semaine,
                                contentDonnees.musculation,
                                contentDonnees.ppg,
                                contentDonnees.etirement,
                                contentDonnees.foncier,
                                contentDonnees.style,
                                contentDonnees.point_faible,
                                contentDonnees.jours_repos
                            )
                        )
                    }}
                />
            </div>
        </div>
    ) : (
        <div className="chargement"></div>
    )
}

export default ProfilSportif
