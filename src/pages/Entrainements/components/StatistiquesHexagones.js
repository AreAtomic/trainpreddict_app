import { Fragment } from 'react'
import { useState } from 'react'
import { EntrainementsAction } from '../../../middlewares/actions'

import question from '../../../assets/question-blue.svg'
import { Slider as SliderShow } from '../../../components'
import Slider from 'react-input-slider'
import {
    Hexagone,
    TitleSix,
    ButtonPrimaryExtraSmall,
} from '../../../components'
import { useDispatch } from 'react-redux'

const StatistiquesHexagones = (props) => {
    const dispatch = useDispatch()

    const analyse = props.analyse
    const [ressentis, setressentis] = useState(props.analyse.ressentis)

    return (
        <Fragment>
            <div className="columns is-hidden-mobile">
                <div className="column">
                    <Hexagone>
                        <TitleSix
                            title="Intensité de travail"
                            color="is-light"
                        />
                        <p>{analyse.intensite_travail}</p>
                        <img
                            src={question}
                            alt="Question rose, aide pour les cyclistes"
                        />
                    </Hexagone>
                </div>
                <div className="column">
                    <Hexagone color="is-info">
                        <TitleSix title="Score de stress" color="is-light" />
                        <p>{analyse.score_stress_entrainement}</p>
                        <img
                            src={question}
                            alt="Question rose, aide pour les cyclistes"
                        />
                    </Hexagone>
                </div>
                <div className="column">
                    <Hexagone color="is-light">
                        <TitleSix title="Ressentis" />
                        <Slider
                            xstep={0.1}
                            xmin={0}
                            xmax={1}
                            x={ressentis}
                            onChange={({ x }) =>
                                setressentis(parseFloat(x.toFixed(2)))
                            }
                        />
                        <ButtonPrimaryExtraSmall
                            nom="Enregitrer le ressentis"
                            onClick={() => {
                                dispatch(
                                    EntrainementsAction.putEntrainementRessentis(
                                        analyse._id,
                                        ressentis
                                    )
                                )
                            }}
                        />
                    </Hexagone>
                </div>
                <div className="column">
                    <Hexagone>
                        <TitleSix title="Durée" />
                        <p>{analyse.duree}m</p>
                    </Hexagone>
                </div>
            </div>
            <div className="columns is-hidden-mobile">
                <div className="column">
                    <Hexagone color="is-info">
                        <TitleSix title="Distance" color="is-light" />
                        <p>{analyse.distance}km</p>
                    </Hexagone>
                </div>
                <div className="column is-one-quarter">
                    <Hexagone color="is-light">
                        <TitleSix title="Puissance moyenne" />
                        <p>{analyse.power_moy}</p>
                    </Hexagone>
                </div>
                <div className="column">
                    <Hexagone>
                        <TitleSix title="Fréquence cardiaque moyenne" />
                        <p>{analyse.fc_moy} BPM</p>
                    </Hexagone>
                </div>
                <div className="column is-one-quarter">
                    <Hexagone color="is-info">
                        <TitleSix title="Dénivelé" />
                        <p>{analyse.deniv}m</p>
                    </Hexagone>
                </div>
            </div>
            <div className="is-hidden-tablet mb-6">
                <SliderShow>
                    <div className="column">
                        <Hexagone>
                            <TitleSix
                                title="Intensité de travail"
                                color="is-light"
                            />
                            <p>{analyse.intensite_travail}</p>
                            <img
                                src={question}
                                alt="Question rose, aide pour les cyclistes"
                            />
                        </Hexagone>
                    </div>
                    <div className="column">
                        <Hexagone color="is-info">
                            <TitleSix
                                title="Score de stress"
                                color="is-light"
                            />
                            <p>{analyse.score_stress_entrainement}</p>
                            <img
                                src={question}
                                alt="Question rose, aide pour les cyclistes"
                            />
                        </Hexagone>
                    </div>
                    <div className="column">
                        <Hexagone color="is-light">
                            <TitleSix title="Ressentis" />
                            <Slider
                                xstep={0.1}
                                xmin={0}
                                xmax={1}
                                x={ressentis}
                                onChange={({ x }) =>
                                    setressentis(parseFloat(x.toFixed(2)))
                                }
                            />
                            <ButtonPrimaryExtraSmall
                                nom="Enregitrer le ressentis"
                                onClick={() => {
                                    dispatch(
                                        EntrainementsAction.putEntrainementRessentis(
                                            analyse._id,
                                            ressentis
                                        )
                                    )
                                }}
                            />
                        </Hexagone>
                    </div>
                    <div className="column">
                        <Hexagone>
                            <TitleSix title="Durée" />
                            <p>{analyse.duree}m</p>
                        </Hexagone>
                    </div>
                    <div className="column">
                        <Hexagone color="is-info">
                            <TitleSix title="Distance" color="is-light" />
                            <p>{analyse.distance}km</p>
                        </Hexagone>
                    </div>
                    <div className="column is-one-quarter">
                        <Hexagone color="is-light">
                            <TitleSix title="Puissance moyenne" />
                            <p>{analyse.power_moy}</p>
                        </Hexagone>
                    </div>
                    <div className="column">
                        <Hexagone>
                            <TitleSix title="Fréquence cardiaque moyenne" />
                            <p>{analyse.fc_moy} BPM</p>
                        </Hexagone>
                    </div>
                    <div className="column is-one-quarter">
                        <Hexagone color="is-info">
                            <TitleSix title="Dénivelé" />
                            <p>{analyse.deniv}m</p>
                        </Hexagone>
                    </div>
                </SliderShow>
            </div>
        </Fragment>
    )
}

export default StatistiquesHexagones
