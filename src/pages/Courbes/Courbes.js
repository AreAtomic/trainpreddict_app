import { useDispatch, useSelector } from 'react-redux'
import { CourbesAction } from '../../middlewares/actions'
import { AreaChartSuivi, Card, TitleFive, TitleOne } from '../../components'
import dayjs from 'dayjs'
import { bluencs, lightblue, green, gray, uapink } from '../../theme'
import reload from '../../assets/reload.svg'

const Courbes = (props) => {
    const dispatch = useDispatch()

    const courbes = useSelector((state) => state.courbes.state)
    const year = dayjs().year() - 2000
    if (courbes === undefined) {
        dispatch(CourbesAction.getCourbes())
    }

    return courbes !== undefined ? (
        <div className="courbes column">
            <div
                onClick={() => {
                    dispatch(CourbesAction.putCourbesPrevisionnelle()).then(
                        dispatch(CourbesAction.putCourbesRealise()).then(
                            dispatch(CourbesAction.getCourbes())
                        )
                    )
                }}
                className="reload btn"
            >
                <img src={reload} alt="Reload icon" />
            </div>
            <a href="/accueil" className="is-white p-2">
                Accueil
            </a>
            <TitleOne title="Courbes de suivi" />
            <Card>
                <TitleFive title="Courbes de forme" color="is-light" />
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
                <TitleFive title="Courbes de fatigue" color="is-light" />
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
        </div>
    ) : (
        'Chargement'
    )
}

export default Courbes
