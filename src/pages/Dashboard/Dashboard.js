import dayjs from 'dayjs'
import { useDispatch, useSelector } from 'react-redux'
import { CourbesAction } from '../../middlewares/actions'
import { gray, lightblue, bluencs, uapink, green } from '../../theme'
import { PlanDisplay } from '../Plan/components'
import { Slider, Card, AreaChartSuivi, TitleFive, TitleOne } from '../../components'

const Dashboard = (props) => {
    const dispatch = useDispatch()
    const date = dayjs()

    const courbes = useSelector((state) => state.courbes.state)
    const year = dayjs().year() - 2000
    if (courbes === undefined) {
        dispatch(CourbesAction.getCourbes())
    }

    return courbes !== undefined ? (
        <div className="column">
            <TitleOne title="Courbes de suivi"/>
            <Slider>
                <Card>
                    <TitleFive title="Courbe de fatigue" color="is-light" />
                    <AreaChartSuivi
                        dataPrev={courbes.courbesPrev.forme[year]}
                        dataRea={courbes.courbesRea.forme[year]}
                        nomDataPrev="Prévisionnelle"
                        nomDataRea="Réalisée"
                        nomLabel="Temps"
                        id="forme"
                        labels={courbes.courbesPrev.labels[year]}
                        color={{
                            stroke: { prev: bluencs, rea: gray },
                            fill: { prev: lightblue, rea: green },
                        }}
                    />
                </Card>
                <Card>
                    <TitleFive title="Courbe de fatigue" color="is-light" />
                    <AreaChartSuivi
                        dataPrev={courbes.courbesPrev.fatigue[year]}
                        dataRea={courbes.courbesRea.fatigue[year]}
                        nomDataPrev="Prévisionnelle"
                        nomDataRea="Réalisée"
                        nomLabel="Temps"
                        id="fatigue"
                        labels={courbes.courbesPrev.labels[year]}
                        color={{
                            stroke: { prev: bluencs, rea: gray },
                            fill: { prev: lightblue, rea: uapink },
                        }}
                    />
                </Card>
            </Slider>
            <div className="mt-5"></div>
            <TitleOne title="Plan de la semaine"/>
            <PlanDisplay date={date} />
        </div>
    ) : <div> Chargement </div>
}

export default Dashboard
