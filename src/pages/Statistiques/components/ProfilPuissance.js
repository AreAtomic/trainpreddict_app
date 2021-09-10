import { TitleFive, StatistiquesChart, Card } from '../../../components'
import dayjs from 'dayjs'
import { useDispatch, useSelector } from 'react-redux'
import { StatistiquesAction } from '../../../middlewares/actions'

const ProfilPuissance = (props) => {
    const dispatch = useDispatch()
    const statistiques = useSelector((state) => state.statistiques.state)

    if (statistiques === undefined) {
        dispatch(StatistiquesAction.getStatistiques())
    }

    return statistiques !== undefined ? (
        <Card>
            <TitleFive
                title="Profil de puissance reccord"
                color="is-light"
            />
            <StatistiquesChart
                data={[
                    statistiques.recourd_5_seconds,
                    statistiques.reccord_1_minutes,
                    statistiques.reccord_5_minutes,
                    statistiques.reccord_20_minutes,
                ]}
                labels={[
                    dayjs().hour(0).minute(0).second(5),
                    dayjs().hour(0).minute(1).second(0),
                    dayjs().hour(0).minute(5).second(0),
                    dayjs().hour(0).minute(20).second(0),
                ]}
                nomData="Puissance (en Watts)"
                nomLabel="Temps (en minutes)"
                id={`puissance-stats-alltime${props.id}`}
                date={dayjs().hour(0).minute(0).second(0)}
                color={{ stroke: '#a64667', fill: '#a64667' }}
                nom="Puissance (en Watts)"
                unit="Watts"
                time="00:20:00"
            />
        </Card>
    ) : (
        'Pas de données de puissance enregistrées'
    )
}

export default ProfilPuissance
