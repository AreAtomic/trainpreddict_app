import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    InputUnit,
    Input,
    Select,
    SelectMultiple,
    ButtonSecondarySmall,
    ButtonPrimarySmall,
} from '../../../components'

import { DonneesAction } from '../../../middlewares/actions'

const InformationPlan = () => {
    const dispatch = useDispatch()

    /* Values */
    const donnees = useSelector((state) => state.donnees.state)
    const [content, setcontent] = useState(donnees)
    if (donnees === undefined) {
        dispatch(DonneesAction.getDonnees()).then((res) => setcontent(res))
    } else if (content.jours_repos === null) {
        setcontent({ ...content, jours_repos: [] })
    } else if (typeof content.ppg === 'boolean') {
        setcontent({ ...content, ppg: content.ppg ? 'Oui' : 'Non' })
    } else if (typeof content.musculation === 'boolean') {
        setcontent({
            ...content,
            musculation: content.musculation ? 'Oui' : 'Non',
        })
    } else if (typeof content.etirement === 'boolean') {
        setcontent({
            ...content,
            etirement: content.etirement ? 'Oui' : 'Non',
        })
    }

    return content !== undefined ? (
        <div className="form pb-4">
            <Input
                type="number"
                label="Score Stress Entrainement"
                tooltip={`C'est la charge de travail que <br/>
                vous impossez à votre corps. Ca correspond<br/>
                au stress engendré qui se transforme <br/>
                ensuite en forme.`}
                placeholder="700"
                value={content.sse}
                error={!(content.sse !== '')}
                onChange={(e) => {
                    setcontent({
                        ...content,
                        sse: e.target.value,
                    })
                }}
            />
            <InputUnit
                type="number"
                label="Nombre d'heures disponibles par semaine"
                unit="heures"
                placeholder="15"
                value={content.nombre_heure_semaine}
                error={!(content.nombre_heure_semaine !== '')}
                onChange={(e) => {
                    setcontent({
                        ...content,
                        nombre_heure_semaine: e.target.value,
                    })
                }}
            />
            <InputUnit
                type="number"
                label="Nombre de jours d'entrainement disponibles"
                placeholder="5"
                unit="jours"
                value={content.nombre_seance_semaine}
                error={!(content.nombre_seance_semaine !== '')}
                onChange={(e) => {
                    setcontent({
                        ...content,
                        nombre_seance_semaine: e.target.value,
                    })
                }}
            />
            <Select
                label="Musculation durant l'hiver"
                options={['', 'Oui', 'Non']}
                value={content.musculation}
                error={!(content.musculation !== '')}
                onChange={(e) => {
                    setcontent({
                        ...content,
                        musculation: e.target.value,
                    })
                }}
            />
            <Select
                label="Préparation Physique Générale durant la saison"
                options={['', 'Oui', 'Non']}
                tooltip="Exercices de gainage et de musculation au poids du corps."
                value={content.ppg}
                error={!(content.ppg !== '')}
                onChange={(e) => {
                    setcontent({
                        ...content,
                        ppg: e.target.value,
                    })
                }}
            />
            <Select
                label="Etirement"
                options={['', 'Oui', 'Non']}
                value={content.etirement}
                error={!(content.etirement !== '')}
                onChange={(e) => {
                    setcontent({
                        ...content,
                        etirement: e.target.value,
                    })
                }}
            />
            <Select
                type="number"
                label="Style"
                unit="heures"
                options={[
                    '',
                    'Grimpeur',
                    'Sprinteur',
                    'Puncheur',
                    'Coureur de classique',
                    'Rouleur',
                    'Complet',
                ]}
                value={content.style}
                error={!(content.style !== '')}
                onChange={(e) => {
                    setcontent({
                        ...content,
                        style: e.target.value,
                    })
                }}
            />
            <Select
                type="number"
                label="Point faible"
                unit="heures"
                options={[
                    '',
                    'Montagne',
                    'Sprint',
                    'Explosivité',
                    'Accélération répétée',
                    'Plat',
                    'Machine de guerre',
                ]}
                value={content.point_faible}
                error={!(content.point_faible !== '')}
                onChange={(e) => {
                    setcontent({
                        ...content,
                        point_faible: e.target.value,
                    })
                }}
            />
            <SelectMultiple
                type="number"
                label="Jours de repos souhaités"
                unit="heures"
                options={[
                    'Lundi',
                    'Mardi',
                    'Mercredi',
                    'Jeudi',
                    'Vendredi',
                    'Samedi',
                    'Dimanche',
                ]}
                value={content.jours_repos}
                error={!(content.jours_repos !== '')}
            />
            <Select
                type="number"
                label="Exercices souhaités durant le foncier"
                unit="heures"
                options={['', 'Force', 'Vélocité', 'Pignon fixe']}
                value={content.foncier}
                error={!(content.foncier !== '')}
                onChange={(e) => {
                    setcontent({
                        ...content,
                        foncier: e.target.value,
                    })
                }}
            />
            <div className="columns is-mobile mb-6">
                <ButtonSecondarySmall
                    nom="Annuler"
                    id="annuer"
                    onClick={() => {
                        setcontent(donnees)
                    }}
                />
                <ButtonPrimarySmall
                    nom="Sauvegarder"
                    id="sauvegarder"
                    onClick={() => {
                        console.log(content.jours_repos)
                        dispatch(
                            DonneesAction.putDonnees(
                                content.sse,
                                content.experience,
                                content.heure_sommeil,
                                content.temps_recup_max,
                                content.nombre_heure_semaine,
                                content.nombre_seance_semaine,
                                content.musculation === 'Oui' ? true : false,
                                content.ppg === 'Oui' ? true : false,
                                content.etirement === 'Oui' ? true : false,
                                content.foncier,
                                content.style,
                                content.point_faible,
                                content.jours_repos
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

export default InformationPlan
