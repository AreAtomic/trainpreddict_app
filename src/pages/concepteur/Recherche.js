import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SeancesAction } from '../../middlewares/actions'
import {
    TitleOne,
    Input,
    CardTraining,
    ButtonSecondarySmall,
} from '../../components'
import { useHistory } from 'react-router-dom'
import reload from '../../assets/reload.svg'
import { Fragment } from 'react'

const Recherche = (props) => {
    const dispatch = useDispatch()
    const seances = useSelector((state) => state.seance.state)
    const [update, setupdate] = useState(false)
    const [stored, setstored] = useState(seances)

    /* Global recherche */
    const [recherche, setrecherche] = useState('')
    const [lancerrecherche, setlancerrecherche] = useState(false)
    const [type, settype] = useState('Foncier')

    /** Differrent tableau à afficher pour la recherche */
    const [foncier, setfoncier] = useState([])
    const [rythme, setrythme] = useState([])
    const [seuil, setseuil] = useState([])
    const [pma, setpma] = useState([])
    const [vo2_max, setvo2_max] = useState([])
    const [autres, setautres] = useState([])
    const [temp, settemp] = useState([])

    const history = useHistory()

    const handleSeance = () => {
        setfoncier([])
        setrythme([])
        setseuil([])
        setpma([])
        setvo2_max([])
        setautres([])
        dispatch(SeancesAction.getSeances()).then((res) => {
            setstored(res.seances)
            window.location.reload()
        })
        setupdate(false)
    }

    if (!seances) {
        handleSeance()
    }

    if (!update && stored) {
        seances.forEach((seance) => {
            let find = false
            if (seance.type.indexOf('Foncier') !== -1) {
                find = true
                foncier.push(seance)
            }
            if (seance.type.indexOf('Rythme') !== -1) {
                find = true
                rythme.push(seance)
            }
            if (seance.type.indexOf('Seuil') !== -1) {
                find = true
                seuil.push(seance)
            }
            if (seance.type.indexOf('PMA') !== -1) {
                find = true
                pma.push(seance)
            }
            if (seance.type.indexOf('VO2 Max') !== -1) {
                find = true
                vo2_max.push(seance)
            }
            if (!find) {
                autres.push(seance)
            }
        })
        setupdate(true)
    }

    const handleRecherche = () => {
        let newtemp = []
        stored.forEach((seance) => {
            const titre = seance.titre.toUpperCase()
            if (titre.indexOf(recherche.toUpperCase()) !== -1) {
                newtemp.push(seance)
            }
        })
        settemp(newtemp)
        setlancerrecherche(true)
    }

    return update ? (
        !props.modification ? (
            // Partie recherche de séance
            <div className="recherche-seances">
                <div className="column">
                    <div
                        onClick={() => {
                            handleSeance()
                        }}
                        className="reload btn"
                    >
                        <img src={reload} alt="Reload icon" />
                    </div>
                    <div
                        onClick={() => history.back()}
                        className="is-white p-2"
                    >
                        Retour
                    </div>
                    <TitleOne title="Toutes les séances" />
                    <Input
                        label="Recherche"
                        placeholder="Recherche par nom"
                        value={recherche}
                        onChange={(e) => {
                            setrecherche(e.target.value)
                        }}
                    />
                    <ButtonSecondarySmall
                        nom="Rechercher"
                        onClick={() => {
                            handleRecherche()
                        }}
                    />
                </div>
                <div className="container-seance">
                    <ul className="menu-seance">
                        <li
                            className={`item ${
                                type === 'Foncier' ? 'active' : ''
                            }`}
                            id="Foncier"
                            onClick={(e) => {
                                settype(e.target.id)
                                setlancerrecherche(false)
                            }}
                        >
                            Foncier
                        </li>
                        <li
                            className={`item ${
                                type === 'Rythme' ? 'active' : ''
                            }`}
                            id="Rythme"
                            onClick={(e) => {
                                settype(e.target.id)
                                setlancerrecherche(false)
                            }}
                        >
                            Rythme
                        </li>
                        <li
                            className={`item ${
                                type === 'Seuil' ? 'active' : ''
                            }`}
                            id="Seuil"
                            onClick={(e) => {
                                settype(e.target.id)
                                setlancerrecherche(false)
                            }}
                        >
                            Seuil
                        </li>
                        <li
                            className={`item ${type === 'PMA' ? 'active' : ''}`}
                            id="PMA"
                            onClick={(e) => {
                                settype(e.target.id)
                                setlancerrecherche(false)
                            }}
                        >
                            PMA
                        </li>
                        <li
                            className={`item ${
                                type === 'VO2 Max' ? 'active' : ''
                            }`}
                            id="VO2 Max"
                            onClick={(e) => {
                                settype(e.target.id)
                                setlancerrecherche(false)
                            }}
                        >
                            VO2 Max
                        </li>
                        <li
                            className={`item ${
                                type === 'Autres' ? 'active' : ''
                            }`}
                            id="Autres"
                            onClick={(e) => {
                                settype(e.target.id)
                                setlancerrecherche(false)
                            }}
                        >
                            Autres
                        </li>
                    </ul>
                    <div className="seances">
                        {type === 'Foncier' && !lancerrecherche
                            ? foncier.map((item, i) => {
                                  return (
                                      <CardTraining
                                          entrainement={item}
                                          recherche={true}
                                      />
                                  )
                              })
                            : ''}
                        {type === 'Rythme' && !lancerrecherche
                            ? rythme.map((item, i) => {
                                  return (
                                      <CardTraining
                                          entrainement={item}
                                          recherche={true}
                                      />
                                  )
                              })
                            : ''}
                        {type === 'Seuil' && !lancerrecherche
                            ? seuil.map((item, i) => {
                                  return (
                                      <CardTraining
                                          entrainement={item}
                                          recherche={true}
                                      />
                                  )
                              })
                            : ''}
                        {type === 'PMA' && !lancerrecherche
                            ? pma.map((item, i) => {
                                  return (
                                      <CardTraining
                                          entrainement={item}
                                          recherche={true}
                                      />
                                  )
                              })
                            : ''}
                        {type === 'VO2 Max' && !lancerrecherche
                            ? vo2_max.map((item, i) => {
                                  return (
                                      <CardTraining
                                          entrainement={item}
                                          recherche={true}
                                      />
                                  )
                              })
                            : ''}
                        {type === 'Autres' && !lancerrecherche
                            ? autres.map((item, i) => {
                                  return (
                                      <CardTraining
                                          entrainement={item}
                                          recherche={true}
                                      />
                                  )
                              })
                            : ''}
                        {lancerrecherche
                            ? temp.map((item, i) => {
                                  return (
                                      <CardTraining
                                          entrainement={item}
                                          recherche={true}
                                      />
                                  )
                              })
                            : ''}
                    </div>
                </div>
            </div>
        ) : (
            // Partie changement de séance dans le plan
            <div className="recherche-seances mt-5">
                <div className="column">
                    <TitleOne title="Changer de séance" />
                    <div className="mb-2"></div>
                    <Input
                        label="Recherche"
                        placeholder="Recherche par nom"
                        value={recherche}
                        onChange={(e) => {
                            setrecherche(e.target.value)
                        }}
                    />
                    <div className="mb-1"></div>
                    <ButtonSecondarySmall
                        nom="Rechercher"
                        onClick={() => {
                            handleRecherche()
                        }}
                    />
                </div>
                <div className="container-seance">
                    <ul className="menu-seance">
                        <li
                            className={`item ${
                                type === 'Foncier' ? 'active' : ''
                            }`}
                            id="Foncier"
                            onClick={(e) => {
                                settype(e.target.id)
                                setlancerrecherche(false)
                            }}
                        >
                            Foncier
                        </li>
                        <li
                            className={`item ${
                                type === 'Rythme' ? 'active' : ''
                            }`}
                            id="Rythme"
                            onClick={(e) => {
                                settype(e.target.id)
                                setlancerrecherche(false)
                            }}
                        >
                            Rythme
                        </li>
                        <li
                            className={`item ${
                                type === 'Seuil' ? 'active' : ''
                            }`}
                            id="Seuil"
                            onClick={(e) => {
                                settype(e.target.id)
                                setlancerrecherche(false)
                            }}
                        >
                            Seuil
                        </li>
                        <li
                            className={`item ${type === 'PMA' ? 'active' : ''}`}
                            id="PMA"
                            onClick={(e) => {
                                settype(e.target.id)
                                setlancerrecherche(false)
                            }}
                        >
                            PMA
                        </li>
                        <li
                            className={`item ${
                                type === 'VO2 Max' ? 'active' : ''
                            }`}
                            id="VO2 Max"
                            onClick={(e) => {
                                settype(e.target.id)
                                setlancerrecherche(false)
                            }}
                        >
                            VO2 Max
                        </li>
                        <li
                            className={`item ${
                                type === 'Autres' ? 'active' : ''
                            }`}
                            id="Autres"
                            onClick={(e) => {
                                settype(e.target.id)
                                setlancerrecherche(false)
                            }}
                        >
                            Autres
                        </li>
                    </ul>
                    <div className="seances">
                        {type === 'Foncier' && !lancerrecherche
                            ? foncier.map((item, i) => {
                                  return (
                                      <CardTraining
                                          entrainement={item}
                                          modification={true}
                                          recherche={true}
                                          date={props.date}
                                          planId={props.planId}
                                      />
                                  )
                              })
                            : ''}
                        {type === 'Rythme' && !lancerrecherche
                            ? rythme.map((item, i) => {
                                  return (
                                      <CardTraining
                                          entrainement={item}
                                          modification={true}
                                          recherche={true}
                                          date={props.date}
                                          planId={props.planId}
                                      />
                                  )
                              })
                            : ''}
                        {type === 'Seuil' && !lancerrecherche
                            ? seuil.map((item, i) => {
                                  return (
                                      <CardTraining
                                          entrainement={item}
                                          modification={true}
                                          recherche={true}
                                          date={props.date}
                                          planId={props.planId}
                                      />
                                  )
                              })
                            : ''}
                        {type === 'PMA' && !lancerrecherche
                            ? pma.map((item, i) => {
                                  return (
                                      <CardTraining
                                          entrainement={item}
                                          modification={true}
                                          recherche={true}
                                          date={props.date}
                                          planId={props.planId}
                                      />
                                  )
                              })
                            : ''}
                        {type === 'VO2 Max' && !lancerrecherche
                            ? vo2_max.map((item, i) => {
                                  return (
                                      <CardTraining
                                          entrainement={item}
                                          modification={true}
                                          recherche={true}
                                          date={props.date}
                                          planId={props.planId}
                                      />
                                  )
                              })
                            : ''}
                        {type === 'Autres' && !lancerrecherche ? (
                            <Fragment>
                                {autres.map((item, i) => {
                                    return (
                                        <CardTraining
                                            entrainement={item}
                                            modification={true}
                                            recherche={true}
                                            date={props.date}
                                            planId={props.planId}
                                        />
                                    )
                                })}
                                <CardTraining
                                    entrainement="Repos"
                                    modification={true}
                                    recherche={true}
                                    date={props.date}
                                    planId={props.planId}
                                />
                                <CardTraining
                                    entrainement="Musculation"
                                    modification={true}
                                    recherche={true}
                                    date={props.date}
                                    planId={props.planId}
                                />
                            </Fragment>
                        ) : (
                            ''
                        )}
                        {lancerrecherche
                            ? temp.map((item, i) => {
                                  return (
                                      <CardTraining
                                          entrainement={item}
                                          modification={true}
                                          recherche={true}
                                          date={props.date}
                                          planId={props.planId}
                                      />
                                  )
                              })
                            : ''}
                    </div>
                </div>
            </div>
        )
    ) : (
        <div className="load">Chargement</div>
    )
}

export default Recherche
