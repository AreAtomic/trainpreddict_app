import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    Input,
    ButtonSecondarySmall,
    ButtonPrimarySmall,
    Select,
} from '../../../components'
import { MessageAction, InfosupAction } from '../../../middlewares/actions'

const InformationPersonnelle = () => {
    const dispatch = useDispatch()

    /* Values */
    const infosup = useSelector((state) => state.infosup.state)
    const [content, setcontent] = useState(infosup)

    /* Si pas de donnée on fetch */
    if (infosup === undefined || infosup === '') {
        dispatch(InfosupAction.getInfosup())
    } else if (content === undefined) {
    /* Si donnée pas mise en jour dans le state de modif on maj */
        setcontent(infosup)
    }

    /* Save state */
    const handleClick = () => {
        if (
            content.naissance.split('-')[0] < 2008 &&
            content.adresse.rue.length > 2 &&
            content.adresse.zip.length === 5 &&
            content.adresse.ville.length > 2 &&
            content.telephone.length === 10 &&
            content.decouverte !== '' &&
            content.categorie !== ''
        ) {
            let adresse = `${content.adresse.rue}, ${content.adresse.zip} ${content.adresse.ville}`
            dispatch(
                InfosupAction.putInfosup(
                    content.naissance,
                    adresse,
                    content.decouverte,
                    content.categorie,
                    content.telephone
                )
            )
        } else {
            dispatch(
                MessageAction.setMessage({
                    type: 'warning',
                    message: 'Des champs ne sont pas valides',
                })
            )
        }
    }

    if (content !== undefined) {
        /* Formatage adresse */
        if (typeof content.adresse === 'string') {
            if (content.adresse.split(',')[1] !== undefined) {
                console.log(content.adresse)
                setcontent({
                    ...content,
                    adresse: {
                        rue: content.adresse.split(', ')[0],
                        zip: content.adresse.split(', ')[1].split(' ')[0],
                        ville: content.adresse.split(', ')[1].split(' ')[1],
                    },
                })
            } else {
                setcontent({
                    ...content,
                    adresse: {
                        rue: '',
                        zip: '',
                        ville: '',
                    },
                })
            }
        }
        /* Formatage date */
        if (content.naissance.split('T').length > 1) {
            let day =
                parseInt(content.naissance.split('T')[0].split('-')[2]) + 1
            day = day < 9 ? `0${day}` : `${day}`
            let other = content.naissance.split('T')[0].slice(0, 7)
            setcontent({
                ...content,
                naissance: `${other}-${day}`,
            })
        }
    }

    return content ? (
        typeof content.adresse !== 'string' ? (
            <div className="form">
                <Input
                    type="date"
                    nom="naissance"
                    label="Date de naissance"
                    placeholder=""
                    value={content.naissance.split('T')[0] || "12/12/2000"}
                    error={!(content.naissance.split('-')[0] < 2008)}
                    onChange={(e) => {
                        setcontent({
                            ...content,
                            naissance: e.target.value,
                        })
                    }}
                />
                <Input
                    type="text"
                    name="rue"
                    label="Adresse"
                    placeholder="8 rue de l'UCI"
                    value={content.adresse.rue || ""}
                    error={!(content.adresse.rue.length > 2)}
                    onChange={(e) => {
                        setcontent({
                            ...content,
                            adresse: {
                                ...content.adresse,
                                [e.target.name]: e.target.value,
                            },
                        })
                    }}
                />
                <div className="columns is-mobile">
                    <Input
                        type="text"
                        name="zip"
                        label="Code postal"
                        placeholder="75000"
                        value={content.adresse.zip || ""}
                        error={!(content.adresse.zip.length === 5)}
                        onChange={(e) => {
                            setcontent({
                                ...content,
                                adresse: {
                                    ...content.adresse,
                                    [e.target.name]: e.target.value,
                                },
                            })
                        }}
                    />
                    <Input
                        type="text"
                        name="ville"
                        label="Ville"
                        placeholder="Paris"
                        value={content.adresse.ville || ""}
                        error={!(content.adresse.ville.length > 2)}
                        onChange={(e) => {
                            setcontent({
                                ...content,
                                adresse: {
                                    ...content.adresse,
                                    [e.target.name]: e.target.value,
                                },
                            })
                        }}
                    />
                </div>
                <Input
                    type="phone"
                    name="telephone"
                    label="Téléphone"
                    placeholder="06123456789"
                    value={content.telephone || ""}
                    error={!(content.telephone.length === 10)}
                    onChange={(e) => {
                        setcontent({
                            ...content,
                            [e.target.name]: e.target.value,
                        })
                    }}
                />
                <Select
                    type="text"
                    name="decouverte"
                    label="Comment nous as-tu connus?"
                    options={[
                        '',
                        'Réseaux sociaux',
                        'Bouticycle Delprat',
                        'Bouche à oreille',
                        'Presse',
                        'Autres',
                    ]}
                    value={content.decouverte || ""}
                    error={!(content.decouverte !== '')}
                    onChange={(e) => {
                        setcontent({ ...content, decouverte: e.target.value })
                    }}
                />
                <Select
                    label="Catégorie"
                    placeholder=""
                    value={content.categorie || ""}
                    options={[
                        '',
                        'World tour',
                        'Continental',
                        '1ère FFC',
                        '2ème FFC',
                        '3ème FFC',
                        'FSGT',
                        'Pas de licence',
                    ]}
                    error={!(content.categorie !== '')}
                    onChange={(e) => {
                        setcontent({
                            ...content,
                            categorie: e.target.value,
                            slide: 1,
                        })
                    }}
                />
                <div className="columns is-mobile">
                    <ButtonSecondarySmall
                        nom="Annuler"
                        id="annuer"
                        onClick={() => {
                            setcontent(infosup)
                        }}
                    />
                    <ButtonPrimarySmall
                        nom="Sauvegarder"
                        id="sauvegarder"
                        onClick={handleClick}
                    />
                </div>
            </div>
        ) : (
            <div className="chargement"></div>
        )
    ) : (
        <div className="chargement"></div>
    )
}

export default InformationPersonnelle
