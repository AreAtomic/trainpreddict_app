import { AreaChartAnalyse, Card, TitleFive } from '../../../components'
import dayjs from 'dayjs'
const ChartFc = (props) => {
    return (
        <Card>
            <TitleFive title="Courbe de Fréquence cardiaque" color="is-light" />
            <AreaChartAnalyse
                data={props.analyse.n10_fc}
                nomData="FC (en BPM)"
                nomLabel="Temps (en minutes)"
                id={`frequence_cardiaque${props.id}`}
                date={dayjs().hour(0).minute(0).second(0)}
                color={{ stroke: '#a64667', fill: '#a64667' }}
                nom="Fréquence cardiaque (FC)"
                unit="BPM"
                time={props.time}
            />
        </Card>
    )
}

export default ChartFc
