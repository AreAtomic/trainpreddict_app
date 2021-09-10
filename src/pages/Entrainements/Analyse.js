import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { EntrainementsAction } from '../../middlewares/actions'
import dayjs from 'dayjs'

import { TitleOne, Slider as SliderShow, TitleTwo } from '../../components'
import {
    ChartFc,
    ChartPower,
    DoghnutBPM,
    DoghnutWatt,
    Explication,
    BarChartBPM,
    BarChartPrincipal,
    BarChartWatt,
    Statistiques,
    StatistiquesHexagones,
} from './components'
import { ProfilPuissance } from '../Statistiques/components'
import { useHistory } from 'react-router-dom'

const Analyse = (props) => {
    const dispatch = useDispatch()
    const analyse = useSelector((state) => state.entrainement.analyse)
    const params = useParams()

    if (analyse === undefined) {
        dispatch(EntrainementsAction.getEntrainementById(params.id))
    }
    // Convertisseurs HH:MM:SS => seconds
    const tosec = (time) => {
        const split = time.split(':')
        const hours = parseInt(split[0] * 3600)
        const minutes = parseInt(split[1] * 60)
        const secs = parseInt(split[2])

        return hours + minutes + secs
    }

    const history = useHistory()
    console.log(history)

    return analyse !== undefined ? (
        <div className="column analyse">
            <div onClick={() => history.back()} className="is-white p-2">
                Retour
            </div>
            <TitleOne
                title={`Entrainement du ${dayjs(analyse.date).format(
                    'DD/MM/YYYY'
                )}`}
            />
            <div className="is-hidden-tablet">
                <SliderShow>
                    <BarChartPrincipal id="mobile" analyse={analyse} />
                    {analyse.power_moy ? (
                        <ChartPower
                            id="mobile"
                            time={tosec(analyse.duree)}
                            analyse={analyse}
                        />
                    ) : (
                        ''
                    )}
                    {analyse.fc_moy ? (
                        <ChartFc
                            id="mobile"
                            time={tosec(analyse.duree)}
                            analyse={analyse}
                        />
                    ) : (
                        ''
                    )}
                </SliderShow>
                <div className="mt-6"></div>
                <Explication analyse={analyse} />
                <div className="mt-6"></div>
                <SliderShow>
                    {analyse.fc_moy ? (
                        <DoghnutBPM id="mobile" analyse={analyse} />
                    ) : (
                        ''
                    )}
                    {analyse.power_moy ? (
                        <DoghnutWatt id="mobile" analyse={analyse} />
                    ) : (
                        ''
                    )}
                </SliderShow>
                <div className="mt-6"></div>
                <TitleTwo title="Statistiques" />
                <StatistiquesHexagones analyse={analyse} />
                <SliderShow>
                    <div className="column">
                        <Statistiques analyse={analyse} id="mobile" />
                    </div>
                    <div className="column">
                        <ProfilPuissance id="mobile" />
                    </div>
                </SliderShow>
                <div className="mt-6"></div>
                <TitleTwo title="Analyse par zone" />
                <SliderShow>
                    {analyse.fc_moy ? (
                        <BarChartBPM
                            id="mobile"
                            title="Courbes des zones de fréquence cardiaque"
                            analyse={analyse}
                        />
                    ) : (
                        ''
                    )}
                    {analyse.power_moy ? (
                        <BarChartWatt
                            id="mobile"
                            title="Courbes des zones de puissances"
                            analyse={analyse}
                        />
                    ) : (
                        ''
                    )}
                </SliderShow>
                <div className="mt-4"></div>
            </div>
            <div className="is-hidden-mobile">
                <div className="columns">
                    <BarChartPrincipal id="big" analyse={analyse} />
                    <div className="column flex">
                        <Explication analyse={analyse} />
                    </div>
                </div>
                <div className="columns">
                    <div className="column analyse">
                        {analyse.power_moy ? (
                            <ChartPower
                                id="big"
                                time={tosec(analyse.duree)}
                                analyse={analyse}
                            />
                        ) : (
                            ''
                        )}
                    </div>
                    <div className="column">
                        {analyse.power_moy ? (
                            <DoghnutWatt id="big" analyse={analyse} />
                        ) : (
                            ''
                        )}
                    </div>
                </div>
                <div className="columns">
                    <div className="column analyse">
                        {analyse.fc_moy ? (
                            <ChartFc
                                id="big"
                                time={tosec(analyse.duree)}
                                analyse={analyse}
                            />
                        ) : (
                            ''
                        )}
                    </div>
                    <div className="column">
                        {analyse.fc_moy ? (
                            <DoghnutBPM id="big" analyse={analyse} />
                        ) : (
                            ''
                        )}
                    </div>
                </div>
                <TitleTwo title="Statistiques" />
                <StatistiquesHexagones analyse={analyse} />
                <div className="columns">
                    <div className="column">
                        <Statistiques analyse={analyse} />
                    </div>
                    <div className="column">
                        <ProfilPuissance />
                    </div>
                </div>
                <TitleTwo title="Analyse par zone" />
                <div className="columns">
                    <div className="column">
                        {analyse.fc_moy ? (
                            <BarChartBPM
                                id="big"
                                title="Fréquence cardiaque"
                                analyse={analyse}
                            />
                        ) : (
                            ''
                        )}
                        {analyse.power_moy ? (
                            <BarChartWatt
                                id="big"
                                title="Puissance"
                                analyse={analyse}
                            />
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="chargement">Chargement</div>
    )
}

export default Analyse
