import { TitleFive, StatistiquesChart, Card } from '../../../components'
import dayjs from 'dayjs'

const Statistiques = (props) => {
    return (
        <Card>
            <TitleFive title="Profil de puissance de l'entrainement" color="is-light" />
            <StatistiquesChart
                data={[
                    props.analyse.tableau_statistiques.max_5_secs,
                    props.analyse.tableau_statistiques.max_1_min,
                    props.analyse.tableau_statistiques.max_5_mins,
                    props.analyse.tableau_statistiques.max_20_mins,
                ]}
                labels={[
                    dayjs().hour(0).minute(0).second(5),
                    dayjs().hour(0).minute(1).second(0),
                    dayjs().hour(0).minute(5).second(0),
                    dayjs().hour(0).minute(20).second(0),
                ]}
                nomData="Puissance (en Watts)"
                nomLabel="Temps (en minutes)"
                id={`puissance-stats-${props.id}`}
                date={dayjs().hour(0).minute(0).second(0)}
                color={{ stroke: '#a64667', fill: '#a64667' }}
                nom="Puissance (en Watts)"
                unit="Watts"
                time={props.analyse.duree}
            />
        </Card>
    )
}

export default Statistiques
