import { AreaChartAnalyse, TitleFive, Card } from '../../../components'
import dayjs from 'dayjs'

const ChartPower = (props) => {
    return (
        <Card>
            <TitleFive title="Courbe de Puissance" color="is-light" />
            <AreaChartAnalyse
                data={props.analyse.n10_power}
                nomData="P (en W)"
                nomLabel="Temps (en minutes)"
                id={`puissance${props.id}`}
                date={dayjs().hour(0).minute(0).second(0)}
                color={{ stroke: '#001f4e', fill: '#001f4e' }}
                nom="Puissance (P en Watts)"
                unit="Watts"
                time={props.time}
            />
        </Card>
    )
}
export default ChartPower
